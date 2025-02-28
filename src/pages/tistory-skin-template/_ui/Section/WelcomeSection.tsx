import React from 'react';

import {
  ChevronRightOutlined as ChevronRightOutlinedIcon,
  Dvr as DvrIcon,
  GitHub as GitHubIcon,
  InsightsOutlined as InsightsOutlinedIcon,
} from '@mui/icons-material';
import { IconButton, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import { createUseStyles } from 'react-jss';

const list = [
  {
    description: '소스 코드를 확인할 수 있습니다.',
    href: 'https://github.com/aroundus/tistory-skin-template-react',
    icon: (
      <GitHubIcon
        color="primary"
        style={{ height: 40, width: 40 }}
      />
    ),
    title: 'GitHub 저장소',
  },
  {
    description: '모두 React 컴포넌트로 만들었습니다.',
    href: 'https://jeongmintax.tistory.com',
    icon: (
      <DvrIcon
        color="info"
        style={{ height: 40, width: 40 }}
      />
    ),
    title: '데모 사이트',
  },
  {
    description: '데모 사이트의 소스 코드를 확인할 수 있습니다.',
    href: 'https://github.com/aroundus/jeongmintax.tistory.com',
    icon: (
      <GitHubIcon
        color="info"
        style={{ height: 40, width: 40 }}
      />
    ),
    title: '데모 GitHub 저장소',
  },
];

export function WelcomeSection() {
  const scrollAnimationProps = {
    'data-aos-delay': 50,
    'data-aos-offset': 100,
    'data-aos-once': false,
    'data-aos': 'fade-up',
  };

  const useStyles = createUseStyles(
    {
      container: `
        position: relative;
      `,
    },
    {
      name: 'WelcomeSection',
    },
  );

  const styles = useStyles();

  return (
    <section className={styles.container}>
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
        React와 React Router, 그리고 Vite 번들러로 티스토리 스킨을 초기 단계부터 차근차근 개발해 보세요.
      </Typography>
      <List
        {...scrollAnimationProps}
        sx={{ mt: 6 }}
      >
        {list.map((item) => (
          <ListItem
            divider
            key={item.title}
            secondaryAction={
              <IconButton
                href={item.href}
                size="large"
                target="_blank"
              >
                <ChevronRightOutlinedIcon />
              </IconButton>
            }
            sx={{ py: 2 }}
          >
            <ListItemAvatar>{item.icon}</ListItemAvatar>
            <ListItemText
              primary={item.title}
              secondary={item.description}
            />
          </ListItem>
        ))}
      </List>
    </section>
  );
}
