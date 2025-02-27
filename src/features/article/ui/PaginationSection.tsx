import React from 'react';

import { Box, Container, Pagination, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { createUseStyles } from 'react-jss';

interface PaginationSectionProps {
  currentPageNo: number;
  totalPageCount: number;
  onChange: (page: number) => void;
}

export function PaginationSection({ currentPageNo, totalPageCount, onChange }: PaginationSectionProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const styles = createUseStyles(
    {
      container: `
        position: relative;
      `,
    },
    {
      name: 'PaginationSection',
    },
  )();

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    onChange(page);
  };

  return (
    <section className={styles.container}>
      <Container
        disableGutters
        maxWidth="md"
        sx={{ mx: 'auto', px: isMobile ? 6 : 8, py: isMobile ? 5 : 10 }}
      >
        <Box
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            count={totalPageCount}
            page={currentPageNo}
            showFirstButton
            showLastButton
            size="small"
            aria-label="페이지네이션 내비게이션"
            onChange={handleChange}
          />
        </Box>
      </Container>
    </section>
  );
}
