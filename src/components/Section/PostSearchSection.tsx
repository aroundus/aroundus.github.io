import React from 'react';
import { createUseStyles } from 'react-jss';

import { Box, Container, TextField } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

interface PostSearchSectionProps {
  onChange: (value: string) => void;
}

export function PostSearchSection({ onChange: handleChange }: PostSearchSectionProps) {
  const styles = createUseStyles(
    {
      container: `
        position: sticky;
        top: 0;
        background-color: Canvas;
        z-index: 1;
      `,
    },
    {
      name: 'PostSearchSection',
    },
  )();

  return (
    <section className={styles.container}>
      <Container
        disableGutters
        maxWidth="md"
        sx={{ mx: 'auto', pt: 2, pb: 4, px: 6 }}
      >
        <Box
          alignItems="flex-end"
          display="flex"
          gap={3}
        >
          <SearchIcon sx={{ mr: 1, my: 0.5 }} />
          <TextField
            fullWidth
            label="검색어를 입력해 주세요"
            variant="standard"
            onChange={(event) => handleChange(event.target.value)}
          />
        </Box>
      </Container>
    </section>
  );
}
