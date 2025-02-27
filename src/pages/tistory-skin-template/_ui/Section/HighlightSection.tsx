import React from 'react';

import {
  CloudUploadOutlined as CloudUploadOutlinedIcon,
  HubOutlined as HubOutlinedIcon,
  InsertDriveFileOutlined as InsertDriveFileOutlinedIcon,
  SimCardAlertOutlined as SimCardAlertOutlinedIcon,
} from '@mui/icons-material';
import { Masonry } from '@mui/lab';
import { Box, Button, Card, CardContent, colors, Link, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import reactRouterLogoImage from '../assets/images/logo/react-router.png';
import viteLogoImage from '../assets/images/logo/vite.svg';

export function HighlightSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const scrollAnimationProps = {
    'data-aos-anchor-placement': 'top-bottom',
    'data-aos-delay': 50,
    'data-aos-offset': 10,
    'data-aos-once': false,
    'data-aos': 'fade-up',
  };

  return (
    <section>
      <Typography
        {...scrollAnimationProps}
        variant="h2"
      >
        일단 핵심부터.
      </Typography>
      <Box sx={{ mt: 12 }}>
        <Masonry
          columns={{ xs: 1, sm: 2 }}
          spacing={{ xs: 3, sm: 4 }}
        >
          <Card
            {...scrollAnimationProps}
            variant="outlined"
          >
            <CardContent>
              <InsertDriveFileOutlinedIcon
                color="primary"
                sx={{ height: 36, width: 36 }}
              />
              <Typography
                sx={{ mt: 3 }}
                variant="h3"
              >
                skin.html
              </Typography>
              <Typography variant="body2">
                오로지 치환자만 존재합니다. 화면을 구성하는 DOM 요소는 필요하지 않습니다. <code>#root</code> 요소에
                React 컴포넌트로 렌더링할 테니까요.
              </Typography>
              <Button
                color="info"
                href="https://github.com/aroundus/jeongmintax.tistory.com/blob/main/public/skin.html"
                size="medium"
                sx={{
                  borderRadius: 5,
                  mt: 4,
                }}
                target="_blank"
                variant="outlined"
              >
                <Typography variant="caption">소스 코드</Typography>
              </Button>
            </CardContent>
          </Card>
          <Card
            {...scrollAnimationProps}
            variant="outlined"
          >
            <CardContent>
              <SimCardAlertOutlinedIcon
                color="primary"
                sx={{ height: 36, width: 36 }}
              />
              <Typography
                sx={{ mt: 3 }}
                variant="h3"
              >
                index.html
              </Typography>
              <Typography variant="body2">
                skin.html 파일의 치환자가 변환한 Mock 요소를 index.html 파일에 작성합니다.
              </Typography>
              <Typography
                color="secondary"
                sx={{ mt: 2 }}
                variant="caption"
              >
                (운영 환경과 동일하게 Mock 요소를 적용해서 화면을 개발할 수 있습니다.)
              </Typography>
              <Button
                color="info"
                href="https://github.com/aroundus/jeongmintax.tistory.com/blob/main/index.html"
                size="medium"
                sx={{
                  borderRadius: 5,
                  mt: 4,
                }}
                target="_blank"
                variant="outlined"
              >
                <Typography variant="caption">소스 코드</Typography>
              </Button>
            </CardContent>
          </Card>
          <Card
            {...scrollAnimationProps}
            variant="outlined"
          >
            <CardContent>
              <HubOutlinedIcon
                color="primary"
                sx={{ height: 36, width: 36 }}
              />
              <Box sx={{ my: 6 }}>
                <img
                  alt="React Router DOM"
                  height={24}
                  src={reactRouterLogoImage}
                />
              </Box>
              <Typography variant="body2">로컬 환경에서 운영 환경과 동일한 패스로 페이지를 개발합니다.</Typography>
              <Button
                color="info"
                href="https://github.com/aroundus/jeongmintax.tistory.com/blob/main/src/app/routes/root.tsx"
                size="medium"
                sx={{
                  borderRadius: 5,
                  mt: 4,
                }}
                target="_blank"
                variant="outlined"
              >
                <Typography variant="caption">소스 코드</Typography>
              </Button>
            </CardContent>
          </Card>
          <Card
            {...scrollAnimationProps}
            variant="outlined"
          >
            <CardContent>
              <img
                alt="Vite"
                height={36}
                src={viteLogoImage}
              />
              <Typography
                sx={{ mt: 3 }}
                variant="h3"
              >
                Vite
              </Typography>
              <Typography variant="body2">
                티스토리 스킨{' '}
                <Link
                  href="https://tistory.github.io/document-tistory-skin/common/files.html"
                  target="_blank"
                >
                  파일 구조
                </Link>
                와 동일한 파일로 빌드합니다.
              </Typography>
              <Box
                display="flex"
                gap={1}
                sx={{ mt: 4 }}
              >
                <Button
                  color="info"
                  href="https://github.com/aroundus/jeongmintax.tistory.com/blob/main/vite.config.ts"
                  size="medium"
                  sx={{
                    borderRadius: 5,
                  }}
                  target="_blank"
                  variant="outlined"
                >
                  <Typography variant="caption">소스 코드 1</Typography>
                </Button>
                <Button
                  color="info"
                  href="https://github.com/aroundus/jeongmintax.tistory.com/blob/main/scripts/postbuild.sh"
                  size="medium"
                  sx={{
                    borderRadius: 5,
                  }}
                  target="_blank"
                  variant="outlined"
                >
                  <Typography variant="caption">소스 코드 2</Typography>
                </Button>
              </Box>
            </CardContent>
          </Card>
          <Card
            {...scrollAnimationProps}
            variant="outlined"
          >
            <CardContent>
              <CloudUploadOutlinedIcon
                color="primary"
                sx={{ height: 36, width: 36 }}
              />
              <Typography
                sx={{ mt: 3 }}
                variant="h3"
              >
                CI/CD
              </Typography>
              <Typography variant="body2">
                로컬 환경에서 빌드(CI)하고, 내 티스토리 사이트에 배포(CD)합니다. 스킨을 티스토리 관리자 페이지에서
                수동으로 업로드하지 않아도 됩니다.
              </Typography>
              <Button
                color="info"
                href="https://github.com/aroundus/jeongmintax.tistory.com/blob/main/scripts/deploy.ts"
                size="medium"
                sx={{
                  borderRadius: 5,
                  mt: 4,
                }}
                target="_blank"
                variant="outlined"
              >
                <Typography variant="caption">소스 코드</Typography>
              </Button>
            </CardContent>
          </Card>
        </Masonry>
      </Box>
    </section>
  );
}
