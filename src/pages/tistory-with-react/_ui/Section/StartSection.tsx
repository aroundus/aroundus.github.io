import React from 'react';

import { AutoAwesome as AutoAwesomeIcon } from '@mui/icons-material';
import { Button, Typography } from '@mui/material';
import { createUseStyles } from 'react-jss';

export function StartSection() {
  const useStyles = createUseStyles(
    {
      container: `
        position: relative;
      `,
    },
    {
      name: 'StartSection',
    },
  );

  const styles = useStyles();

  return (
    <section className={styles.container}>
      <Typography variant="h2">
        <AutoAwesomeIcon
          color="primary"
          sx={{ display: 'block', height: 60, mb: 2, width: 60 }}
        />
        시작은 단순하게.
        <br />
        가능성은 무한하게.
      </Typography>
      <Typography variant="body1">
        이 템플릿은 그저 개발의 시작일 뿐입니다. 코드를 수정하고, 폴더 구조를 바꾸고, 여러분의 입맛에 맞게 구성해
        보세요.
      </Typography>
      <Button
        color="primary"
        fullWidth
        href="https://github.com/aroundus/tistory-skin-template-react"
        size="large"
        sx={{
          borderRadius: 5,
          mt: 6,
          textTransform: 'unset',
          '& .MuiTypography-root': {
            fontFamily: 'Montserrat',
            fontWeight: 500,
          },
        }}
        target="_blank"
        variant="contained"
      >
        <Typography variant="caption">Start</Typography>
      </Button>
    </section>
  );
}
