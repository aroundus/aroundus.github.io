import React from 'react';
import { createUseStyles } from 'react-jss';
import { graphql, useStaticQuery } from 'gatsby';

import {
  Box, colors, Container, Grid, Link, Typography, useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  GitHub as GitHubIcon,
  Instagram as InstagramIcon,
  Mail as MailIcon,
} from '@mui/icons-material';

import Logo from '~components/Logo';

interface Data {
  site: {
    siteMetadata: {
      title: string;
      author: {
        name: string;
        summary: string;
        email: string;
        url: {
          github: string;
          instagram: string;
        };
      };
      description: string;
    };
  };
}

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { site }: Data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            author {
              name
              summary
              email
              url {
                github
                instagram
              }
            }
            description
          }
        }
      }
    `,
  );

  const meta = site.siteMetadata;

  const useStyles = createUseStyles({
    container: {
      '&': `
        margin-top: ${theme.spacing(12)};
        border-top: 2px solid ${colors.cyan[100]};
      `,
    },
  });

  const styles = useStyles();

  return (
    <footer className={styles.container}>
      <Container
        maxWidth="md"
        sx={{ mx: 'auto', px: isMobile ? 12 : 0, py: isMobile ? 10 : 20 }}
        disableGutters
      >
        <Box>
          <Grid
            spacing={isMobile ? 6 : 12}
            justifyContent="space-between"
            container
          >
            <Grid
              sx={{ maxWidth: 260 }}
              item
            >
              <Logo
                height={14}
                style={{ fill: colors.common.black }}
              />
              <Typography
                variant="caption"
                sx={{ ml: 2, verticalAlign: 'text-bottom' }}
              >
                어라운드어스
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={12}
                color={colors.grey[700]}
              >
                {meta.description}
              </Typography>
              <Typography
                variant="caption"
                component="p"
                color={colors.grey[700]}
                sx={{ mt: 3 }}
              >
                이 블로그는{' '}
                <Link
                  href="https://www.gatsbyjs.com/"
                  underline="none"
                  target="_blank"
                >
                  Gatsby
                </Link>
                로 만들었습니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                fontSize={15}
                fontWeight={600}
              >
                {meta.author.name}
              </Typography>
              <Typography
                variant="subtitle1"
                fontSize={12}
              >
                {meta.author.summary}
              </Typography>
              <Box
                display="flex"
                gap={2}
                sx={{ mt: 3 }}
              >
                <Link
                  href={meta.author.url.github}
                  target="_blank"
                >
                  <GitHubIcon
                    fontSize="small"
                    color="action"
                  />
                </Link>
                <Link
                  href={meta.author.url.instagram}
                  target="_blank"
                >
                  <InstagramIcon
                    fontSize="small"
                    color="action"
                  />
                </Link>
                <Link
                  href={`mailto:${meta.author.email}?subject=[AROUNDUS] 제목을 작성하세요.`}
                  target="_blank"
                >
                  <MailIcon
                    fontSize="small"
                    color="action"
                  />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
};

export default Footer;
