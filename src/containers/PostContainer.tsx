import React, { useEffect, useState, useRef } from 'react';
import { Property } from 'csstype';

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

  const [headingStepperPosition, setHeadingStepperPosition] = useState<Property.Position>('absolute');
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
          setHeadingStepperPosition('absolute');
          setHeadingStepperOffset(keyVisualRect.height);
        } else if (pageYOffset < articleRect.height) {
          setHeadingStepperPosition('fixed');
          setHeadingStepperOffset(0);
        } else {
          setHeadingStepperPosition('absolute');
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
          position={headingStepperPosition}
          offset={headingStepperOffset}
        />
      )}
    </>
  );
};

export default PostContainer;
