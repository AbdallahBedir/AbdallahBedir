import { Theme } from "@material-ui/core/styles/createMuiTheme";
import { Breakpoint } from "@material-ui/core/styles/createBreakpoints";
import {
  Typography,
  FontStyle,
  FontStyleOptions,
} from "@material-ui/core/styles/createTypography";

declare module "@material-ui/core/styles/createTypography" {
  interface FontStyle
    extends Required<{
      fontFamilySecondary: React.CSSProperties["fontFamily"];
    }> {}
  // interface FontStyleOptions extends Partial<FontStyle> {
  //   fontFamilySecondary?: React.CSSProperties["fontFamily"];
  //   htmlFontSize?: number;
  //   allVariants?: React.CSSProperties;
  // }
}
