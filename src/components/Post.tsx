import React, { useRef } from 'react';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import FloatingTOC from '@/components/FloatingTOC';
import { ArticleSection, KeyVisualSection } from '@/components/Section';
import type { Post as PostType } from '@/types/global';

interface PostProps {
  post: PostType;
}

const Post = ({ post }: PostProps) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

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
      {post.tableOfContents && !isTablet && (
        <FloatingTOC
          html={post.tableOfContents}
          target={articleRef.current}
        />
      )}
    </>
  );
};

export default Post;
