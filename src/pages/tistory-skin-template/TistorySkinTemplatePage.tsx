import React, { useEffect, useState } from 'react';

import { Container } from '@mui/material';
import AOS from 'aos';

import { Layout } from '@/widgets/layout/ui';

import { Content, Header } from './_ui';

export default function TistorySkinTemplatePage() {
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
            sx={{ mx: 'auto', px: 6, py: 20 }}
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
