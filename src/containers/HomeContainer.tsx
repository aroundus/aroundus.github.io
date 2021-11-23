import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { KeyVisualSection, PostPresentationSection } from '~components/Section';
import { AnyObject } from '~types/global';

const HomeContainer = () => {
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
              image
              date(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    `,
  );

  const posts = allMarkdownRemark.nodes.map((node: AnyObject) => ({
    id: node.id,
    path: node.fields.slug,
    ...node.frontmatter,
  }));

  return (
    <>
      <KeyVisualSection post={posts[0]} />
      <PostPresentationSection posts={posts.filter((_: AnyObject, index: number) => index)} />
    </>
  );
};

export default HomeContainer;
