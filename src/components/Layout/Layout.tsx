import React from 'react';
import { JssProvider as JSSProvider } from 'react-jss';
import { SheetsRegistry } from 'jss';

import { CssBaseline as CSSBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import { theme } from './helpers/theme';

import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactElement;
}

const sheetsRegistry = new SheetsRegistry();

export function Layout({ children, header }: LayoutProps) {
  return (
    <JSSProvider
      isSSR
      registry={sheetsRegistry}
    >
      <ThemeProvider theme={theme}>
        <CSSBaseline />
        {header || <Header />}
        <Content>{children}</Content>
        <Footer />
      </ThemeProvider>
    </JSSProvider>
  );
}
