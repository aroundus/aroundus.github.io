import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import isEmpty from 'lodash-es/isEmpty';

import { Divider } from '@mui/material';
import { InsertEmoticon as InsertEmoticonIcon } from '@mui/icons-material';

import { Layout } from '@/components/Layout';
import { Post } from '@/components/Post';
import { CommentSection, PostNavigationSection, RelatedPostListSection } from '@/components/Section';
import { SEO } from '@/components/SEO';
import { getPostCoverImageURL } from '@/helpers/image';
import { getSearchPosts } from '@/helpers/search';
import type { AnyObject } from '@/types/global';
import type { Post as PostType } from '@/types/post';

interface PostTemplateProps {
  data: {
    markdownRemark: AnyObject;
    prevPost: AnyObject;
    nextPost: AnyObject;
  };
}

export default function PostTemplate({ data, data: { markdownRemark } }: PostTemplateProps) {
  const post = {
    id: markdownRemark.id,
    path: markdownRemark.fields.slug,
    html: markdownRemark.html,
    tableOfContents: markdownRemark.tableOfContents,
    ...markdownRemark.frontmatter,
  } as PostType;

  const prevPost = data.prevPost
    ? {
        path: data.prevPost.fields.slug,
        category: data.prevPost.frontmatter.category,
        title: data.prevPost.frontmatter.title,
      }
    : undefined;

  const nextPost = data.nextPost
    ? {
        path: data.nextPost.fields.slug,
        category: data.nextPost.frontmatter.category,
        title: data.nextPost.frontmatter.title,
      }
    : undefined;

  const [searchPosts, setSearchPosts] = useState<PostType[]>([]);

  useEffect(() => {
    if (post.category) {
      setSearchPosts(
        getSearchPosts(post.category)
          .filter((searchPost) => searchPost.id !== post.id)
          .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
          .slice(0, 5),
      );
    }
  }, [post.category]);

  return (
    <>
      <SEO
        path={post.path}
        title={post.title}
        description={post.description}
        image={getPostCoverImageURL(post.image || post.category)}
      />
      <Layout>
        <Post post={post} />
        <Divider sx={{ mb: -4 }}>
          <InsertEmoticonIcon color="primary" />
        </Divider>
        <PostNavigationSection
          prevPost={prevPost}
          nextPost={nextPost}
        />
        {!isEmpty(searchPosts) && (
          <RelatedPostListSection
            query={post.category as string}
            posts={searchPosts}
          />
        )}
        <CommentSection
          options={{
            id: post.id,
            title: `${post.title} #${post.category}`,
          }}
        />
      </Layout>
    </>
  );
}

export const query = graphql`
  query Post($id: String!, $prevPostID: String, $nextPostID: String) {
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
      tableOfContents(maxDepth: 2)
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
