import React from 'react';
import Gitalk, { GitalkProps } from 'gatsby-plugin-gitalk';
import { Container } from '@mui/material';

const CommentSection = ({ options }: GitalkProps) => (
  <Container
    component="section"
    maxWidth="md"
    sx={{
      mx: 'auto', px: 8, pt: 4, pb: 10,
    }}
    disableGutters
  >
    <Gitalk options={options} />
  </Container>
);

export default CommentSection;
