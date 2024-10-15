import React from 'react';
import { Box, Button, colors, Container, Typography } from '@mui/material';
import { ArrowBackIos as ArrowLeftIcon, ArrowForwardIos as ArrowRightIcon } from '@mui/icons-material';

import type { ArticleNavigation } from '@/types/article';

interface ArticleNavigationSectionProps {
  nextArticle?: ArticleNavigation;
  prevArticle?: ArticleNavigation;
}

export function ArticleNavigationSection({ nextArticle, prevArticle }: ArticleNavigationSectionProps) {
  return (
    <Container
      component="section"
      disableGutters
      maxWidth="md"
      sx={{ mx: 'auto', p: 6 }}
    >
      <Box
        display="flex"
        justifyContent={prevArticle ? 'space-between' : 'flex-end'}
      >
        {prevArticle && (
          <Button
            color="inherit"
            href={prevArticle.path}
            size="large"
            sx={{ display: 'block', textAlign: 'left', textTransform: 'inherit' }}
            variant="text"
          >
            <Typography
              color={colors.grey[500]}
              variant="caption"
            >
              <ArrowLeftIcon sx={{ ml: -2, height: 10 }} />
              이전 글
            </Typography>
            <Typography
              color={colors.grey[600]}
              fontSize={14}
              fontWeight={600}
              sx={{ mt: 3 }}
              variant="subtitle1"
            >
              #{prevArticle.category}
            </Typography>
            <Typography variant="subtitle1">{prevArticle.title}</Typography>
          </Button>
        )}
        {nextArticle && (
          <Button
            color="inherit"
            href={nextArticle.path}
            size="large"
            sx={{ display: 'block', textAlign: 'right', textTransform: 'inherit' }}
            variant="text"
          >
            <Typography
              color={colors.grey[500]}
              variant="caption"
            >
              다음 글
              <ArrowRightIcon sx={{ mr: -2, height: 10 }} />
            </Typography>
            <Typography
              color={colors.grey[600]}
              fontSize={14}
              fontWeight={600}
              sx={{ mt: 3 }}
              variant="subtitle1"
            >
              #{nextArticle.category}
            </Typography>
            <Typography variant="subtitle1">{nextArticle.title}</Typography>
          </Button>
        )}
      </Box>
    </Container>
  );
}
