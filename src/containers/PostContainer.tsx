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

  const keyVisualRef = useRef<HTMLElement>(null);
  const articleRef = useRef<HTMLElement>(null);

  const [tocPosition, setTOCPosition] = useState<Property.Position>('absolute');
  const [tocXOffset, setTOCXOffset] = useState(0);
  const [tocYOffset, setTOCYOffset] = useState(0);

  useEffect(() => {
    const listener = () => {
      const { current: keyVisual } = keyVisualRef;
      const { current: article } = articleRef;

      if (keyVisual === null || article === null) return;

      const keyVisualRect = keyVisual.getBoundingClientRect();
      const articleRect = article.getBoundingClientRect();
      const { pageYOffset } = window;

      setTOCXOffset(articleRect.left + articleRect.width);

      if (pageYOffset < keyVisualRect.height) {
        setTOCPosition('absolute');
        setTOCYOffset(keyVisualRect.height);
      } else if (pageYOffset < articleRect.height) {
        setTOCPosition('fixed');
        setTOCYOffset(0);
      } else {
        setTOCPosition('absolute');
      }
    };

    listener();
    window.addEventListener('resize', listener);
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('resize', listener);
      window.removeEventListener('scroll', listener);
    };
  }, []);

  return (
    <>
      <KeyVisualSection
        ref={keyVisualRef}
        post={post}
      />
      {post.html && (
        <ArticleSection
          ref={articleRef}
          html={post.html}
        />
      )}
      {post.tableOfContents && !isTablet && (
        <FloatingTOC
          html={post.tableOfContents}
          position={tocPosition}
          xOffset={tocXOffset}
          yOffset={tocYOffset}
        />
      )}
    </>
  );
};

export default PostContainer;
