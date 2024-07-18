import { colors } from '@mui/material';
import { koKR } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

export const BASE_FONT_FAMILY =
  'Pretendard, "SF Pro KR", "SF Pro Text", "SF Pro Display", "SF Pro Icons", "Apple Gothic", -apple-system, "Segoe UI Emoji", "Segoe UI Symbol", sans-serif';
export const CODE_FONT_FAMILY = '"SF Mono", "Roboto Mono", Consolas, monospace';
export const HEADING_FONT_FAMILY =
  'Montserrat, Pretendard, "SF Pro KR", "SF Pro Text", "SF Pro Display", "SF Pro Icons", "Apple Gothic", -apple-system, "Segoe UI Emoji", "Segoe UI Symbol", sans-serif';

export const theme = createTheme(
  {
    spacing: 4,
    shape: {
      borderRadius: 4,
    },
    palette: {
      primary: {
        main: colors.cyan[400],
        contrastText: colors.common.white,
      },
      secondary: {
        main: colors.grey[500],
        contrastText: colors.common.white,
      },
    },
    typography: {
      fontFamily: BASE_FONT_FAMILY,
      htmlFontSize: 10,
      button: {
        fontWeight: 'normal',
      },
      h1: {
        fontFamily: HEADING_FONT_FAMILY,
        fontWeight: 'bold',
      },
      h2: {
        fontFamily: HEADING_FONT_FAMILY,
        fontWeight: 'bold',
      },
      h3: {
        fontFamily: HEADING_FONT_FAMILY,
        fontWeight: 'bold',
      },
      h4: {
        fontFamily: HEADING_FONT_FAMILY,
        fontWeight: 'bold',
      },
      h5: {
        fontFamily: HEADING_FONT_FAMILY,
        fontWeight: 'bold',
      },
      h6: {
        fontFamily: HEADING_FONT_FAMILY,
        fontWeight: 'bold',
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          html {
            -webkit-font-smoothing: auto;
            font-feature-settings: 'case' 1, 'ss01' 1, 'ss03' 1;
            font-size: 10px;
          }

          body {
            background-color: ${colors.common.white};
            color: ${colors.common.black};
            font-family: ${BASE_FONT_FAMILY};
            font-weight: 400;
            line-height: 1.5;
            overflow-wrap: break-word;
            word-break: keep-all;
          }

          button,
          textarea {
            font-family: inherit;
          }

          section {
            position: relative;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${HEADING_FONT_FAMILY};

            .icon-heading-link {
              border-bottom: none;

              svg {
                visibility: visible;
              }
            }

            a,
            u {
              border-bottom: 2px solid ${colors.cyan[400]};
              text-decoration: none;
            }
          }

          h1 {
            font-size: 2.2em;
            margin-top: 2.2em;
          }

          h2 {
            font-size: 2em;
            margin-top: 2em;
          }

          h3 {
            font-size: 1.6em;
            margin-top: 1.8em;
          }

          h4 {
            font-size: 1.4em;
            margin-top: 1.8em;
          }

          a {
            color: ${colors.common.black};
            transition: 0.2s;

            &:hover {
              color: ${colors.cyan[600]};
            }
          }

          p {
            color: ${colors.grey[900]};
            margin-top: 1.4em;
            margin-bottom: 1.4em;

            a,
            u {
              border-bottom: 2px solid ${colors.cyan[400]};
              text-decoration: none;
            }

            code {
              background-color: ${colors.grey[200]};
              border-radius: 4px;
              color: ${colors.deepOrange[700]};
              padding: 0 8px;
              zoom: 0.8;
            }

            img {
              box-shadow: 0 4px 24px -16px ${colors.grey[600]};
            }
          }

          strong {
            color: ${colors.common.black};
          }

          blockquote {
            margin: 2em 0;
            padding-left: 1em;
            border-left: 4px solid ${colors.grey[300]};
            font-size: 0.96em;
            color: ${colors.grey[600]};

            p {
              color: ${colors.grey[600]};
            }
          }

          code {
            font-family: ${CODE_FONT_FAMILY};
            font-weight: 500;
          }

          figure {
            margin: 0;
            text-align: center;

            a {
              border-bottom: none;
            }

            img {
              box-shadow: 0 4px 24px -16px ${colors.grey[600]};
            }

            figcaption {
              margin-top: 0.5em;
              margin-bottom: 0.5em;
              color: ${colors.grey[500]};
              text-align: center;
              font-size: 0.86em;
            }
          }

          iframe {
            box-shadow: 0 4px 24px -16px ${colors.grey[600]};
          }

          img {
            max-width: 100%;
          }

          li {
            font-size: 14px;

            p {
              margin-bottom: 4px;
              margin-top: 4px;
            }

            a {
              border-bottom: 2px solid ${colors.cyan[400]};
              color: ${colors.grey[800]};
              text-decoration: none;

              &:hover {
                color: ${colors.common.black};
              }
            }

            code {
              background-color: ${colors.grey[100]};
              border-radius: 4px;
              color: ${colors.cyan[700]};
              margin-right: 2px;
              padding: 0 8px;
              zoom: 0.86;
            }

            table {
              font-size: 14px;
              margin-top: 4px;
              margin-bottom: 8px;
            }
          }

          mark {
            background-color: transparent;
            color: inherit;
            background-image: linear-gradient(to top, ${colors.cyan[100]} 40%, transparent 10%, transparent 50%);
          }

          table {
            margin: auto;
            border-collapse: collapse;
            display: block;
            overflow-x: auto;
            font-size: 16px;

            th,
            td {
              padding: 4px 12px;
              border: 1px solid ${colors.grey[300]};

              code {
                padding: 0 8px;
                border-radius: 4px;
                background-color: ${colors.grey[100]};
                zoom: 0.9;
              }
            }

            th {
              background-color: ${colors.grey[200]};
            }
          }
        `,
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            fontFamily: HEADING_FONT_FAMILY,
          },
        },
      },
      MuiStepIcon: {
        styleOverrides: {
          text: {
            fontFamily: HEADING_FONT_FAMILY,
          },
        },
      },
    },
  },
  koKR,
);
