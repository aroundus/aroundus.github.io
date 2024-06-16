import React, { useRef } from 'react';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { FloatingTOC } from '@/components/FloatingTOC';
import { ArticleSection, KeyVisualSection } from '@/components/Section';
import type { Post as PostType } from '@/types/post';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('xl'));

  const articleRef = useRef<HTMLElement>(null);

  return (
    <>
      <KeyVisualSection post={post} />
      {post.html && (
        <ArticleSection
          html={post.html}
          ref={articleRef}
        />
      )}
      {post.tableOfContents && isDesktop && (
        <FloatingTOC
          html={post.tableOfContents}
          target={articleRef.current}
        />
      )}
    </>
  );
}
