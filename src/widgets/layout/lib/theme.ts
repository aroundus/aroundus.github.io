import { colors } from '@mui/material';
import { koKR } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';

const BASE_FONT_FAMILY =
  '"Wanted Sans", "SF Pro KR", "SF Pro Text", "SF Pro Display", "SF Pro Icons", "Apple Gothic", -apple-system, "Segoe UI Emoji", "Segoe UI Symbol", sans-serif';
const CODE_FONT_FAMILY = '"SF Mono", "Roboto Mono", Consolas, monospace';
const HEADING_FONT_FAMILY = `Montserrat, ${BASE_FONT_FAMILY}`;

const theme = createTheme(
  {
    spacing: 4,
    shape: {
      borderRadius: 4,
    },
    typography: {
      fontFamily: BASE_FONT_FAMILY,
      fontSize: 15.75, // https://mui.com/material-ui/customization/typography/#font-size
      htmlFontSize: 10,
      body1: {
        color: 'CanvasText',
        marginBottom: '0.4em',
        marginTop: '0.4em',
      },
      body2: {
        fontSize: 16,
      },
      caption: {
        display: 'inline-block',
        fontSize: 14,
        lineHeight: undefined,
      },
      button: {
        fontWeight: 'normal',
      },
      h1: {
        fontFamily: undefined,
        fontSize: undefined,
        fontWeight: 700,
        lineHeight: undefined,
        marginBottom: '0.4em',
        marginTop: '3.6em',
      },
      h2: {
        fontFamily: undefined,
        fontSize: undefined,
        fontWeight: 700,
        lineHeight: undefined,
        marginBottom: '0.4em',
        marginTop: '3.6em',
      },
      h3: {
        fontFamily: undefined,
        fontSize: undefined,
        fontWeight: 700,
        lineHeight: undefined,
        marginBottom: '0.4em',
        marginTop: '3.6em',
      },
      h4: {
        fontFamily: undefined,
        fontSize: undefined,
        fontWeight: 700,
        lineHeight: undefined,
        marginBottom: '0.4em',
        marginTop: '3.6em',
      },
      h5: {
        fontFamily: undefined,
        fontSize: undefined,
        fontWeight: 700,
        lineHeight: undefined,
        marginBottom: '0.4em',
        marginTop: '3.6em',
      },
      h6: {
        fontFamily: undefined,
        fontSize: undefined,
        fontWeight: 700,
        lineHeight: undefined,
        marginBottom: '0.4em',
        marginTop: '3.6em',
      },
      subtitle1: {
        color: 'CanvasText',
        lineHeight: undefined,
      },
      subtitle2: {
        color: 'CanvasText',
        lineHeight: undefined,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: `
          html {
            -webkit-font-smoothing: auto;
            font-size: 10px;
          }

          body {
            background-color: Canvas;
            color: CanvasText;
            color-scheme: light dark;
            font-family: ${BASE_FONT_FAMILY};
            font-weight: 400;
            line-height: 1.5;
            margin: 0;
            overflow-wrap: break-word;
            word-break: keep-all;
          }

          a {
            border-bottom: 0.2em solid ${colors.cyan[400]};
            color: ${colors.cyan[400]};
            text-decoration: none;
            transition: 200ms;

            &[class*="MuiTypography"] {
              text-decoration: none;
            }

            @media (hover: hover) {
              &:hover {
                color: color-mix(in srgb, ${colors.cyan[400]} 70%, CanvasText 30%);
              }
            }
          }

          button,
          textarea {
            font-family: inherit;
          }

          code {
            font-family: ${CODE_FONT_FAMILY};
            font-weight: 500;
            zoom: 0.9;
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${HEADING_FONT_FAMILY};
            line-height: 1.35;

            & + [class*="MuiTypography"] {
              margin-top: 1.6em;
            }
          }

          h1 {
            font-size: 48px;
          }

          h2 {
            font-size: 36px;
          }

          h3 {
            font-size: 32px;
          }

          h4 {
            font-size: 28px;
            line-height: 1.5;
          }

          h5 {
            font-size: 24px;
            line-height: 1.5;
          }

          h6 {
            font-size: 20px;
            line-height: 1.5;
          }

          img {
            max-width: 100%;
          }

          section {
            position: relative;
          }

          u {
            border-bottom: 0.2em solid ${colors.cyan[400]};
            text-decoration: none;
          }
        `,
      },
      MuiInput: {
        styleOverrides: {
          root: {
            margin: 0,
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            margin: 0,
          },
        },
      },
      MuiPaginationItem: {
        styleOverrides: {
          root: {
            color: 'CanvasText',
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

export const darkTheme = createTheme(theme, {
  palette: {
    mode: 'dark',
    error: {
      main: colors.red[400],
    },
    primary: {
      main: colors.cyan[400],
    },
    secondary: {
      main: colors.grey[400],
    },
  },
});

export const lightTheme = createTheme(theme, {
  palette: {
    mode: 'light',
    error: {
      main: colors.red[400],
    },
    primary: {
      main: colors.cyan[400],
    },
    secondary: {
      main: colors.grey[500],
    },
  },
});
