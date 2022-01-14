import React from 'react';

import {
  colors, Container, List, ListItemButton, ListItemButtonProps, Typography,
} from '@mui/material';
import { Recommend as RecommendIcon } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

import { Post } from '~types/global';

interface RelatedPostListSectionProps {
  query: string;
  posts: Post[];
}

const RelatedPostListSection = ({
  query,
  posts,
}: RelatedPostListSectionProps) => {
  const StyledListItem = styled(ListItemButton)<ListItemButtonProps>(() => ({
    '&': {
      transition: 'color 0.2s linear',
      justifyContent: 'space-between',
    },
    '&:hover': {
      color: colors.cyan[600],
      backgroundColor: 'transparent',
    },
  }));

  const handleClick = (path: string) => {
    window.location.pathname = path;
  };

  return (
    <Container
      component="section"
      maxWidth="md"
      sx={{ mx: 'auto', px: 8, py: 5 }}
      disableGutters
    >
      <Typography
        variant="caption"
        color={colors.grey[500]}
      >
        <RecommendIcon sx={{ mx: 1, height: 20, verticalAlign: 'middle' }} />
        <strong style={{ color: colors.cyan[600] }}>{query}</strong> 관련 글
      </Typography>
      <List sx={{ mx: 3, mt: 2 }}>
        {posts.map((post) => (
          <StyledListItem
            key={post.id}
            sx={{ py: 1 }}
            disableGutters
            divider
            onClick={() => handleClick(post.path as string)}
          >
            <Typography
              variant="subtitle1"
              fontSize="0.8em"
              flex="1 0 0"
              sx={{ mr: 4 }}
              noWrap
            >
              {post.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color={colors.grey[500]}
              fontSize={13}
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
