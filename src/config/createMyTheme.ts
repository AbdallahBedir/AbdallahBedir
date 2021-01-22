import { createMuiTheme, ThemeOptions } from "@material-ui/core/styles";

export default function createMyTheme(options: ThemeOptions) {
  return createMuiTheme({
    typography: {
      fontFamilySecondary: "sans-serif",
    },
    ...options,
  });
}
