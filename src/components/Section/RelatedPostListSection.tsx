import React from 'react';

import { colors, Container, List, ListItemButton, ListItemButtonProps, Typography } from '@mui/material';
import { Recommend as RecommendIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import type { Post } from '@/types/global';

interface RelatedPostListSectionProps {
  query: string;
  posts: Post[];
}

const RelatedPostListSection = ({ query, posts }: RelatedPostListSectionProps) => {
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
      sx={{ mx: 'auto', px: 8, py: 5 }}
    >
      <Typography
        color={colors.grey[500]}
        variant="caption"
      >
        <RecommendIcon sx={{ mx: 1, height: 20, verticalAlign: 'middle' }} />
        <strong style={{ color: colors.cyan[600] }}>{query}</strong> 관련 글
      </Typography>
      <List sx={{ mx: 3, mt: 2 }}>
        {posts.map((post) => (
          <StyledListItem
            disableGutters
            divider
            key={post.id}
            onClick={() => handleClick(post.path as string)}
            sx={{ py: 1 }}
          >
            <Typography
              flex="1 0 0"
              fontSize="0.8em"
              noWrap
              sx={{ mr: 4 }}
              variant="subtitle1"
            >
              {post.title}
            </Typography>
            <Typography
              color={colors.grey[500]}
              fontSize={13}
              variant="subtitle1"
            >
              {post.date}
            </Typography>
          </StyledListItem>
        ))}
      </List>
    </Container>
  );
};

export default RelatedPostListSection;
