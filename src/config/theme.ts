import createMyTheme from "./createMyTheme";

const theme = createMyTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 650,
      md: 960,
      lg: 1280,
      xl: 1600,
    },
  },
  typography: {
    fontFamily: "'Titillium Web', sans-serif",
    fontFamilySecondary: "'Montserrat', sans-serif",
  },
  palette: {
    type: "dark",
    primary: {
      main: "#ed6161",
    },
    secondary: {
      main: "#323439",
    },
    error: {
      main: "#ed6161",
    },
    text: {
      secondary: "#999999",
    },
    background: {
      paper: "rgba(3,3,3,0.8)",
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiTextField: {
      // Name of the rule
      root: {
        marginBottom: "18px",
      },
    },
  },
});

export default theme;
