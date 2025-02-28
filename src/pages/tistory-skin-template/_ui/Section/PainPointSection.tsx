import React from 'react';

import { ExpandMore as ExpandMoreIcon, ThumbDownOffAlt as ThumbDownOffAltIcon } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import { createUseStyles } from 'react-jss';

const contents = [
  {
    description:
      '티스토리 스킨은 skin.html 파일 하나에 모든 정적 마크업과 치환자를 작성해야 합니다. 그래서 화면이 복잡할수록 skin.html 파일에 작성하는 코드도 많습니다.',
    title: '모두 한곳에. 점점 복잡해지는 코드.',
  },
  {
    description:
      'CSS 전처리기를 사용할 수 없어, 변수를 정의할 수도, 반복적인 스타일을 함수로 만들어서 사용할 수도 없습니다.',
    title: '스타일 작성에 더 많은 시간과 노력.',
  },
  {
    description:
      'React처럼 JSX 문법으로 스크립트를 작성하고 컴포넌트를 만들어도, 정작 React가 아니므로 결국 바닐라 스크립트만 사용할 수 있습니다.',
    title: '익숙하지만, 전혀 다른 방식.',
  },
  {
    description:
      '스킨을 수정할 때마다 관리자 페이지에 직접 업로드하고 적용해야 합니다. 작은 변경 사항 하나도 업로드해야 확인할 수 있습니다.',
    title: '개발도 직접. 업로드도 직접.',
  },
];

export function PainPointSection() {
  const scrollAnimationProps = {
    'data-aos-delay': 50,
    'data-aos-offset': -200,
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
      name: 'PainPointSection',
    },
  );

  const styles = useStyles();

  return (
    <section className={styles.container}>
      <Typography
        {...scrollAnimationProps}
        variant="h2"
      >
        <ThumbDownOffAltIcon
          color="error"
          sx={{ display: 'block', height: 60, mb: 2, width: 60 }}
        />
        불편하고 제한적인
        <br />
        개발 환경.
      </Typography>
      <Typography
        {...scrollAnimationProps}
        variant="body1"
      >
        기존 티스토리 스킨 개발에는 한계가 많았습니다. 과정은 번거롭고, 제약은 많았죠.
      </Typography>
      <Box
        {...scrollAnimationProps}
        sx={{ mt: 6 }}
      >
        {contents.map((content, index) => (
          <Accordion
            defaultExpanded={index === 0}
            key={content.title}
            square
            sx={{ px: 4 }}
            variant="elevation"
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                color="error"
                fontWeight={700}
                sx={{ mt: 2 }}
                variant="body1"
              >
                {content.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ pb: 5 }}>
              <Typography variant="body2">{content.description}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </section>
  );
}
