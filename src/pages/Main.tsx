import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import uniq from 'lodash-es/uniq';
import Typewriter from 'typewriter-effect';

import { ArticleListSection } from '@/components/ArticleListSection';
import { ArticleSearchSection } from '@/components/ArticleSearchSection';
import { CategorySection } from '@/components/CategorySection';
import { KeyVisualSection } from '@/components/KeyVisualSection';
import { PaginationSection } from '@/components/PaginationSection';
import { getSearchArticles } from '@/helpers/search';
import type { Article } from '@/types/article';
import type { AnyObject } from '@/types/global';

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

  const fetchedArticles: Article[] = allMarkdownRemark.nodes.map((node: AnyObject) => ({
    id: node.id,
    path: node.fields.slug,
    ...node.frontmatter,
  }));

  const categories: string[] = uniq(
    fetchedArticles
      .map((article) => article.category || '')
      .sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0)),
  );

  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_ALL);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [pagedArticles, setPagedArticles] = useState<Article[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [articleCountPerPage] = useState(5);
  const [totalPageCount, setTotalPageCount] = useState(1);

  useEffect(() => {
    let articles = searchQuery ? getSearchArticles(searchQuery) : fetchedArticles;

    /**
     * 대표 글 포함: 선택한 카테고리가 있거나 검색한 단어가 있는 경우
     * 대표 글 포함 안 함: 선택한 카테고리가 없고 검색한 단어가 없는 경우
     */
    if (selectedCategory === CATEGORY_ALL) {
      if (searchQuery === '') {
        articles = articles.filter((_, index) => index);
      }
    } else {
      articles = articles.filter((article) => article.category === selectedCategory);
    }

    setFilteredArticles(articles);
  }, [selectedCategory, searchQuery, currentPage]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    setTotalPageCount(Math.ceil(filteredArticles.length / articleCountPerPage));
    setPagedArticles(
      filteredArticles.slice((currentPage - 1) * articleCountPerPage, currentPage * articleCountPerPage),
    );
  }, [filteredArticles]);

  return (
    <>
      <KeyVisualSection
        article={fetchedArticles[0]}
        typewriter={{
          title: (
            <Typewriter
              options={{
                delay: 100,
              }}
              onInit={(typewriter) => {
                typewriter.typeString(fetchedArticles[0].title).start();
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
      <ArticleSearchSection onChange={(query) => setSearchQuery(query)} />
      <ArticleListSection articles={pagedArticles} />
      <PaginationSection
        currentPage={currentPage}
        totalPageCount={totalPageCount}
        onChange={(page: number) => setCurrentPage(page)}
      />
    </>
  );
}
