import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import uniq from 'lodash-es/uniq';

import {
  CategorySection,
  KeyVisualSection,
  PaginationSection,
  PostListSection,
  PostSearchSection,
} from '~components/Section';
import { getSearchPosts } from '~helpers/search';
import { AnyObject, Post } from '~types/global';

const HomeContainer = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          filter: {
            frontmatter: {
              draft: {
                ne: true
              }
            }
          }
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
              draft
            }
          }
        }
      }
    `,
  );

  const fetchedPosts: Post[] = allMarkdownRemark.nodes.map((node: AnyObject) => ({
    id: node.id,
    path: node.fields.slug,
    ...node.frontmatter,
  }));

  const categories: string[] = uniq(fetchedPosts.map((post) => post.category || '')
    .sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0)));

  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [pagedPosts, setPagedPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [numberOfPostsPerPage] = useState(5);
  const [numberOfTotalPage, setNumberOfTotalPage] = useState(1);

  useEffect(() => {
    let posts = searchQuery
      ? getSearchPosts(searchQuery)
      : fetchedPosts;

    /**
     * 대표 글 포함: 선택한 카테고리가 있거나 검색한 단어가 있는 경우
     * 대표 글 포함 안 함: 선택한 카테고리가 없고 검색한 단어가 없는 경우
     */
    if (selectedCategory === '전체') {
      if (searchQuery === '') {
        posts = posts.filter((_, index) => index);
      }
    } else {
      posts = posts.filter((post) => post.category === selectedCategory);
    }

    setFilteredPosts(posts);
  }, [selectedCategory, searchQuery, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

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
        post={fetchedPosts[0]}
        isButtonVisible
        isGradientEnabled
      />
      <CategorySection
        categories={['전체'].concat(categories)}
        selectedCategory={selectedCategory}
        onClick={(category: string) => setSelectedCategory(category)}
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
