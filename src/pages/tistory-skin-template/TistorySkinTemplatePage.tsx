import React, { useEffect, useState } from 'react';
import { Box, Button, colors, Container, Link, Typography, useMediaQuery } from '@mui/material';
import { Dvr as DvrIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Typewriter from 'typewriter-effect';

import { ReactIcon, SymbolMarkIcon } from '@/shared/ui';
import { Layout } from '@/widgets/layout/ui';

import tistoryLogoImage from './assets/images/logo/tistory.png';

export default function TistorySkinTemplatePage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <Layout header={<></>}>
          <Container
            disableGutters
            maxWidth="md"
            sx={{ mx: 'auto', px: 6, py: 20 }}
          >
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
              variant="h1"
            >
              <img
                alt="티스토리 로고 이미지"
                height={60}
                src={tistoryLogoImage}
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
              sx={{ mb: 20 }}
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
            <hr />
            <Container
              maxWidth="sm"
              sx={{ mx: 'auto' }}
            >
              <Typography variant="h3">React 개발에만 집중하세요.</Typography>
              <Typography variant="body1">
                카카오 로그인, 댓글, 글 목록 불러오기, 좋아요 등 티스토리 백엔드 기능은 그대로 사용하면서, React로
                프론트엔드를 자유롭게 개발할 수 있습니다.
              </Typography>
              <Typography variant="h2">이런 분들에게 추천해요!</Typography>
              <Typography variant="body1">
                <ul>
                  <li>티스토리 스킨을 직접 개발하고 싶은 프론트엔드 개발자</li>
                  <li>티스토리 스킨을 React로 개발하고 싶지만 백엔드까지 챙기기는 부담스러운 프론트엔드 개발자</li>
                  <li>나만의 개성을 담은 티스토리 블로그를 만들고 싶은 프론트엔드 개발자</li>
                </ul>
              </Typography>
              <Typography variant="h2">이제 시작해 볼까요?</Typography>
              <Typography variant="body1">
                [템플릿 페이지 링크] 또는 [문의하기 링크]를 클릭하여 자세한 내용을 확인해 보세요.
              </Typography>
            </Container>
          </Container>
        </Layout>
      )}
    </>
  );
}
