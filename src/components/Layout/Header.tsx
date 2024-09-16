import React from 'react';
import { createUseStyles } from 'react-jss';

import { AppBar, colors, Link, Toolbar, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { LogoIcon, SymbolMarkIcon } from '@/components/Icon';

export function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const styles = createUseStyles(
    {
      isContainerFixed: {
        position: 'relative',
      },

      toolbar: {
        height: 60,
      },

      link: {
        opacity: 0.9,

        '&:hover': {
          opacity: 1,
        },
      },
    },
    {
      name: 'Navbar',
    },
  )();

  return (
    <AppBar
      color="transparent"
      component="nav"
      elevation={0}
      position="absolute"
      style={{ padding: `0 ${isMobile ? theme.spacing(6) : theme.spacing(16)}` }}
    >
      <Toolbar
        className={styles.toolbar}
        disableGutters
        variant="dense"
      >
        <Link
          alignItems="baseline"
          className={styles.link}
          display="flex"
          gap={1}
          href="/"
          sx={{ textDecoration: 'none' }}
        >
          <SymbolMarkIcon
            height={12}
            style={{ fill: colors.common.white }}
          />
          <LogoIcon
            height={12}
            style={{ fill: colors.common.white }}
          />
        </Link>
        <Typography
          color={colors.common.white}
          sx={{ ml: 3 }}
          variant="subtitle2"
          whiteSpace="nowrap"
        >
          개발 블로그
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
