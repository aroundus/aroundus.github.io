import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import {
  Box, Step, StepLabel, Stepper, Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface FloatingHeadingStepperProps {
  html: string;
  offset: number;
}

interface HeadingStep {
  text: string;
  offset: number;
}

const FloatingHeadingStepper = ({
  html: htmlString,
  offset,
}: FloatingHeadingStepperProps) => {
  const theme = useTheme();

  const styles = createUseStyles({
    container: `
      position: absolute;
      left: calc(58% + 450px);
      transform: translateX(-50%);
    `,
  }, {
    name: 'FloatingHeadingStepper',
  })();

  const [activeStep, setActiveStep] = useState(0);
  const [headingSteps, setHeadingSteps] = useState<HeadingStep[]>([]);

  const setHeadingStepsOffset = () => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');
    const steps: HeadingStep[] = [];

    // h1 태그는 생략
    // h2 태그만 작업
    html.querySelectorAll('ul > li').forEach((element) => {
      if (element.querySelector('ul') || element.querySelector('p')) return;

      const anchor = element.querySelector('a') as HTMLAnchorElement;

      const hash = anchor.innerText.replace(/\s/g, '-').replace(/\p{Emoji}/gu, '');
      const heading = document.getElementById(hash);

      if (heading === null) return;

      const headingRect = heading.getBoundingClientRect();
      const { pageYOffset } = window;

      steps.push({
        text: anchor.innerText,
        offset: headingRect.top + pageYOffset - 60,
      });
    });

    setHeadingSteps(steps);
  };

  const handleStepClick = (top: number) => {
    window.scroll({
      top,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const listener = () => {
      const { pageYOffset } = window;

      headingSteps.forEach((step, index) => {
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
  }, [headingSteps]);

  useEffect(() => {
    setHeadingStepsOffset();
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
          {headingSteps.map((step) => (
            <Step
              key={step.text}
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
                  {step.text}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </aside>
  );
};

export default FloatingHeadingStepper;
