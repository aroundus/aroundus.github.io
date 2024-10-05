import React from 'react';

import { colors, Grid, ListItem, ListItemButton, ListItemButtonProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import type { Post } from '@/types/post';

interface PostListItemProps {
  post: Post;
}

export function PostListItem({ post }: PostListItemProps) {
  const StyledContent = styled(ListItemButton)<ListItemButtonProps>(() => ({
    '&:hover': {
      backgroundColor: 'transparent',
    },

    '& .MuiTypography-h2': {
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
    <ListItem
      dense
      data-aos="fade-up"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-once="true"
    >
      <StyledContent
        divider
        sx={{ px: 4, py: 8, justifyContent: 'center' }}
        onClick={handleClick}
      >
        <Grid sx={{ width: '100%', maxWidth: 640 }}>
          <Typography
            color={colors.grey[500]}
            fontFamily="Montserrat"
            fontWeight={700}
            variant="body2"
          >
            #{post.category || 'empty'}
          </Typography>
          <Typography
            sx={{ mt: 0 }}
            variant="h2"
          >
            {post.title}
          </Typography>
          <Typography
            sx={{ mt: 6 }}
            variant="body1"
          >
            {post.description}
          </Typography>
          <Typography
            color={colors.grey[500]}
            sx={{ mt: 4 }}
            variant="subtitle1"
          >
            {post.date}
          </Typography>
        </Grid>
      </StyledContent>
    </ListItem>
  );
}
