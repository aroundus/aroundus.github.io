import React from 'react';
import { createUseStyles } from 'react-jss';
import { graphql, useStaticQuery } from 'gatsby';

import { List } from '@mui/material';

import { AnyObeject, PostFrontmatter } from '~types/global';

import PostPreview from '../PostPreview';

const PostPreviewSection = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 10
        ) {
          nodes {
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
              date(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    `,
  );

  const posts: PostFrontmatter[] = allMarkdownRemark.nodes
    .map((node: AnyObeject) => ({
      id: node.id,
      path: node.fields.slug,
      ...node.frontmatter,
    }))
    .filter((_: AnyObeject, index: number) => index);

  const styles = createUseStyles({
    container: `
      position: relative;
    `,
  }, {
    name: 'PostPreviewSection',
  })();

  return (
    <section className={styles.container}>
      <List
        sx={{
          m: 'auto', pt: 10, pb: 10, maxWidth: 800,
        }}
      >
        {posts.map((post) => (
          <PostPreview post={post} key={post.id} />
        ))}
      </List>
    </section>
  );
};

export default PostPreviewSection;
