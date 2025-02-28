import React from 'react';

import { Container } from '@mui/material';

import { HighlightSection, PainPointSection, WelcomeSection } from './Section';

export function Content() {
  return (
    <Container
      maxWidth="sm"
      sx={{ mx: 'auto' }}
    >
      <WelcomeSection />
      <HighlightSection />
      <PainPointSection />
    </Container>
  );
}
