import React from 'react';
import { createUseStyles } from 'react-jss';

import { Box, colors, Container, TextField, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Search as SearchIcon } from '@mui/icons-material';

interface PostSearchSectionProps {
  onChange: (value: string) => void;
}

const PostSearchSection = ({ onChange: handleChange }: PostSearchSectionProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const styles = createUseStyles(
    {
      container: `
      position: sticky;
      top: 0;
      background-color: ${colors.common.white};
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
        maxWidth="md"
        sx={{ mx: 'auto', p: 6 }}
        disableGutters
      >
        <Box
          display="flex"
          alignItems="flex-end"
          gap={3}
        >
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            label="검색어를 입력해 주세요"
            variant="standard"
            fullWidth
            onChange={(event) => handleChange(event.target.value)}
          />
        </Box>
      </Container>
    </section>
  );
};

export default PostSearchSection;
