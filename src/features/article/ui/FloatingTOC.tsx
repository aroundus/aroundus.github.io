import React, { useEffect, useState } from 'react';

import { Box, Step, StepLabel, Stepper, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { throttle } from 'lodash-es';
import { createUseStyles } from 'react-jss';

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

  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const [tocSteps, setTocSteps] = useState<TOCStep[]>([]);
  const [position, setPosition] = useState<React.CSSProperties['position']>('absolute');
  const [xOffset, setXOffset] = useState(0);
  const [yOffset, setYOffset] = useState(0);

  function setTocStepsOffset() {
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
      const { scrollY } = window;

      steps.push({
        text: anchor.innerHTML.replace(/<\/?(br|mark|u)>/g, ' '),
        yOffset: headingRect.top + scrollY - 60,
      });
    });

    setTocSteps(steps);
  }

  function handleStepClick(top: number) {
    window.scroll({
      top,
      behavior: 'smooth',
    });
  }

  useEffect(() => {
    function handleScroll() {
      const { scrollY } = window;

      tocSteps.forEach((step, index) => {
        if (step.yOffset < scrollY + 20) {
          setActiveStepIndex(index);
        }
      });
    }

    const throttledScroll = throttle(handleScroll, 50);

    handleScroll();
    window.addEventListener('scroll', throttledScroll);

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [tocSteps]);

  useEffect(() => {
    const handleScroll = () => {
      if (target === null) {
        return;
      }

      const targetRect = target.getBoundingClientRect();
      const { scrollY } = window;

      setXOffset(targetRect.left + targetRect.width);

      if (scrollY < target.offsetTop) {
        setPosition('absolute');
        setYOffset(target.offsetTop);
      } else if (scrollY < targetRect.height) {
        setPosition('fixed');
        setYOffset(0);
      } else {
        setPosition('absolute');
      }
    };

    const throttledScroll = throttle(handleScroll, 50);

    handleScroll();
    ['resize', 'orientationChange', 'scroll'].forEach((type) => {
      window.addEventListener(type, throttledScroll);
    });

    setTocStepsOffset();

    return () => {
      ['resize', 'orientationChange', 'scroll'].forEach((type) => {
        window.removeEventListener(type, throttledScroll);
      });
    };
  }, [htmlString, target]);

  return (
    <div
      className={styles.container}
      style={{
        position,
        left: xOffset,
        top: `calc(${yOffset}px + ${theme.spacing(10)})`,
      }}
    >
      <Box sx={{ minWidth: 160 }}>
        <Stepper
          activeStep={activeStepIndex}
          connector={null}
          nonLinear
          orientation="vertical"
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
                  fontSize={15}
                  lineHeight={1.3}
                  variant="subtitle1"
                >
                  {step.text}
                </Typography>
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
    </div>
  );
}
