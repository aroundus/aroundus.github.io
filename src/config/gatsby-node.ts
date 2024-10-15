import dotenv from 'dotenv';
import path from 'path';
import { GatsbyNode as GatsbyNodeType } from 'gatsby';
import { GitalkPluginHelper } from 'gatsby-plugin-gitalk';
import { createFilePath } from 'gatsby-source-filesystem';

import type { AnyObject } from '@/types/global';

const isProduction = process.env.NODE_ENV === 'production';
const gitalkCreateIssueToken = process.env.GITALK_CREATE_ISSUE_TOKEN;

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const GatsbyNode: GatsbyNodeType = {};

GatsbyNode.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const fetchedArticlesQuery = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
        sort: { fields: [frontmatter___date, frontmatter___index, frontmatter___title], order: [DESC, DESC, ASC] }
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

  if (fetchedArticlesQuery.errors) {
    reporter.panicOnBuild('There was an error loading your blog articles', fetchedArticlesQuery.errors as Error);
    return;
  }

  const articles = (fetchedArticlesQuery.data as AnyObject).allMarkdownRemark.nodes;
  const ArticleTemplate = path.resolve(__dirname, '../components/Template/ArticleTemplate.tsx');

  articles.forEach((article: AnyObject, index: number) => {
    const prevArticleID = index === articles.length - 1 ? null : articles[index + 1].id;
    const nextArticleID = index === 0 ? null : articles[index - 1].id;

    createPage({
      path: article.fields.slug,
      component: ArticleTemplate,
      context: {
        id: article.id,
        prevArticleID,
        nextArticleID,
      },
    });
  });

  if (isProduction && gitalkCreateIssueToken) {
    const issueOptionsPromises = [];

    for (let i = 0; i < articles.length; i += 1) {
      const article = articles[i];

      const issueOptions = {
        clientID: process.env.GITALK_GITHUB_CLIENT_ID as string,
        clientSecret: process.env.GITALK_GITHUB_CLIENT_SECRET as string,
        repo: process.env.SITE_DOMAIN as string,
        owner: process.env.GITHUB_USER_NAME as string,
        id: article.id,
        title: `${article.frontmatter.title} #${article.frontmatter.category}`,
        description: article.frontmatter.description,
        url: `https://${process.env.SITE_DOMAIN}${article.fields.slug}`,
        personalToken: gitalkCreateIssueToken,
      };

      issueOptionsPromises.push(
        (() => {
          GitalkPluginHelper.createIssue(issueOptions);
          reporter.success(`createIssue - ${issueOptions.title}`);
        })(),
      );
    }

    await Promise.all(issueOptionsPromises);
  }
};

GatsbyNode.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: 'slug',
      node,
      value: `/articles${value}`,
    });
  }
};

/**
 * @see https://www.gatsbyjs.com/docs/reference/graphql-data-layer/schema-customization/#creating-type-definitions
 */
GatsbyNode.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes } = actions;

  const typeDefs = [
    schema.buildObjectType({
      name: 'SiteMetadata',
      fields: {
        title: 'String',
        author: 'Author',
        description: 'String',
        url: 'String',
        image: 'String',
      },
    }),
    schema.buildObjectType({
      name: 'Author',
      fields: {
        name: 'String',
        summary: 'String',
        email: 'String',
        url: 'URL',
      },
    }),
    schema.buildObjectType({
      name: 'URL',
      fields: {
        github: 'String',
        instagram: 'String',
      },
    }),
    schema.buildObjectType({
      name: 'MarkdownRemark',
      fields: {
        frontmatter: 'Frontmatter',
        fields: 'Fields',
      },
      interfaces: ['Node'],
    }),
    schema.buildObjectType({
      name: 'Frontmatter',
      fields: {
        category: 'String',
        index: 'Int',
        title: 'String',
        description: 'String',
        image: 'String',
        date: {
          type: 'Date',
          extensions: {
            dateformat: {},
          },
        },
        draft: 'Boolean',
      },
    }),
    schema.buildObjectType({
      name: 'Fields',
      fields: {
        slug: 'String',
      },
    }),
  ];

  createTypes(typeDefs);
};

export default GatsbyNode;
