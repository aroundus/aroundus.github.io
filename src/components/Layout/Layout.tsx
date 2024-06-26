import React from 'react';
import { JssProvider as JSSProvider } from 'react-jss';
import { SheetsRegistry } from 'jss';

import { CssBaseline as CSSBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './helpers/theme';

import { Content } from './Content';
import { Footer } from './Footer';
import { Navbar } from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const sheetsRegistry = new SheetsRegistry();

export function Layout({ children }: LayoutProps) {
  return (
    <JSSProvider
      isSSR
      registry={sheetsRegistry}
    >
      <ThemeProvider theme={theme}>
        <CSSBaseline />
        <Navbar />
        <Content>{children}</Content>
        <Footer />
      </ThemeProvider>
    </JSSProvider>
  );
}
