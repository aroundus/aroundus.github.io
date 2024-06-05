import React, { forwardRef } from 'react';
import { Container } from '@mui/material';

interface ArticleSectionProps {
  html: string;
}

export const ArticleSection = forwardRef<HTMLElement, ArticleSectionProps>(function ({ html }, ref) {
  return (
    <Container
      component="section"
      dangerouslySetInnerHTML={{ __html: html }}
      disableGutters
      maxWidth="md"
      ref={ref}
      sx={{ mx: 'auto', px: 8, py: 10 }}
    />
  );
});
