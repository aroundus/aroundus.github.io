import React, { forwardRef } from 'react';
import { Container } from '@mui/material';

interface ArticleSectionProps {
  html: string;
}

const ArticleSection = forwardRef<HTMLElement, ArticleSectionProps>(({
  html,
}, ref) => (
  <Container
    ref={ref}
    component="section"
    maxWidth="md"
    sx={{ mx: 'auto', px: 8, py: 10 }}
    dangerouslySetInnerHTML={{ __html: html }}
    disableGutters
  />
));

export default ArticleSection;
