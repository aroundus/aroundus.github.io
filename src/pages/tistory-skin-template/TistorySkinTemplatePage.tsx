import React, { useEffect, useState } from 'react';

import { Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AOS from 'aos';

import { Layout } from '@/widgets/layout/ui';

import { Content, Header } from './_ui';

export default function TistorySkinTemplatePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    AOS.init();
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <Layout header={<></>}>
          <Container
            disableGutters
            maxWidth="md"
            sx={{ mx: 'auto', px: 6, py: isMobile ? 40 : 20 }}
          >
            <Header />
            <hr />
            <Content />
          </Container>
        </Layout>
      )}
    </>
  );
}
