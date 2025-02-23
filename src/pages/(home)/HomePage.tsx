import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import uniq from 'lodash-es/uniq';
import Typewriter from 'typewriter-effect';
import AOS from 'aos';

import { getSearchArticles } from '@/features/article/lib';
import type { Article } from '@/features/article/model';
import {
  ArticleListSection,
  ArticleSearchSection,
  CategorySection,
  KeyVisualSection,
  PaginationSection,
} from '@/features/article/ui';
import { SEO } from '@/features/seo/ui';
import type { AnyObject } from '@/shared/model';
import { Layout } from '@/widgets/layout/ui';

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

  const [articleCountPerPage] = useState(5);
  const [currentPageNo, setCurrentPageNo] = useState(1);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [isMounted, setIsMounted] = useState(false);
  const [pagedArticles, setPagedArticles] = useState<Article[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(CATEGORY_ALL);
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
  }, [selectedCategory, searchQuery, currentPageNo]);

  useEffect(() => {
    setCurrentPageNo(1);
  }, [selectedCategory, searchQuery]);

  useEffect(() => {
    setTotalPageCount(Math.ceil(filteredArticles.length / articleCountPerPage));
    setPagedArticles(
      filteredArticles.slice((currentPageNo - 1) * articleCountPerPage, currentPageNo * articleCountPerPage),
    );
  }, [filteredArticles]);

  useEffect(() => {
    AOS.init();
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <>
          <SEO />
          <Layout>
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
              currentPageNo={currentPageNo}
              totalPageCount={totalPageCount}
              onChange={(page: number) => setCurrentPageNo(page)}
            />
          </Layout>
        </>
      )}
    </>
  );
}
