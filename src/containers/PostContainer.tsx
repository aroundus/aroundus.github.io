import React, { useEffect, useState, useRef } from 'react';

import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import FloatingHeadingStepper from '~components/FloatingHeadingStepper';
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

  const [headingStepperOffset, setHeadingStepperOffset] = useState(0);

  useEffect(() => {
    const listener = () => {
      const { current: keyVisual } = keyVisualRef;
      const { current: article } = articleRef;

      if (keyVisual && article) {
        const keyVisualRect = keyVisual.getBoundingClientRect();
        const articleRect = article.getBoundingClientRect();
        const { pageYOffset } = window;

        if (pageYOffset < keyVisualRect.height) {
          setHeadingStepperOffset(keyVisualRect.height);
        } else if (pageYOffset < articleRect.height) {
          setHeadingStepperOffset(pageYOffset);
        }
      }
    };

    listener();
    window.addEventListener('scroll', listener);

    return () => {
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
        <FloatingHeadingStepper
          html={post.tableOfContents}
          offset={headingStepperOffset}
        />
      )}
    </>
  );
};

export default PostContainer;
