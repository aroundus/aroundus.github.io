import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import isEmpty from 'lodash-es/isEmpty';

import { Divider } from '@mui/material';
import { InsertEmoticon as InsertEmoticonIcon } from '@mui/icons-material';

import { Article } from '@/components/Article';
import { ArticleNavigationSection } from '@/components/ArticleNavigationSection';
import { CommentSection } from '@/components/CommentSection';
import { Layout } from '@/components/Layout';
import { RelatedArticleListSection } from '@/components/RelatedArticleListSection';
import { SEO } from '@/components/SEO';
import { getArticleCoverImageURL } from '@/helpers/image';
import { getSearchArticles } from '@/helpers/search';
import type { Article as ArticleType } from '@/types/article';
import type { AnyObject } from '@/types/global';

interface ArticleTemplateProps {
  data: {
    markdownRemark: AnyObject;
    prevArticle: AnyObject;
    nextArticle: AnyObject;
  };
}

export default function ArticleTemplate({ data, data: { markdownRemark } }: ArticleTemplateProps) {
  const article = {
    id: markdownRemark.id,
    path: markdownRemark.fields.slug,
    html: markdownRemark.html,
    tableOfContents: markdownRemark.tableOfContents,
    ...markdownRemark.frontmatter,
  } as ArticleType;

  const prevArticle = data.prevArticle
    ? {
        path: data.prevArticle.fields.slug,
        category: data.prevArticle.frontmatter.category,
        title: data.prevArticle.frontmatter.title,
      }
    : undefined;

  const nextArticle = data.nextArticle
    ? {
        path: data.nextArticle.fields.slug,
        category: data.nextArticle.frontmatter.category,
        title: data.nextArticle.frontmatter.title,
      }
    : undefined;

  const [searchArticles, setSearchArticles] = useState<ArticleType[]>([]);

  useEffect(() => {
    if (article.category) {
      setSearchArticles(
        getSearchArticles(article.category)
          .filter((searchArticle) => searchArticle.id !== article.id)
          .sort((a, b) => Date.parse(b.date) - Date.parse(a.date))
          .slice(0, 5),
      );
    }
  }, [article.category]);

  return (
    <>
      <SEO
        path={article.path}
        title={article.title}
        description={article.description}
        image={getArticleCoverImageURL(article.image || article.category)}
      />
      <Layout>
        <Article article={article} />
        <Divider sx={{ mb: -4 }}>
          <InsertEmoticonIcon color="primary" />
        </Divider>
        <ArticleNavigationSection
          prevArticle={prevArticle}
          nextArticle={nextArticle}
        />
        {!isEmpty(searchArticles) && (
          <RelatedArticleListSection
            articles={searchArticles}
            query={article.category as string}
          />
        )}
        <CommentSection
          options={{
            id: article.id,
            title: `${article.title} #${article.category}`,
          }}
        />
      </Layout>
    </>
  );
}

export const query = graphql`
  query Post($id: String!, $prevArticleID: String, $nextArticleID: String) {
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
    prevArticle: markdownRemark(id: { eq: $prevArticleID }) {
      fields {
        slug
      }
      frontmatter {
        category
        title
      }
    }
    nextArticle: markdownRemark(id: { eq: $nextArticleID }) {
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
