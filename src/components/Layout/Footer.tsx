import React from 'react';
import { createUseStyles } from 'react-jss';
import { graphql, useStaticQuery } from 'gatsby';

import { Box, colors, Container, Grid, Link, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { GitHub as GitHubIcon, Instagram as InstagramIcon, Mail as MailIcon } from '@mui/icons-material';

import { LogoIcon, SymbolmarkIcon } from '@/components/Icon';

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

export function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const { site }: Data = useStaticQuery(graphql`
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
  `);

  const meta = site.siteMetadata;

  const useStyles = createUseStyles({
    container: {
      '&': `
        border-top: 2px solid ${colors.cyan[100]};
        margin-top: ${theme.spacing(12)};
      `,
    },
  });

  const styles = useStyles();

  return (
    <footer className={styles.container}>
      <Container
        disableGutters
        maxWidth="md"
        sx={{ mx: 'auto', px: isMobile ? 6 : 0, py: isMobile ? 10 : 20 }}
      >
        <Box>
          <Grid
            container
            justifyContent="space-between"
            spacing={isMobile ? 6 : 12}
          >
            <Grid
              item
              sx={{ maxWidth: 260 }}
            >
              <Box
                alignItems="baseline"
                display="flex"
                gap={1}
              >
                <SymbolmarkIcon height={13} />
                <LogoIcon height={13} />
                <Typography variant="caption">어라운드어스</Typography>
              </Box>
              <Typography
                color={colors.grey[600]}
                sx={{ mb: 3, mt: 1 }}
                variant="body2"
              >
                {meta.description}
              </Typography>
              <Typography
                color={colors.grey[700]}
                component="p"
                variant="caption"
              >
                이 블로그는{' '}
                <Link
                  href="https://www.gatsbyjs.com/"
                  target="_blank"
                  underline="none"
                >
                  Gatsby
                </Link>
                로 만들었습니다.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                fontSize={15}
                fontWeight={600}
                variant="subtitle1"
              >
                {meta.author.name}
              </Typography>
              <Typography
                fontSize={12}
                variant="subtitle1"
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
                    color="action"
                    fontSize="small"
                  />
                </Link>
                <Link
                  href={meta.author.url.instagram}
                  target="_blank"
                >
                  <InstagramIcon
                    color="action"
                    fontSize="small"
                  />
                </Link>
                <Link
                  href={`mailto:${meta.author.email}?subject=[AROUNDUS] 제목을 작성해 주세요.`}
                  target="_blank"
                >
                  <MailIcon
                    color="action"
                    fontSize="small"
                  />
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </footer>
  );
}
