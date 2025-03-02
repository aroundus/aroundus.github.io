import React from 'react';

import { Dvr as DvrIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { Box, Button, colors, Link, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Typewriter from 'typewriter-effect';

import { ReactIcon, SymbolMarkIcon } from '@/shared/ui';

import tistoryImage from './assets/images/tistory.png';

export function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <>
      <Box
        display="flex"
        justifyContent={isMobile ? 'center' : 'flex-start'}
      >
        <Link
          borderBottom="none"
          href="/"
        >
          <SymbolMarkIcon height={40} />
        </Link>
      </Box>
      <Typography
        alignItems="center"
        display="flex"
        flexDirection={isMobile ? 'column' : 'row'}
        gap={isMobile ? 2 : 4}
        justifyContent="center"
        sx={{ mt: isMobile ? 20 : undefined }}
        variant="h1"
      >
        <img
          alt="티스토리 로고 이미지"
          height={60}
          src={tistoryImage}
        />
        <span style={{ color: colors.grey[300], fontWeight: 400 }}>with</span>
        <Box
          alignItems="center"
          display="inline-flex"
          gap={2}
        >
          <ReactIcon
            fill={colors.blue[400]}
            width={48}
          />
          <span style={{ color: colors.blue[400] }}>
            <Typewriter
              onInit={(typewriter) => {
                typewriter.pauseFor(1000);
                typewriter.typeString('React').start();
              }}
            />
          </span>
        </Box>
      </Typography>
      <Typography
        align="center"
        variant="body1"
      >
        프론트엔드 개발자를 위한 티스토리 스킨 템플릿
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        gap={2}
        justifyContent="center"
        sx={{ mb: 20, mt: 8 }}
      >
        <Button
          color="primary"
          href="https://github.com/aroundus/tistory-skin-template"
          size="large"
          startIcon={<GitHubIcon />}
          sx={{
            borderRadius: 5,
            textTransform: 'unset',
            '& .MuiTypography-root': {
              fontFamily: 'Montserrat',
              fontWeight: 500,
            },
          }}
          target="_blank"
          variant="outlined"
        >
          <Typography variant="caption">GitHub</Typography>
        </Button>
        <Button
          color="primary"
          href="https://jeongmintax.tistory.com"
          size="large"
          startIcon={<DvrIcon />}
          sx={{
            borderRadius: 5,
            textTransform: 'unset',
            '& .MuiTypography-root': {
              fontFamily: 'Montserrat',
              fontWeight: 500,
            },
          }}
          target="_blank"
          variant="outlined"
        >
          <Typography variant="caption">Demo</Typography>
        </Button>
        <Button
          color="primary"
          href="https://github.com/aroundus/jeongmintax.tistory.com"
          size="large"
          startIcon={<GitHubIcon />}
          sx={{
            borderRadius: 5,
            textTransform: 'unset',
            '& .MuiTypography-root': {
              fontFamily: 'Montserrat',
              fontWeight: 500,
            },
          }}
          target="_blank"
          variant="outlined"
        >
          <Typography variant="caption">Demo GitHub</Typography>
        </Button>
      </Box>
    </>
  );
}
