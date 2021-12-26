import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import classNames from 'classnames';

import { Menu as MenuIcon } from '@mui/icons-material';
import {
  AppBar,
  colors,
  IconButton,
  Link,
  Toolbar,
  Typography,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import Logo from '~components/Logo';

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const scrollTrigger = useScrollTrigger({ target: typeof window === 'undefined' ? undefined : window });

  const useStyles = createUseStyles({
    isContainerFixed: `
      position: relative;
    `,
    toolbar: `
      height: 60px;
    `,
  }, {
    name: 'Navbar',
  });

  const styles = useStyles();

  const [isContainerFixed, setContainerFixed] = useState(false);

  return (
    <AppBar
      className={classNames({ [styles.isContainerFixed]: isContainerFixed })}
      component="nav"
      position="absolute"
      color="transparent"
      elevation={0}
      style={{
        padding: `0 ${isMobile ? theme.spacing(4) : theme.spacing(16)}`,
      }}
    >
      <Toolbar
        className={styles.toolbar}
        variant="dense"
        disableGutters
      >
        <Link href="/">
          <Logo
            height={12}
            style={{ fill: colors.common.white }}
          />
        </Link>
        <Typography
          variant="subtitle2"
          sx={{ ml: theme.spacing(3) }}
          color={colors.common.white}
          lineHeight="1.3"
          whiteSpace="nowrap"
        >
          프론트엔드 블로그
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
