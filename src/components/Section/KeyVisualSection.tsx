import React from 'react';
import { createUseStyles } from 'react-jss';

import {
  Button, colors, Typography, useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

import { Post } from '~types/global';

interface KeyVisualSectionProps {
  post: Post;
  isButtonVisible?: boolean;
}

const KeyVisualSection = ({
  post,
  isButtonVisible = true,
}: KeyVisualSectionProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const useStyles = createUseStyles({
    container: {
      '&': `
        background: no-repeat center / cover;
        background-attachment: scroll;
        background-color: ${colors.grey[600]};
        background-image: url(${post.image});
      `,
      '&::before': `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: ${colors.common.black};
        opacity: 0.5;
        content: '';
      `,
    },
    content: `
      max-width: 900px;
    `,
  }, {
    name: 'KeyVisualSection',
  });

  const styles = useStyles();

  return (
    <section
      className={styles.container}
      style={{
        padding: `${theme.spacing(isMobile ? 32 : 64)} ${theme.spacing(isMobile ? 12 : 16)} ${theme.spacing(16)}`,
      }}
    >
      <div className={styles.content}>
        <Typography
          variant="h6"
          color={colors.grey[200]}
          sx={{ mb: 2 }}
          position="relative"
        >
          #{post.category} Episode {post.index}
        </Typography>
        <Typography
          variant={isMobile ? 'h4' : 'h3'}
          color={colors.common.white}
          position="relative"
        >
          {post.title}
        </Typography>
        <Typography
          variant="subtitle1"
          color={colors.common.white}
          sx={{ mt: 3 }}
          position="relative"
        >
          {post.date}
        </Typography>
        {isButtonVisible && (
          <Button
            variant="contained"
            size="large"
            color="primary"
            sx={{ mt: 3 }}
            href={post.path}
          >
            내용 보기
          </Button>
        )}
      </div>
    </section>
  );
};

export default KeyVisualSection;
