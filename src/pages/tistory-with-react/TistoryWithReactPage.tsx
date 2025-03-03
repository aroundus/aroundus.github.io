import React, { useEffect, useState } from 'react';

import { Container, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import AOS from 'aos';

import { Helmet } from '@/features/helmet/ui';
import { Layout } from '@/widgets/layout/ui';

import { Content, Header } from './_ui';

export default function TistoryWithReactPage() {
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
          <Helmet
            description="프론트엔드 개발자를 위한 티스토리 템플릿"
            image="/tistory-with-react.jpg"
            path="/tistory-with-react"
            title="Tistory with React"
          />
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
