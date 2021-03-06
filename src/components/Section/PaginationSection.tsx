import React from 'react';
import { createUseStyles } from 'react-jss';
import {
  Box, Container, Pagination, useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface PaginationSectionProps {
  currentPage: number;
  numberOfTotalPage: number;
  onChange: (page: number) => void;
}

const PaginationSection = ({
  currentPage,
  numberOfTotalPage,
  onChange,
}: PaginationSectionProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const styles = createUseStyles({
    container: `
      position: relative;
    `,
  }, {
    name: 'PaginationSection',
  })();

  const handleChange = (_: React.ChangeEvent<unknown>, page: number) => {
    onChange(page);
  };

  return (
    <section className={styles.container}>
      <Container
        maxWidth="md"
        sx={{ mx: 'auto', px: isMobile ? 6 : 8, py: isMobile ? 5 : 10 }}
        disableGutters
      >
        <Box
          display="flex"
          justifyContent="center"
        >
          <Pagination
            color="primary"
            size="small"
            count={numberOfTotalPage}
            page={currentPage}
            showFirstButton
            showLastButton
            onChange={handleChange}
          />
        </Box>
      </Container>
    </section>
  );
};

export default PaginationSection;
