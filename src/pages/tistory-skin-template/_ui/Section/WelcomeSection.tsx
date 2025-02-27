import React from 'react';

import {
  ChevronRightOutlined as ChevronRightOutlinedIcon,
  Dvr as DvrIcon,
  GitHub as GitHubIcon,
  InsightsOutlined as InsightsOutlinedIcon,
} from '@mui/icons-material';
import { IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

export function WelcomeSection() {
  const scrollAnimationProps = {
    'data-aos-anchor-placement': 'top-bottom',
    'data-aos-delay': 50,
    'data-aos-offset': 100,
    'data-aos-once': false,
    'data-aos': 'fade-up',
  };

  return (
    <section>
      <Typography
        {...scrollAnimationProps}
        variant="h1"
      >
        <InsightsOutlinedIcon
          color="primary"
          sx={{ display: 'block', height: 80, width: 80 }}
        />
        처음부터.
        <br />
        자유롭게.
      </Typography>
      <Typography
        {...scrollAnimationProps}
        variant="body1"
      >
        React와 React Router, 그리고 Vite 번들러로 여러분의 스킨을 초기 단계부터 차근차근 개발해 보세요.
      </Typography>
      <List
        {...scrollAnimationProps}
        sx={{ mt: 6 }}
      >
        <ListItem
          divider
          secondaryAction={
            <IconButton
              href="https://jeongmintax.tistory.com"
              size="large"
              target="_blank"
            >
              <ChevronRightOutlinedIcon />
            </IconButton>
          }
          sx={{ py: 2 }}
        >
          <ListItemAvatar>
            <DvrIcon style={{ height: 40, width: 40 }} />
          </ListItemAvatar>
          <ListItemText
            primary="데모 사이트"
            secondary="모두 React 컴포넌트로 만들었습니다."
          />
        </ListItem>
        <ListItem
          divider
          secondaryAction={
            <IconButton
              href="https://github.com/aroundus/jeongmintax.tistory.com"
              size="large"
              target="_blank"
            >
              <ChevronRightOutlinedIcon />
            </IconButton>
          }
          sx={{ py: 2 }}
        >
          <ListItemAvatar>
            <GitHubIcon style={{ height: 40, width: 40 }} />
          </ListItemAvatar>
          <ListItemText
            primary="데모 GitHub 저장소"
            secondary="소스 코드를 확인할 수 있습니다."
          />
        </ListItem>
      </List>
    </section>
  );
}
