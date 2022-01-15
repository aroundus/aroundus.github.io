const path = require('path');
const { GitalkPluginHelper } = require('gatsby-plugin-gitalk');
const { createFilePath } = require('gatsby-source-filesystem');

const isProduction = process.env.NODE_ENV === 'production';
const gitalkCreateIssueToken = process.env.GITALK_CREATE_ISSUE_TOKEN;

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const queriedPosts = await graphql(`
    {
      allMarkdownRemark(
        filter: {
          frontmatter: {
            draft: {
              ne: true
            }
          }
        }
        sort: {
          fields: [frontmatter___date, frontmatter___index, frontmatter___title],
          order: [DESC, DESC, ASC]
        }
      ) {
        nodes {
          id
          fields {
            slug
          }
          frontmatter {
            category
            index
            title
            description
            draft
          }
        }
      }
    }
  `);

  if (queriedPosts.errors) {
    reporter.panicOnBuild(
      'There was an error loading your blog posts',
      queriedPosts.errors,
    );
    return;
  }

  const posts = queriedPosts.data.allMarkdownRemark.nodes;
  const PostTemplate = path.resolve('./src/components/Template/PostTemplate.tsx');

  posts.forEach((post, index) => {
    const prevPostID = index === 0 ? null : posts[index - 1].id
    const nextPostID = index === posts.length - 1 ? null : posts[index + 1].id

    createPage({
      path: post.fields.slug,
      component: PostTemplate,
      context: {
        id: post.id,
        prevPostID,
        nextPostID,
      },
    });
  });

  if (isProduction && gitalkCreateIssueToken) {
    for (let i = 0; i < posts.length; i++) {
      const post = posts[i];

      const issueOptions = {
        clientID: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        repo: process.env.npm_package_name,
        owner: process.env.GITHUB_USER_NAME,
        id: post.id,
        title: `${post.frontmatter.title} #${post.frontmatter.category}`,
        description: post.frontmatter.description,
        url: `https://${process.env.npm_package_name}${post.fields.slug}`,
        personalToken: gitalkCreateIssueToken,
      };

      await GitalkPluginHelper.createIssue(issueOptions);
      reporter.info(`issue - ${issueOptions.title}`);
    }
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value: `/post${value}`,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteMetadata {
      title: String
      author: Author
      description: String
      url: String
      image: String
    }

    type Author {
      name: String
      summary: String
      email: String
      url: URL
    }

    type URL {
      github: String
      instagram: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      category: String
      index: Int
      title: String
      description: String
      image: String
      date: Date @dateformat
      draft: Boolean
    }

    type Fields {
      slug: String
    }
  `);
};
