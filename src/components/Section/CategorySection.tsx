import React from 'react';
import {
  Box, Button, Container, Typography, useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface CategorySectionProps {
  categories: string[];
  selectedCategory: string;
  onClick: (category: string) => void;
}

const CategorySection = ({
  categories,
  selectedCategory,
  onClick: handleClick,
}: CategorySectionProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
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
        flexWrap="wrap"
        justifyContent="center"
        gap={2}
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            color={selectedCategory === category ? 'primary' : 'secondary'}
            size={isMobile ? 'small' : 'medium'}
            sx={{ borderRadius: 5, textTransform: 'unset' }}
            disableRipple
            onClick={() => handleClick(category)}
          >
            <Typography variant="subtitle1">
              {category}
            </Typography>
          </Button>
        ))}
      </Box>
    </Container>
  );
};

export default CategorySection;
