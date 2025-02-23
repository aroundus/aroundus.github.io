import React from 'react';

import { colors, Grid, ListItem, ListItemButton, ListItemButtonProps, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import type { Article } from '../model';

interface ArticleListItemProps {
  article: Article;
}

export function ArticleListItem({ article }: ArticleListItemProps) {
  const StyledContent = styled(ListItemButton)<ListItemButtonProps>(() => ({
    '&:hover': {
      backgroundColor: 'transparent',

      '& .MuiTypography-h2': {
        color: colors.cyan[600],
      },
    },

    '& .MuiTypography-h2': {
      transition: 'color 0.2s linear',
    },
  }));

  const handleClick = () => {
    if (article.path) window.location.pathname = article.path;
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
            #{article.category || 'empty'}
          </Typography>
          <Typography
            sx={{ mt: 4 }}
            variant="h2"
          >
            {article.title}
          </Typography>
          <Typography
            sx={{ mt: 6 }}
            variant="body1"
          >
            {article.description}
          </Typography>
          <Typography
            color={colors.grey[500]}
            variant="subtitle1"
          >
            {article.date}
          </Typography>
        </Grid>
      </StyledContent>
    </ListItem>
  );
}
