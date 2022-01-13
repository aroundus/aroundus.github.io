import React from 'react';
import { graphql } from 'gatsby';

import { Divider } from '@mui/material';

import Layout from '~components/Layout';
import { CommentSection, PostNavigationSection } from '~components/Section';
import SEO from '~components/SEO';
import PostContainer from '~containers/PostContainer';
import { AnyObject } from '~types/global';

interface PostTemplateProps {
  data: {
    markdownRemark: AnyObject;
    prevPost: AnyObject;
    nextPost: AnyObject;
  };
}

const PostTemplate = ({
  data,
  data: {
    markdownRemark,
  },
}: PostTemplateProps) => {
  const post = {
    id: markdownRemark.id,
    path: markdownRemark.fields.slug,
    html: markdownRemark.html,
    ...markdownRemark.frontmatter,
  };

  const prevPost = data.prevPost
    ? {
      path: data.prevPost.fields.slug,
      category: data.prevPost.frontmatter.category,
      title: data.prevPost.frontmatter.title,
    } : undefined;

  const nextPost = data.nextPost
    ? {
      path: data.nextPost.fields.slug,
      category: data.nextPost.frontmatter.category,
      title: data.nextPost.frontmatter.title,
    } : undefined;

  return (
    <>
      <SEO
        title={post.title}
        description={post.description}
        image={post.image}
      />
      <Layout>
        <PostContainer post={post} />
        <Divider />
        <PostNavigationSection
          prevPost={prevPost}
          nextPost={nextPost}
        />
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
        category
        title
      }
    }
    nextPost: markdownRemark(id: { eq: $nextPostID }) {
      fields {
        slug
      }
      frontmatter {
        category
        title
      }
    }
  }
`;

export default PostTemplate;
