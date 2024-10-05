import React from 'react';
import { JssProvider as JSSProvider } from 'react-jss';
import { SheetsRegistry } from 'jss';

import { CssBaseline as CSSBaseline, useMediaQuery } from '@mui/material';
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
  const isDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  return (
    <JSSProvider
      isSSR
      registry={sheetsRegistry}
    >
      <ThemeProvider
        defaultMode="system"
        theme={{
          ...theme,
          colorSchemes: { dark: isDarkMode },
          palette: { ...theme.palette, mode: isDarkMode ? 'dark' : 'light' },
        }}
      >
        <CSSBaseline />
        {header || <Header />}
        <Content>{children}</Content>
        <Footer />
      </ThemeProvider>
    </JSSProvider>
  );
}
