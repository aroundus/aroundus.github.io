import React from 'react';

import {
  colors, Grid, ListItem, ListItemButton, ListItemButtonProps, Typography,
} from '@mui/material';
import { styled } from '@mui/material/styles';

import { PostFrontmatter } from '~types/global';

interface PostPreviewProps {
  post: PostFrontmatter;
}

const PostPreview = ({
  post,
}: PostPreviewProps) => {
  const StyledContent = styled(ListItemButton)<ListItemButtonProps>(() => ({
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
    window.location.pathname = post.path;
  };

  return (
    <ListItem dense>
      <StyledContent
        sx={{ px: 8, py: 10, justifyContent: 'center' }}
        divider
        onClick={handleClick}
      >
        <Grid sx={{ width: '100%', maxWidth: 640 }}>
          <Typography variant="h4">{post.title}</Typography>
          <Typography variant="body1" sx={{ mt: 4 }}>{post.description}</Typography>
        </Grid>
      </StyledContent>
    </ListItem>
  );
};

export default PostPreview;
