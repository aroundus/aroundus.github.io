import React from 'react';

import { Recommend as RecommendIcon } from '@mui/icons-material';
import { colors, Container, List, ListItemButton, ListItemButtonProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import type { Article } from '../model';

interface RelatedArticleListSectionProps {
  articles: Article[];
  query: string;
}

export function RelatedArticleListSection({ articles, query }: RelatedArticleListSectionProps) {
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
        {articles.map((article) => (
          <StyledListItem
            divider
            key={article.id}
            sx={{ py: 1 }}
            onClick={() => handleClick(article.path as string)}
          >
            <Typography
              flex="1 0 0"
              noWrap
              sx={{ mr: 4 }}
              variant="body2"
            >
              {article.title}
            </Typography>
            <Typography
              color={colors.grey[700]}
              sx={{ fontVariantNumeric: 'tabular-nums' }}
              variant="body2"
            >
              {article.date}
            </Typography>
          </StyledListItem>
        ))}
      </List>
    </Container>
  );
}
