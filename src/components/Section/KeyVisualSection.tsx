import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Properties } from 'csstype';

import { Button, ButtonProps, colors, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';

import { getPostCoverImageURL } from '@/helpers/image';
import type { Post } from '@/types/global';

interface KeyVisualSectionProps {
  post: Post;
  typewriter?: {
    title?: React.ReactNode;
  };
  isButtonVisible?: boolean;
  isGradientEnabled?: boolean;
}

const KeyVisualSection = ({
  post,
  typewriter,
  isButtonVisible = false,
  isGradientEnabled = false,
}: KeyVisualSectionProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [backgroundStyle, setBackgroundStyle] = useState<Properties>({});

  const StyledButton = styled(Button)<ButtonProps>(() => ({
    '&': {
      border: `1px solid ${colors.common.white}`,
      color: colors.common.white,
      opacity: 0.6,
      transition: 'opacity 0.2s',
    },
    '&:hover': {
      border: `1px solid ${colors.common.white}`,
      color: colors.common.white,
      opacity: 1,
    },
  }));

  const useStyles = createUseStyles(
    {
      container: {
        '&': `
        background: no-repeat center / cover;
        background-color: ${colors.grey[600]};
        background-image: url(${getPostCoverImageURL(post.image || post.category)});
        z-index: 2;
      `,
        '&::before': `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.5;
        content: '';
        ${
          isGradientEnabled
            ? `
          background-image: linear-gradient(-45deg, ${colors.common.black}, ${colors.pink[500]}, ${colors.blue[500]}, ${colors.green[500]});
          background-size: 400% 400%;
          animation: gradient 10s ease infinite;
        `
            : `
          background-color: ${colors.common.black};
        `
        }
      `,
      },
      content: `
      margin: auto;
      max-width: 900px;
    `,
    },
    {
      name: 'KeyVisualSection',
    },
  );

  const styles = useStyles();

  return (
    <section
      className={styles.container}
      style={{
        padding: `${theme.spacing(isMobile ? 32 : 64)} ${theme.spacing(isMobile ? 12 : 16)} ${theme.spacing(16)}`,
        ...backgroundStyle,
      }}
    >
      <div className={styles.content}>
        <Typography
          variant="h6"
          color={colors.grey[200]}
          sx={{ mb: 2 }}
          position="relative"
        >
          #{post.category} Episode {post.index}
        </Typography>
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          color={colors.common.white}
          sx={{ mb: 3 }}
          position="relative"
        >
          {typewriter?.title ? (
            <>
              <div style={{ position: 'absolute' }}>{typewriter.title}</div>
              <div style={{ opacity: 0 }}>{post.title} |</div>
            </>
          ) : (
            post.title
          )}
        </Typography>
        <Typography
          variant={isMobile ? 'body2' : 'body1'}
          color={colors.common.white}
          position="relative"
        >
          {post.description}
        </Typography>
        <Typography
          variant="subtitle1"
          color={colors.grey[300]}
          sx={{ mt: 6 }}
          position="relative"
        >
          {post.date}
        </Typography>
        {isButtonVisible && (
          <StyledButton
            size="large"
            sx={{ mt: 6, px: 10 }}
            href={post.path}
          >
            내용 읽기
          </StyledButton>
        )}
      </div>
    </section>
  );
};

export default KeyVisualSection;
