import React, { useEffect, useState } from 'react';

import { Button, ButtonProps, colors, Typography, useMediaQuery } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import { createUseStyles } from 'react-jss';

import { getArticleCoverImageURL } from '../lib';
import type { Article } from '../model';

interface KeyVisualSectionProps {
  article: Article;
  isButtonVisible?: boolean;
  isGradientEnabled?: boolean;
  typewriter?: { title?: React.ReactNode };
}

export function KeyVisualSection({
  article,
  isButtonVisible = false,
  isGradientEnabled = false,
  typewriter,
}: KeyVisualSectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isMounted, setIsMounted] = useState(false);

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
          background-color: ${colors.grey[600]};
          background-image: url(${getArticleCoverImageURL(article.image || article.category)});
          background: no-repeat center / cover;
          z-index: 2;
        `,
        '&::before': `
          bottom: 0;
          content: '';
          left: 0;
          opacity: 0.5;
          position: absolute;
          right: 0;
          top: 0;
          ${
            isGradientEnabled
              ? `
                animation: gradient 10s ease infinite;
                background-image: linear-gradient(-45deg, ${colors.common.black}, ${colors.pink[500]}, ${colors.blue[500]}, ${colors.green[500]});
                background-size: 400% 400%;
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
        min-width: 320px;
        padding: ${theme.spacing(6)};
        width: 80%;
      `,
    },
    {
      name: 'KeyVisualSection',
    },
  );

  const styles = useStyles();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section
      className={styles.container}
      style={{
        padding: `${theme.spacing(isMobile ? 32 : 64)} ${theme.spacing(isMobile ? 6 : 12)} ${theme.spacing(16)}`,
      }}
    >
      {isMounted && (
        <div className={styles.content}>
          <Typography
            color={colors.grey[200]}
            fontFamily="Montserrat"
            fontSize={20}
            fontWeight={700}
            position="relative"
            sx={{ mb: 2 }}
          >
            #{article.category} Episode {article.index}
          </Typography>
          <Typography
            color={colors.common.white}
            fontSize={isMobile ? 40 : 48}
            position="relative"
            sx={{ mt: 0, mb: 3 }}
            variant="h1"
          >
            {typewriter?.title ? (
              <>
                <div style={{ maxWidth: '100%', position: 'absolute' }}>{typewriter.title}</div>
                <div style={{ maxWidth: '100%', opacity: 0 }}>{article.title} |</div>
              </>
            ) : (
              article.title
            )}
          </Typography>
          <Typography
            color={colors.common.white}
            position="relative"
            variant="body1"
          >
            {article.description}
          </Typography>
          <Typography
            color={colors.grey[300]}
            position="relative"
            sx={{ mt: 6 }}
            variant="subtitle1"
          >
            {article.date}
          </Typography>
          {isButtonVisible && (
            <StyledButton
              href={article.path}
              size="large"
              sx={{ mt: 6, px: 10 }}
            >
              내용 읽기
            </StyledButton>
          )}
        </div>
      )}
    </section>
  );
}
