import React from 'react';

import { CssBaseline as CSSBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from './helpers/theme';

import Content from './Content';
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({
  children,
}: LayoutProps) => (
  <ThemeProvider theme={theme}>
    <CSSBaseline />
    <Header />
    <Content>
      {children}
    </Content>
  </ThemeProvider>
);

export default Layout;
