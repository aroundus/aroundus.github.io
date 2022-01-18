import { alpha, colors } from '@mui/material';
import { koKR } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

const BASE_FONT_FAMILY = '"SF Pro KR", "SF Pro Display", "SF Pro Icons", -apple-system, "Segoe UI Emoji", "Segoe UI Symbol", sans-serif';
const CODE_FONT_FAMILY = '"SF Mono", "Roboto Mono", Consolas, monospace';
const HEADING_FONT_FAMILY = 'Montserrat, "SF Pro KR", "SF Pro Display", "SF Pro Icons", -apple-system, "Segoe UI Emoji", "Segoe UI Symbol", sans-serif';

const theme = createTheme({
  spacing: 4,
  shape: {
    borderRadius: 4,
  },
  palette: {
    primary: {
      main: colors.cyan[400],
      contrastText: colors.common.white,
    },
  },
  typography: {
    fontFamily: BASE_FONT_FAMILY,
    fontSize: 16,
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
    subtitle1: {
      fontFamily: HEADING_FONT_FAMILY,
      fontSize: '1em',
      lineHeight: 1.5,
    },
    body1: {
      letterSpacing: 0.2,
    },
    caption: {
      lineHeight: 1.2,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          -webkit-font-smoothing: antialiased;
          font-size: 10px;
        }

        body {
          background-color: ${colors.common.white};
          color: ${colors.common.black};
          font-family: ${BASE_FONT_FAMILY};
          font-weight: 400;
          line-height: 1.4;
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
          line-height: 1.3;

          .icon-heading-link {
            border-bottom: none;

            svg {
              visibility: visible;
            }
          }

          u {
            border-bottom: 2px solid ${colors.cyan[400]};
            text-decoration: none;
          }
        }

        h1 {
          font-size: 2em;
          margin-top: 2.2em;
        }

        h2 {
          font-size: 1.8em;
          margin-top: 2em;
        }

        h3 {
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
          margin-top: 1.4em;
          margin-bottom: 1.4em;
          color: ${colors.grey[900]};
          letter-spacing: 0.2px;
          line-height: 1.6;

          a,
          u {
            border-bottom: 2px solid ${colors.cyan[400]};
            text-decoration: none;
          }

          code {
            padding: 4px 12px;
            border-radius: 4px;
            color: ${colors.deepOrange[700]};
            background-color: ${colors.grey[200]};
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

        img {
          max-width: 100%;
        }

        li {
          font-size: 0.86em;

          a {
            border-bottom: none;
            color: ${colors.grey[800]};
            font-family: ${HEADING_FONT_FAMILY};
            text-decoration: none;

            &:hover {
              color: ${colors.common.black};
            }
          }

          code {
            margin-right: 2px;
            padding: 2px 8px;
            border-radius: 4px;
            color: ${colors.cyan[700]};
            background-color: ${colors.grey[100]};
            zoom: 0.86;
          }
        }

        mark {
          padding: 2px 4px;
          background-color: ${alpha(colors.cyan[100], 0.6)};
        }

        table {
          display: block;
          border-collapse: collapse;
          overflow-x: auto;
          font-size: 16px;

          th,
          td {
            padding: 4px 12px;
            border: 1px solid ${colors.grey[300]};

            code {
              padding: 2px 8px;
              border-radius: 4px;
              background-color: ${colors.grey[100]};
              zoom: 0.9;
            }
          }

          th {
            background-color: ${colors.grey[200]};
          }
        }

        .gatsby-resp-image {
          &-figure {
            margin: 0;

            a {
              border-bottom: none;
            }

          }

          &-image {
            box-shadow: 0 4px 24px -16px ${colors.grey[600]} !important;
          }

          &-figcaption {
            margin-top: 4px;
            font-size: 0.86em;
            text-align: center;

            p {
              margin-top: 0.5em;
              margin-bottom: 0.5em;
              color: ${colors.grey[500]};

              a {
                color: ${colors.grey[500]};

                &:hover {
                  color: ${colors.cyan[600]};
                }
              }
            }
          }
        }

        .gatsby-highlight {
          code[class*="language-"],
          pre[class*="language-"] {
            font-family: ${CODE_FONT_FAMILY};
            font-size: 14px;
            font-weight: 500;
          }

          pre[class*="language-"] {
            border-radius: 4px;

            &::after,
            &::before {
              box-shadow: none;
            }

            &.line-numbers {
              &.line-numbers code {
                padding: 24px;
                padding-left: 64px;
                box-shadow: none;
              }

              .line-numbers-rows {
                padding: 24px 0;
                min-width: 48px;
                border-left: 8px solid ${colors.cyan[300]};
                background-image: linear-gradient(${colors.common.white} 50%, ${colors.grey[100]} 50%);
                background-size: 3em 3em;
                background-origin: content-box;
                letter-spacing: 0;

                > span {
                  padding-left: 12px;
                }
              }
            }

            > code {
              border-left: none;
              background-image: linear-gradient(${colors.common.white} 50%, ${colors.grey[100]} 50%);
            }
          }

          .command-line-prompt {
            letter-spacing: 0;
          }
        }

        .mermaid {
          padding: 32px 0;
          overflow-x: auto;
          text-align: center;
          letter-spacing: 0;
        }

        section {
          .gt-container {
            a {
              color: ${colors.common.black};

              &:hover {
                color: ${colors.cyan[600]};
                border-color: ${colors.cyan[400]};
                text-decoration: none;
              }
            }

            .gt {
              &-avatar {
                img {
                  border-radius: 50%;
                }
              }

              &-btn {
                border-color: ${colors.cyan[400]};
                background-color: ${colors.cyan[400]};
                transition: 0.2s;
                font-size: 0.85em;

                &:hover {
                  border-color: ${colors.cyan[600]};
                  background-color: ${colors.cyan[600]};
                }

                &-preview {
                  color: ${colors.cyan[400]};
                  background-color: ${colors.common.white};

                  &:hover {
                    color: ${colors.cyan[600]};
                    border-color: ${colors.cyan[600]};
                    background-color: inherit;
                  }
                }

                &-public {
                  background-color: ${colors.cyan[400]};

                  &:hover {
                    border-color: ${colors.cyan[600]};
                    background-color: ${colors.cyan[600]};
                  }
                }
              }

              &-header {
                &-preview {
                  border-radius: 4px;
                  border-color: ${colors.grey[300]};
                  background-color: ${colors.grey[100]};
                }

                &-controls-tip {
                  color: ${colors.cyan[600]};
                }
              }

              &-svg {
                vertical-align: middle;

                svg {
                  fill: ${colors.cyan[600]};
                }
              }

              &-ico-text {
                vertical-align: middle;
              }

              &-comment {
                &-admin {
                  .gt-comment-content {
                    background-color: ${alpha(colors.cyan[50], 0.2)};
                  }
                }

                &-username {
                  color: ${colors.cyan[600]};
                }

                &-content {
                  border: 1px solid ${colors.cyan[200]};
                  border-radius: 4px;
                  background-color: ${colors.common.white};
                }
              }
            }
          }

          .markdown-body {
            font-family: inherit;
            font-size: 0.9em;

            code {
              font-size: inherit;
            }
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
}, koKR);

export default theme;
