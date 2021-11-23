import { colors } from '@mui/material';
import { koKR } from '@mui/material/locale';
import { createTheme } from '@mui/material/styles';
import '@fontsource/montserrat';

const BASE_FONT_FAMILY = '"SF Pro KR", "SF Pro Display", "SF Pro Icons", -apple-system, sans-serif';
const CODE_FONT_FAMILY = '"SF Mono", "Roboto Mono", Consolas, monospace';
const HEADING_FONT_FAMILY = 'Montserrat, "SF Pro KR", "SF Pro Display", "SF Pro Icons", -apple-system, sans-serif';

const theme = createTheme({
  spacing: 4,
  palette: {
    primary: {
      main: colors.cyan[600],
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
      lineHeight: 1.5,
    },
    body1: {
      letterSpacing: 0.2,
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
        code {
          font-family: ${CODE_FONT_FAMILY};
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
        }
        h1 {
          font-size: 1.8em;
        }
        h2 {
          font-size: 1.5em;
        }
        p {
          line-height: 1.5;
        }
        img {
          max-width: 100%;
        }
      `,
    },
  },
}, koKR);

export default theme;
