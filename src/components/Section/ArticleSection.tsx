import React from 'react';
import { Container } from '@mui/material';

interface ArticleSectionProps {
  html: string;
}

const ArticleSection = ({
  html,
}: ArticleSectionProps) => (
  <Container
    component="section"
    sx={{
      mx: 'auto', px: 8, py: 10, maxWidth: 800,
    }}
    dangerouslySetInnerHTML={{ __html: html }}
  />
);

export default ArticleSection;
