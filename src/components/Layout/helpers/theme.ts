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
        contrastText: 'Canvas',
      },
      secondary: {
        main: colors.grey[500],
        contrastText: 'Canvas',
      },
    },
    typography: {
      fontFamily: BASE_FONT_FAMILY,
      fontSize: 15.75, // https://mui.com/material-ui/customization/typography/#font-size
      htmlFontSize: 10,
      body1: {
        lineHeight: undefined,
      },
      body2: {
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
        margin: undefined,
      },
      h2: {
        fontFamily: undefined,
        fontSize: undefined,
        fontWeight: 700,
        lineHeight: 1.35,
        margin: undefined,
      },
      h3: {
        fontFamily: undefined,
        fontSize: undefined,
        fontWeight: 700,
        lineHeight: undefined,
        margin: undefined,
      },
      h4: {
        fontFamily: undefined,
        fontSize: undefined,
        fontWeight: 700,
        lineHeight: undefined,
        margin: undefined,
      },
      h5: {
        fontFamily: undefined,
        fontSize: undefined,
        fontWeight: 700,
        lineHeight: undefined,
        margin: undefined,
      },
      h6: {
        fontFamily: undefined,
        fontSize: undefined,
        fontWeight: 700,
        lineHeight: undefined,
        margin: undefined,
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
            color: CanvasText;
            text-decoration: none;
            transition: 200ms;

            @media (hover: hover) {
              &:hover {
                color: ${colors.cyan[600]};
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
          }

          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-family: ${HEADING_FONT_FAMILY};
            line-height: 1.35;
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

          mark {
            background-color: transparent;
            color: inherit;
            background-image: linear-gradient(to top, ${colors.cyan[100]} 40%, transparent 10%, transparent 50%);
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
