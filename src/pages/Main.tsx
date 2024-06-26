import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import uniq from 'lodash-es/uniq';
import Typewriter from 'typewriter-effect';

import {
  CategorySection,
  KeyVisualSection,
  PaginationSection,
  PostListSection,
  PostSearchSection,
} from '@/components/Section';
import { getSearchPosts } from '@/helpers/search';
import type { AnyObject } from '@/types/global';
import type { Post } from '@/types/post';

const CATEGORY_ALL = '전체';

export default function Main() {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { frontmatter: { draft: { ne: true } } }
        sort: { fields: [frontmatter___date, frontmatter___index, frontmatter___title], order: [DESC, DESC, ASC] }
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
  `);

  const fetchedPosts: Post[] = allMarkdownRemark.nodes.map((node: AnyObject) => ({
    id: node.id,
    path: node.fields.slug,
    ...node.frontmatter,
  }));

  const categories: string[] = uniq(
    fetchedPosts.map((post) => post.category || '').sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0)),
  );

  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [pagedPosts, setPagedPosts] = useState<Post[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postCountPerPage] = useState(5);
  const [totalPageCount, setTotalPageCount] = useState(1);

  useEffect(() => {
    let posts = searchQuery ? getSearchPosts(searchQuery) : fetchedPosts;

    /**
     * 대표 글 포함: 선택한 카테고리가 있거나 검색한 단어가 있는 경우
     * 대표 글 포함 안 함: 선택한 카테고리가 없고 검색한 단어가 없는 경우
     */
    if (selectedCategory === CATEGORY_ALL) {
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
    setTotalPageCount(Math.ceil(filteredPosts.length / postCountPerPage));
    setPagedPosts(filteredPosts.slice((currentPage - 1) * postCountPerPage, currentPage * postCountPerPage));
  }, [filteredPosts]);

  return (
    <>
      <KeyVisualSection
        post={fetchedPosts[0]}
        typewriter={{
          title: (
            <Typewriter
              options={{
                delay: 100,
              }}
              onInit={(typewriter) => {
                typewriter.typeString(fetchedPosts[0].title).start();
              }}
            />
          ),
        }}
        isButtonVisible
        isGradientEnabled
      />
      <CategorySection
        categories={[CATEGORY_ALL].concat(categories)}
        selectedCategory={selectedCategory}
        onClick={(category: string) => setSelectedCategory(category)}
      />
      <PostSearchSection onChange={(query) => setSearchQuery(query)} />
      <PostListSection posts={pagedPosts} />
      <PaginationSection
        currentPage={currentPage}
        totalPageCount={totalPageCount}
        onChange={(page: number) => setCurrentPage(page)}
      />
    </>
  );
}
