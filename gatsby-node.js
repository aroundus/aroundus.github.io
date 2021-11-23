const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const queriedPosts = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 1000
      ) {
        nodes {
          id
          fields {
            slug
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
  const Post = path.resolve('./src/components/Post.tsx');

  posts.forEach((post, index) => {
    const previousPostID = index === 0 ? null : posts[index - 1].id
    const nextPostID = index === posts.length - 1 ? null : posts[index + 1].id

    createPage({
      path: post.fields.slug,
      component: Post,
      context: {
        id: post.id,
        previousPostID,
        nextPostID,
      },
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;

  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
    }

    type Author {
      name: String
      summary: String
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
    }

    type Fields {
      slug: String
    }
  `);
};
