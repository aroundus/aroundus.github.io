import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import isEmpty from 'lodash-es/isEmpty';
import { Index } from 'lunr';

import {
  KeyVisualSection, PaginationSection, PostListSection, PostSearchSection,
} from '~components/Section';
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

  const posts: Post[] = allMarkdownRemark.nodes.map((node: AnyObject) => ({
    id: node.id,
    path: node.fields.slug,
    ...node.frontmatter,
  }));

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [pagedPosts, setPagedPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPostsPerPage] = useState(5);
  const [numberOfTotalPage, setNumberOfTotalPage] = useState(1);

  const getSearchResults = (query: string): Post[] => {
    if (isEmpty(query) || isEmpty(window.__LUNR__)) return [];

    const lunr = window.__LUNR__.ko;
    const results = lunr.index.search(`${query}*`);

    return results.map(({ ref }) => ({
      ...lunr.store[ref],
      id: ref,
      date: lunr.store[ref].date.split('T')[0],
    } as Post));
  };

  useEffect(() => {
    setFilteredPosts(searchQuery
      ? getSearchResults(searchQuery)
      : posts.filter((_, index) => index));
  }, [searchQuery, currentPage]);

  useEffect(() => {
    setNumberOfTotalPage(Math.ceil(filteredPosts.length / numberOfPostsPerPage));
    setPagedPosts(filteredPosts.slice(
      (currentPage - 1) * numberOfPostsPerPage,
      currentPage * numberOfPostsPerPage,
    ));
  }, [filteredPosts]);

  return (
    <>
      <KeyVisualSection
        post={posts[0]}
        isButtonVisible
        isGradientEnabled
      />
      <PostSearchSection onChange={(query) => setSearchQuery(query)} />
      <PostListSection posts={pagedPosts} />
      <PaginationSection
        currentPage={currentPage}
        numberOfTotalPage={numberOfTotalPage}
        onChange={(page: number) => setCurrentPage(page)}
      />
    </>
  );
};

export default HomeContainer;
