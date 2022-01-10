import React from 'react';
import { graphql } from 'gatsby';

import Layout from '~components/Layout';
import { CommentSection } from '~components/Section';
import SEO from '~components/SEO';
import PostContainer from '~containers/PostContainer';
import { AnyObject } from '~types/global';

interface PostNavigation {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
  };
}

interface PostTemplateProps {
  data: {
    markdownRemark: AnyObject;
    prevPost: PostNavigation;
    nextPost: PostNavigation;
  };
}

const PostTemplate = ({
  data: {
    markdownRemark,
    prevPost,
    nextPost,
  },
}: PostTemplateProps) => {
  const post = {
    id: markdownRemark.id,
    path: markdownRemark.fields.slug,
    html: markdownRemark.html,
    ...markdownRemark.frontmatter,
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        image={post.image}
      />
      <Layout>
        <PostContainer post={post} />
        <CommentSection
          options={{
            id: post.id,
            title: `${post.title} #${post.category}`,
          }}
        />
      </Layout>
    </>
  );
};

export const query = graphql`
  query Post(
    $id: String!
    $prevPostID: String
    $nextPostID: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      fields {
        slug
      }
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
    prevPost: markdownRemark(id: { eq: $prevPostID }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    nextPost: markdownRemark(id: { eq: $nextPostID }) {
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
