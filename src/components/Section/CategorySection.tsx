import React from 'react';
import { Box, Button, Container, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface CategorySectionProps {
  categories: string[];
  selectedCategory: string;
  onClick: (category: string) => void;
}

export function CategorySection({ categories, selectedCategory, onClick: handleClick }: CategorySectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container
      component="section"
      disableGutters
      maxWidth="md"
      sx={{ mx: 'auto', px: 8, py: 5 }}
    >
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="center"
      >
        {categories.map((category) => (
          <Button
            color={selectedCategory === category ? 'primary' : 'info'}
            disableRipple
            key={category}
            size={isMobile ? 'small' : 'medium'}
            sx={{
              borderRadius: 5,
              textTransform: 'unset',
              '& .MuiTypography-root': {
                fontFamily: 'Montserrat',
                fontWeight: 600,
              },
            }}
            variant={selectedCategory === category ? 'contained' : 'outlined'}
            onClick={() => handleClick(category)}
          >
            <Typography variant="caption">#{category}</Typography>
          </Button>
        ))}
      </Box>
    </Container>
  );
}
