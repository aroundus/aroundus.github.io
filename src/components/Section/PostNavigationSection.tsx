import React from 'react';
import { Box, Button, colors, Container, Typography } from '@mui/material';
import { ArrowBackIos as ArrowLeftIcon, ArrowForwardIos as ArrowRightIcon } from '@mui/icons-material';
import type { PostNavigation } from '@/types/global';

interface PostNavigationSectionProps {
  nextPost?: PostNavigation;
  prevPost?: PostNavigation;
}

const PostNavigationSection = ({ nextPost, prevPost }: PostNavigationSectionProps) => (
  <Container
    component="section"
    disableGutters
    maxWidth="md"
    sx={{ mx: 'auto', px: 8, py: 5 }}
  >
    <Box
      display="flex"
      justifyContent={prevPost ? 'space-between' : 'flex-end'}
    >
      {prevPost && (
        <Button
          color="inherit"
          href={prevPost.path}
          size="large"
          sx={{ display: 'block', textAlign: 'left', textTransform: 'inherit' }}
          variant="text"
        >
          <Typography
            color={colors.grey[500]}
            variant="caption"
          >
            <ArrowLeftIcon sx={{ ml: -1, height: 12 }} />
            이전 글
          </Typography>
          <Typography
            color={colors.grey[600]}
            fontSize={14}
            fontWeight={600}
            sx={{ mt: 3 }}
            variant="subtitle1"
          >
            #{prevPost.category}
          </Typography>
          <Typography
            color={colors.grey[900]}
            variant="subtitle1"
          >
            {prevPost.title}
          </Typography>
        </Button>
      )}
      {nextPost && (
        <Button
          color="inherit"
          href={nextPost.path}
          size="large"
          sx={{ display: 'block', textAlign: 'right', textTransform: 'inherit' }}
          variant="text"
        >
          <Typography
            color={colors.grey[500]}
            variant="caption"
          >
            다음 글
            <ArrowRightIcon sx={{ mr: -2, height: 12 }} />
          </Typography>
          <Typography
            color={colors.grey[600]}
            fontSize={14}
            fontWeight={600}
            sx={{ mt: 3 }}
            variant="subtitle1"
          >
            #{nextPost.category}
          </Typography>
          <Typography
            color={colors.grey[900]}
            variant="subtitle1"
          >
            {nextPost.title}
          </Typography>
        </Button>
      )}
    </Box>
  </Container>
);

export default PostNavigationSection;
