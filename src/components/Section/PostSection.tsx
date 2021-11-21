import React from 'react';
import { createUseStyles } from 'react-jss';
import { Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const PostSection = () => {
  const theme = useTheme();

  const styles = createUseStyles({
    container: `
      position: relative;
      height: 1000px;
    `,
  }, {
    name: 'PostSection',
  })();

  return (
    <section className={styles.container}>
      <Container
        maxWidth="md"
        sx={{
          p: theme.spacing(12),
        }}
        disableGutters
      >
        글 목록을 야무지게 구성할 예정입니다. 🙆🏻‍♀️
      </Container>
    </section>
  );
};

export default PostSection;
