import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';

import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

interface FloatingTOCProps {
  html: string;
  target: HTMLElement | null;
}

interface TOCStep {
  text: string;
  yOffset: number;
}

export function FloatingTOC({ html: htmlString, target }: FloatingTOCProps) {
  const theme = useTheme();

  const styles = createUseStyles(
    {
      container: `
        transition: position 0.2s;
      `,
    },
    {
      name: 'FloatingTOC',
    },
  )();

  const [activeStep, setActiveStep] = useState(0);
  const [tocSteps, setTOCSteps] = useState<TOCStep[]>([]);
  const [position, setPosition] = useState<React.CSSProperties['position']>('absolute');
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  function setTOCStepsOffset() {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');
    const steps: TOCStep[] = [];

    // h1 태그는 생략
    // h2 태그만 작업
    html.querySelectorAll('ul > li').forEach((element) => {
      if (element.querySelector('ul') || element.querySelector('p')) return;

      const anchor = element.querySelector('a') as HTMLAnchorElement;

      const hash = anchor.innerHTML
        .replace(/\s/g, '-')
        .replace(/<br>/g, 'br-')
        .replace(/<\/?mark>/g, 'mark')
        .replace(/<\/?u>/g, 'u')
        .replace(/[!@#$%^&*()?.,]/g, '')
        .replace(/[‘’“”]/g, '') // 따옴표 특수 문자
        .replace(/\p{Extended_Pictographic}/gu, '');

      const heading = document.getElementById(hash);

      if (heading === null) return;

      const headingRect = heading.getBoundingClientRect();
      const { pageYOffset } = window;

      steps.push({
        text: anchor.innerHTML.replace(/<\/?(br|mark|u)>/g, ' '),
        yOffset: headingRect.top + pageYOffset - 60,
      });
    });

    setTOCSteps(steps);
  }

  function handleStepClick(top: number) {
    window.scroll({
      top,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    function listener() {
      const { pageYOffset } = window;

      tocSteps.forEach((step, index) => {
        if (step.yOffset < pageYOffset + 20) {
          setActiveStep(index);
        }
      });
    }

    listener();
    window.addEventListener('scroll', listener);

    return () => {
      window.removeEventListener('scroll', listener);
    };
  }, [tocSteps]);

  useEffect(() => {
    const listener = () => {
      if (target === null) return;

      const targetRect = target.getBoundingClientRect();
      const { pageYOffset } = window;

      setXOffset(targetRect.left + targetRect.width);

      if (pageYOffset < target.offsetTop) {
        setPosition('absolute');
        setYOffset(target.offsetTop);
      } else if (pageYOffset < targetRect.height) {
        setPosition('fixed');
        setYOffset(0);
      } else {
        setPosition('absolute');
      }
    };

    listener();
    ['resize', 'orientationChange', 'scroll'].forEach((type) => {
      window.addEventListener(type, listener);
    });

    setTOCStepsOffset();

    return () => {
      ['resize', 'orientationChange', 'scroll'].forEach((type) => {
        window.removeEventListener(type, listener);
      });
    };
  }, [htmlString, target]);

  return (
    <aside
      className={styles.container}
      style={{
        position,
        left: xOffset,
        top: `calc(${yOffset}px + ${theme.spacing(10)})`,
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
              onClick={() => handleStepClick(step.yOffset)}
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
}
