import React from 'react';
import {
  Box, Button, colors, Container, Typography,
} from '@mui/material';
import { ArrowBackIos as ArrowLeftIcon, ArrowForwardIos as ArrowRightIcon } from '@mui/icons-material';
import { PostNavigation } from '~types/global';

interface PostNavigationSectionProps {
  prevPost?: PostNavigation;
  nextPost?: PostNavigation;
}

const PostNavigationSection = ({
  prevPost,
  nextPost,
}: PostNavigationSectionProps) => (
  <Container
    component="section"
    maxWidth="md"
    sx={{
      mx: 'auto', px: 8, py: 5,
    }}
    disableGutters
  >
    <Box
      display="flex"
      justifyContent={prevPost ? 'space-between' : 'end'}
    >
      {prevPost && (
        <Button
          variant="text"
          color="inherit"
          size="large"
          href={prevPost.path}
          sx={{ display: 'block', textAlign: 'left', textTransform: 'inherit' }}
        >
          <Typography variant="caption" color={colors.grey[500]}><ArrowLeftIcon sx={{ ml: -1, height: 12 }} />이전 글</Typography>
          <Typography variant="subtitle1" color={colors.grey[600]} fontSize={14} fontWeight={600} sx={{ mt: 3 }}>#{prevPost.category}</Typography>
          <Typography variant="subtitle1" color={colors.grey[900]}>{prevPost.title}</Typography>
        </Button>
      )}
      {nextPost && (
        <Button
          variant="text"
          color="inherit"
          size="large"
          href={nextPost.path}
          sx={{ display: 'block', textAlign: 'right', textTransform: 'inherit' }}
        >
          <Typography variant="caption" color={colors.grey[500]}>다음 글<ArrowRightIcon sx={{ mr: -2, height: 12 }} /></Typography>
          <Typography variant="subtitle1" color={colors.grey[600]} fontSize={14} fontWeight={600} sx={{ mt: 3 }}>#{nextPost.category}</Typography>
          <Typography variant="subtitle1" color={colors.grey[900]}>{nextPost.title}</Typography>
        </Button>
      )}
    </Box>
  </Container>
);

export default PostNavigationSection;
