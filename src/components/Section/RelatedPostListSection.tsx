import React from 'react';

import { colors, Container, List, ListItemButton, ListItemButtonProps, Typography } from '@mui/material';
import { Recommend as RecommendIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import type { Post } from '@/types/post';

interface RelatedPostListSectionProps {
  posts: Post[];
  query: string;
}

export function RelatedPostListSection({ query, posts }: RelatedPostListSectionProps) {
  const StyledListItem = styled(ListItemButton)<ListItemButtonProps>(() => ({
    '&': {
      justifyContent: 'space-between',
      transition: 'color 0.2s linear',
    },

    '&:hover': {
      backgroundColor: 'transparent',
      color: colors.cyan[600],
    },
  }));

  const handleClick = (path: string) => {
    window.location.pathname = path;
  };

  return (
    <Container
      component="section"
      disableGutters
      maxWidth="md"
      sx={{ mx: 'auto', p: 6 }}
    >
      <Typography
        color={colors.grey[500]}
        variant="caption"
      >
        <RecommendIcon sx={{ height: 20, verticalAlign: 'middle' }} />
        <strong style={{ color: colors.cyan[600] }}>{query}</strong> 관련 글
      </Typography>
      <List sx={{ mt: 2 }}>
        {posts.map((post) => (
          <StyledListItem
            divider
            key={post.id}
            sx={{ py: 1 }}
            onClick={() => handleClick(post.path as string)}
          >
            <Typography
              flex="1 0 0"
              noWrap
              sx={{ mr: 4 }}
              variant="body2"
            >
              {post.title}
            </Typography>
            <Typography
              color={colors.grey[700]}
              sx={{ fontVariantNumeric: 'tabular-nums' }}
              variant="body2"
            >
              {post.date}
            </Typography>
          </StyledListItem>
        ))}
      </List>
    </Container>
  );
}
