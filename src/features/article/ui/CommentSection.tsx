import React from 'react';
import Gitalk, { GitalkProps } from 'gatsby-plugin-gitalk';
import { Container } from '@mui/material';

export function CommentSection({ options }: GitalkProps) {
  return (
    <Container
      component="section"
      disableGutters
      maxWidth="md"
      sx={{ mx: 'auto', px: 8, pt: 4, pb: 10 }}
    >
      <Gitalk options={options} />
    </Container>
  );
}
