import React, { useEffect, useRef, useState } from 'react';

import { InsertEmoticon as InsertEmoticonIcon } from '@mui/icons-material';
import { Divider, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { graphql } from 'gatsby';
import isEmpty from 'lodash-es/isEmpty';

import { getArticleCoverImageURL, getSearchArticles } from '@/features/article/lib';
import type { Article as ArticleType } from '@/features/article/model';
import {
  ArticleNavigationSection,
  ArticleSection,
  CommentSection,
  FloatingTOC,
  KeyVisualSection,
  RelatedArticleListSection,
} from '@/features/article/ui';
import { Helmet } from '@/features/helmet/ui';
import type { AnyObject } from '@/shared/model';
import { Layout } from '@/widgets/layout/ui';

interface ArticlePageTemplateProps {
  data: {
    markdownRemark: AnyObject;
    prevArticle: AnyObject;
    nextArticle: AnyObject;
  };
}

export default function ArticlePageTemplate({ data, data: { markdownRemark } }: ArticlePageTemplateProps) {
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

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));
  const articleRef = useRef<HTMLElement>(null);

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
    <Layout>
      <Helmet
        description={article.description}
        image={getArticleCoverImageURL(article.image || article.category)}
        path={article.path}
        title={article.title}
      />
      <KeyVisualSection article={article} />
      {article.html && (
        <ArticleSection
          html={article.html}
          ref={articleRef}
        />
      )}
      {article.tableOfContents && isDesktop && (
        <FloatingTOC
          html={article.tableOfContents}
          target={articleRef.current}
        />
      )}
      <Divider sx={{ mb: -4 }}>
        <InsertEmoticonIcon color="primary" />
      </Divider>
      <ArticleNavigationSection
        nextArticle={nextArticle}
        prevArticle={prevArticle}
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
  );
}

export const query = graphql`
  query Article($id: String!, $prevArticleID: String, $nextArticleID: String) {
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
