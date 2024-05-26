import React, { useState } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import { AppBar, colors, Link, Toolbar, Typography, useMediaQuery, useScrollTrigger } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { LogoIcon, SymbolmarkIcon } from '@/components/Icon';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const scrollTrigger = useScrollTrigger({ target: typeof window === 'undefined' ? undefined : window });

  const styles = createUseStyles(
    {
      isContainerFixed: `
        position: relative;
      `,
      toolbar: `
        height: 60px;
      `,
    },
    {
      name: 'Navbar',
    },
  )();

  const [isContainerFixed, setIsContainerFixed] = useState(false);

  return (
    <AppBar
      className={classNames({ [styles.isContainerFixed]: isContainerFixed })}
      color="transparent"
      component="nav"
      elevation={0}
      position="absolute"
      style={{ padding: `0 ${isMobile ? theme.spacing(4) : theme.spacing(16)}` }}
    >
      <Toolbar
        className={styles.toolbar}
        disableGutters
        variant="dense"
      >
        <Link
          href="/"
          display="flex"
          gap={1}
        >
          <SymbolmarkIcon
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
          lineHeight="1.3"
          sx={{ ml: 3 }}
          variant="subtitle2"
          whiteSpace="nowrap"
        >
          개발 블로그
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
