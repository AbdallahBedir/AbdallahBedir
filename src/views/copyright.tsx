import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Box from "../components/box";
import {
  withStyles,
  Theme,
  WithStyles,
  createStyles,
} from "@material-ui/core/styles";
import ScrollTo from "../components/scroll-to";

interface Props extends WithStyles<typeof styles> {}

const styles = (theme: Theme) =>
  createStyles({
    root: {
      fontFamily: `${theme.typography.fontFamilySecondary} !important`,
    },
    overline: {
      marginBottom: theme.spacing(1),
      letterSpacing: "2px",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: "1.7",
    },
    link: {
      fontWeight: 400,
      margin: "0 8px",
      textTransform: "capitalize",
      transition: "color 0.25s ease",
      "&:hover": {
        color: "#FFF",
      },
      "& span": {
        fontFamily: "'Covered By Your Grace', cursive",
        fontSize: "20px",
      },
    },
  });

const Copyright: React.FC<Props> = ({ classes }) => {
  return (
    <footer className={classes.root}>
      <Box>
        <Typography
          variant="overline"
          className={classes.overline}
          display="block"
        >
          ALL COPYRIGHT &copy; {new Date().getFullYear()} ARE RESERVED @
          <ScrollTo sectionId="header">
            <Link
              className={classes.link}
              href="#"
              color="textSecondary"
              underline="none"
            >
              <span>A</span>bdallah <span>B</span>edir
            </Link>
          </ScrollTo>
        </Typography>
      </Box>
    </footer>
  );
};

export default withStyles(styles)(Copyright);
