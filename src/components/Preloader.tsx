import React, { useEffect, useState } from 'react';
import Lottie from 'react-lottie';

import { Box, colors, Container } from '@material-ui/core';
import { createStyles, makeStyles } from '@material-ui/core/styles';

import HappyBananaLottie from '~assets/lotties/happy-banana.json';

const Preloader = () => {
  const [isVisible, setVisible] = useState(true);
  const [isAnimationVisible, setAnimationVisible] = useState(true);

  const classes = {
    Container: makeStyles({
      root: {
        position: 'fixed',
        right: 0,
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 9999,
        backgroundColor: colors.common.white,
      },
    })(),
    Box: makeStyles({
      root: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    })(),
  };

  const styles = createStyles({
    Box: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    },
  });

  const lottieOptions = {
    loop: false,
    autoplay: true,
    animationData: HappyBananaLottie,
  };

  useEffect(() => {
    if (!isAnimationVisible) {
      setTimeout(() => {
        setVisible(false);
      }, 1000);
    }
  }, [isAnimationVisible]);

  useEffect(() => {
    setTimeout(() => {
      setAnimationVisible(false);
    }, 1000 * 2);
  }, []);

  return (
    <>
      {isVisible && (
        <Container
          classes={classes.Container}
          maxWidth={false}
          disableGutters
        >
          <Box style={styles.Box as React.CSSProperties}>
            <Lottie
              options={lottieOptions}
              width={160}
              height={160}
              style={{
                opacity: isAnimationVisible ? 1 : 0,
                transitionDuration: '0.4s',
              }}
            />
          </Box>
        </Container>
      )}
    </>
  );
};

export default Preloader;
