import React, { useEffect, useState } from 'react';
import { Property } from 'csstype';
import { createUseStyles } from 'react-jss';

import {
  Box, Step, StepLabel, Stepper, Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface FloatingTOCProps {
  html: string;
  position: Property.Position;
  offset: number;
}

interface TOCStep {
  text: string;
  offset: number;
}

const FloatingTOC = ({
  html: htmlString,
  position,
  offset,
}: FloatingTOCProps) => {
  const theme = useTheme();

  const styles = createUseStyles({
    container: `
      position: absolute;
      left: calc(58% + 450px);
      transform: translateX(-50%);
      transition: position 0.2s;
    `,
  }, {
    name: 'FloatingTOC',
  })();

  const [activeStep, setActiveStep] = useState(0);
  const [tocSteps, setTOCSteps] = useState<TOCStep[]>([]);

  const setTOCStepsOffset = () => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');
    const steps: TOCStep[] = [];

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

    setTOCSteps(steps);
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

      tocSteps.forEach((step, index) => {
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
  }, [tocSteps]);

  useEffect(() => {
    setTOCStepsOffset();
  }, []);

  return (
    <aside
      className={styles.container}
      style={{
        position,
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
          {tocSteps.map((step) => (
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

export default FloatingTOC;
