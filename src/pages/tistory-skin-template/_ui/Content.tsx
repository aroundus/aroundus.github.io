import React from 'react';
import { Container } from '@mui/material';

import { HighlightSection, WelcomeSection } from './Section';

export function Content() {
  return (
    <Container
      maxWidth="sm"
      sx={{ mx: 'auto' }}
    >
      <WelcomeSection />
      <HighlightSection />
    </Container>
  );
}
