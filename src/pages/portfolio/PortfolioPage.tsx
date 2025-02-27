import React, { useEffect, useState } from 'react';
import { Box, Button, colors, Container, Link, Typography, useMediaQuery } from '@mui/material';
import { Dvr as DvrIcon, GitHub as GitHubIcon } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import Typewriter from 'typewriter-effect';

import { ReactIcon, SymbolMarkIcon } from '@/shared/ui';
import { Layout } from '@/widgets/layout/ui';

export default function PortfolioPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted && (
        <Layout>
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
              align="center"
              variant="h1"
            >
              <Typewriter
                options={{
                  delay: 100,
                }}
                onInit={(typewriter) => {
                  typewriter.typeString('Tistory Skin Template').start();
                }}
              />
              by{' '}
              <Box
                alignItems="center"
                display="inline-flex"
                gap={2}
              >
                <ReactIcon
                  fill={colors.blue[400]}
                  width={48}
                />
                <span style={{ color: colors.blue[400] }}>React</span>
              </Box>
            </Typography>
            <Typography
              align="center"
              variant="body1"
            >
              프론트엔드 개발자를 위한 템플릿
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
                    fontWeight: 600,
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
                    fontWeight: 600,
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
                    fontWeight: 600,
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
              sx={{ mx: 'auto', px: 6, py: 20 }}
            >
              <Typography variant="h2">시작하기</Typography>
              <Typography variant="body1">
                React로 나만의 티스토리 블로그 스킨을 만들어 보세요. 무궁무진한 가능성으로 당신의 블로그를 원하는
                모습으로 변신시킬 수 있습니다.
              </Typography>
              <Typography variant="h2">유연한 화면 구성</Typography>
              <Typography variant="body1">
                이제 블로그 스킨을 수정하기 위해 HTML과 CSS만을 사용할 필요가 없습니다. React의 강력한 컴포넌트 구조를
                통해 화면의 모든 요소를 원하는 대로 배치하고 스타일링할 수 있습니다.
              </Typography>
              <Typography variant="h2">빠른 개발 환경</Typography>
              <Typography variant="body1">
                <Link href="/">Vite</Link>의 빠른 빌드 속도와 최신 개발 환경을 활용하여 개발 효율성을 극대화할 수
                있습니다. 바로바로 반영되는 코드 수정으로 시간 낭비 없이 원하는 결과를 즉시 확인해 보세요.
              </Typography>
              <Typography variant="h2">React만 알면 충분합니다</Typography>
              <Typography variant="body1">
                이제 React 개발자라면 누구나 자신만의 티스토리 스킨을 만들 수 있습니다. 복잡한 작업 없이 React를 활용해
                블로그의 모든 요소를 자유롭게 구현하고 확장할 수 있는 템플릿입니다.
              </Typography>
            </Container>
          </Container>
        </Layout>
      )}
    </>
  );
}
