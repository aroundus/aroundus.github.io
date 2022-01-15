import React, { useEffect, useState, useRef } from 'react';
import { Property } from 'csstype';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import FloatingTOC from '~components/FloatingTOC';
import { ArticleSection, KeyVisualSection } from '~components/Section';
import { Post } from '~types/global';

interface PostContainerProps {
  post: Post;
}

const PostContainer = ({
  post,
}: PostContainerProps) => {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));

  const articleRef = useRef<HTMLElement>(null);

  return (
    <>
      <KeyVisualSection post={post} />
      {post.html && (
        <ArticleSection
          ref={articleRef}
          html={post.html}
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

export default PostContainer;
