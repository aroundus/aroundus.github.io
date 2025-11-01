import React from 'react';

import { CssBaseline, useMediaQuery } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { SheetsRegistry } from 'jss';
import { JssProvider as JSSProvider } from 'react-jss';

import { darkTheme, lightTheme } from '../lib';

import { Content } from './Content';
import { Footer } from './Footer';
import { Header } from './Header';

interface LayoutProps {
  children: React.ReactNode;
  header?: React.ReactElement;
}

const sheetsRegistry = new SheetsRegistry();

export function Layout({ children, header }: LayoutProps) {
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <JSSProvider
      isSSR
      registry={sheetsRegistry}
    >
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <CssBaseline />
        {header || <Header />}
        <Content>{children}</Content>
        <Footer />
      </ThemeProvider>
    </JSSProvider>
  );
}
