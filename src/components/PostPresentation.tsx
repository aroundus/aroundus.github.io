import React from 'react';

import {
  colors, Grid, ListItem, ListItemButton, ListItemButtonProps, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { Post } from '~types/global';

interface PostPresentationProps {
  post: Post;
}

const PostPresentation = ({
  post,
}: PostPresentationProps) => {
  const StyledContent = styled(ListItemButton)<ListItemButtonProps>(() => ({
    '&': {
      borderBottom: 'none',
    },
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '& .MuiTypography-h4': {
      transition: 'color 0.2s linear',
      '&:hover': {
        color: colors.cyan[600],
      },
    },
  }));

  const handleClick = () => {
    if (post.path) window.location.pathname = post.path;
  };

  return (
    <ListItem dense>
      <StyledContent
        sx={{ px: 8, py: 10, justifyContent: 'center' }}
        divider
        onClick={handleClick}
      >
        <Grid sx={{ width: '100%', maxWidth: 640 }}>
          <Typography variant="h6" color={colors.grey[500]} fontSize={16} sx={{ mb: 2 }}>#{post.category}</Typography>
          <Typography variant="h4">{post.title}</Typography>
          <Typography variant="body1" color={colors.grey[700]} sx={{ mt: 6 }}>{post.description}</Typography>
          <Typography variant="subtitle1" color={colors.grey[500]} sx={{ mt: 4 }}>{post.date}</Typography>
        </Grid>
      </StyledContent>
    </ListItem>
  );
};

export default PostPresentation;
