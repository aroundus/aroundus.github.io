import React, { useRef } from 'react';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { FloatingTOC } from '@/components/FloatingTOC';
import { ArticleSection, KeyVisualSection } from '@/components/Section';
import type { Article as ArticleType } from '@/types/article';

interface ArticleProps {
  article: ArticleType;
}

export function Article({ article }: ArticleProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));

  const articleRef = useRef<HTMLElement>(null);

  return (
    <>
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
    </>
  );
}
