import React from 'react';
import { createUseStyles } from 'react-jss';
import { graphql, useStaticQuery } from 'gatsby';

import {
  Button, colors, Typography, useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';

const KeyVisualSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1
        ) {
          nodes {
            fields {
              slug
            }
            html
            frontmatter {
              category
              index
              title
              date(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    `,
  );

  const post = allMarkdownRemark.nodes[0].frontmatter;
  const postPath = allMarkdownRemark.nodes[0].fields.slug;

  const getFirstImageURL = (htmlString: string) => {
    const parser = new DOMParser();
    const html = parser.parseFromString(htmlString, 'text/html');
    const body = html.querySelector('body') as HTMLBodyElement;
    const image = body.querySelector('img');

    return image ? image.src : '';
  };

  const useStyles = createUseStyles({
    container: {
      '&': `
        background: no-repeat center / cover;
        background-attachment: scroll;
        background-color: ${colors.grey[600]};
        background-image: url(${getFirstImageURL(allMarkdownRemark.nodes[0].html as string)});
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
        <Button
          variant="contained"
          size="large"
          color="primary"
          sx={{ mt: 3 }}
          href={postPath}
        >
          내용 보기
        </Button>
      </div>
    </section>
  );
};

export default KeyVisualSection;
