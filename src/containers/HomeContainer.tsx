import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {
  KeyVisualSection, PaginationSection, PostListSection, PostSearchSection,
} from '~components/Section';
import { getSearchPosts } from '~helpers/search';
import { AnyObject, Post } from '~types/global';

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

  useEffect(() => {
    setFilteredPosts(searchQuery
      ? getSearchPosts(searchQuery)
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
