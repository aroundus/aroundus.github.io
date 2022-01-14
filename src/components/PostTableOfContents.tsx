import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import {
  Box, Step, StepLabel, Stepper, Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface PostTableOfContentsProps {
  html: string;
  offset: number;
}

interface TableOfContent {
  title: string;
  offset: number;
}

const PostTableOfContents = ({
  html: htmlString,
  offset,
}: PostTableOfContentsProps) => {
  const theme = useTheme();

  const styles = createUseStyles({
    container: `
      position: absolute;
      left: calc(58% + 450px);
      transform: translateX(-50%);
    `,
  }, {
    name: 'PostTableOfContents',
  })();

  const [activeStep, setActiveStep] = useState(0);
  const [tableOfContents, setTableOfContents] = useState<TableOfContent[]>([]);

  const handleStepClick = (top: number) => {
    window.scroll({
      top,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const listener = () => {
      const { pageYOffset } = window;

      tableOfContents.forEach((step, index) => {
        if (step.offset < pageYOffset + 20) {
          setActiveStep(index);
        }
      });
    };

    listener();
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [tableOfContents]);

  useEffect(() => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');
    const steps: TableOfContent[] = [];

    // h1 제목은 생략
    // h2 제목만 작업
    html.querySelectorAll('ul > li').forEach((element) => {
      if (element.querySelector('ul') || element.querySelector('p')) return;

      const anchor = element.querySelector('a') as HTMLAnchorElement;

      const hash = anchor.innerText.replace(/\s/g, '-').replace(/\p{Emoji}/gu, '');
      const heading = document.getElementById(hash);

      if (heading === null) return;

      const headingRect = heading.getBoundingClientRect();
      const { pageYOffset } = window;

      steps.push({
        title: anchor.innerText,
        offset: headingRect.top + pageYOffset - 60,
      });
    });

    setTableOfContents(steps);
  }, []);

  return (
    <aside
      className={styles.container}
      style={{
        top: `calc(${offset}px + ${theme.spacing(10)})`,
      }}
    >
      <Box sx={{ minWidth: 160 }}>
        <Stepper
          activeStep={activeStep}
          orientation="vertical"
          connector={null}
          nonLinear
        >
          {tableOfContents.map((step) => (
            <Step
              key={step.offset}
              onClick={() => handleStepClick(step.offset)}
            >
              <StepLabel
                StepIconProps={{
                  sx: { fontSize: '1em' },
                }}
                sx={{
                  py: 1,
                  cursor: 'pointer',
                  alignItems: 'start',
                }}
              >
                <Typography
                  variant="subtitle1"
                  lineHeight={1.3}
                  fontSize={15}
                >
                  {step.title}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </aside>
  );
};

export default PostTableOfContents;
