import React from 'react';
import { graphql } from 'gatsby';

import Layout from '~components/Layout';
import SEO from '~components/SEO';
import PostContainer from '~containers/PostContainer';
import { AnyObject } from '~types/global';

interface PostTemplateProps {
  data: {
    markdownRemark: AnyObject;
  };
}

const PostTemplate = ({
  data: {
    markdownRemark,
  },
}: PostTemplateProps) => {
  const post = {
    id: markdownRemark.id,
    html: markdownRemark.html,
    ...markdownRemark.frontmatter,
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
      />
      <Layout>
        <PostContainer post={post} />
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
        category
        index
        title
        description
        image
        date(formatString: "YYYY-MM-DD")
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

export default PostTemplate;
