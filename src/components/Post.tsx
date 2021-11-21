import React from 'react';
import { graphql } from 'gatsby';

import Layout from './Layout';
import SEO from './SEO';

interface PostProps {
  data: any;
  location: any;
}

const Post = ({ data, location }: PostProps) => {
  const post = data?.markdownRemark;

  return (
    <>
      <SEO />
      <Layout>
        <article>
          <h1>{post?.frontmatter?.title}</h1>
          <p>{post?.frontmatter?.date}</p>
          <section dangerouslySetInnerHTML={{ __html: post?.html }} />
        </article>
      </Layout>
    </>
  );
};

export const query = graphql`
  query Post(
    $id: String!
    $previousPostID: String
    $nextPostID: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostID }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostID }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;

export default Post;
