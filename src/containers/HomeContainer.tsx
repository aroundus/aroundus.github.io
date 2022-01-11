import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import isEmpty from 'lodash-es/isEmpty';
import { Index } from 'lunr';

import { KeyVisualSection, PostListSection, PostSearchSection } from '~components/Section';
import { AnyObject, Post } from '~types/global';

declare global {
  interface Window {
    __LUNR__: {
      [key: string]: {
        index: Index;
        store: {
          [ref: string]: AnyObject;
        };
      };
    };
  }
}

const HomeContainer = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
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

  const [searchQuery, setSearchQuery] = useState('');
  const [searchPosts, setSearchPosts] = useState<Array<AnyObject>>([]);

  const getSearchResults = (query: string) => {
    if (isEmpty(query) || isEmpty(window.__LUNR__)) return [];

    const lunr = window.__LUNR__.ko;
    const results = lunr.index.search(`${query}*`);

    return results.map(({ ref }) => ({
      ...lunr.store[ref],
      id: ref,
      date: lunr.store[ref].date.split('T')[0],
    }));
  };

  useEffect(() => {
    setSearchPosts(getSearchResults(searchQuery));
  }, [searchQuery]);

  return (
    <>
      <KeyVisualSection
        post={posts[0]}
        isButtonVisible
        isGradientEnabled
      />
      <PostSearchSection onChange={(query) => setSearchQuery(query)} />
      <PostListSection
        posts={isEmpty(searchQuery)
          ? posts.filter((_: Post, index: number) => index)
          : searchPosts}
      />
    </>
  );
};

export default HomeContainer;
