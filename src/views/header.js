import React from "react";
import PropTypes from "prop-types";
// Material UI core
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
// React components
import Box from "../components/box";
import profilePhoto from "../assets/imgs/0E0M5W9O3V.jpg";

const styles = (theme) => ({
  root: {
    fontFamily: [theme.typography.fontFamilySecondary, "!important"],
    margin: theme.spacing(9, 0, 0),
  },
  container: {
    marginTop: "-15px",
  },
  item: {
    paddingRight: theme.spacing(2),
  },
  overline: {
    marginBottom: theme.spacing(1),
    fontFamily: theme.typography.fontFamilySecondary,
    letterSpacing: "1px",
  },
  body2: {
    [theme.breakpoints.up("sm")]: {
      marginBottom: ["5px", "!important"],
    },
  },
  img: {
    width: "100%",
    filter: "saturate(0.5)",
  },
});

function Header(props) {
  const { classes } = props;

  return (
    <section id="header" className={classes.root}>
      <Box disableGutters>
        <img className={classes.img} src={profilePhoto} alt="Abdallah bedir" />
      </Box>
      <Box>
        <Grid container className={classes.container}>
          <Grid item className={classes.item} sm={6} xs={12}>
            <Typography variant="overline" className={classes.overline}>
              WHO Am I ?
            </Typography>
            <Typography variant="body2" className={classes.body2}>
              I make it my goal to look not only to my own interests, but also
              to the interests of others. I am always looking forward to taking
              care of the details and produce a product free of errors or any
              bugs.
            </Typography>
          </Grid>
          <Grid item className={classes.item} sm={6} xs={12}>
            <Typography variant="overline" className={classes.overline}>
              ROUMING OUTSIDE THE BOX
            </Typography>
            <Typography variant="body2" className={classes.body2}>
              I’m never satisfied with the current trends and fads flying around
              the web. Creativity, I believe will never progress unless we climb
              outside the confining box of simplemindedness.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </section>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
