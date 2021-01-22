import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: "#000",
    boxShadow: "0px 0px 0px #fff, 0px 1px 0px #464343",
    height: "2px",
    margin: theme.spacing(2, 0, 1),
  },
});

function Line(props) {
  const { classes } = props;

  return <div className={classes.root}></div>;
}

Line.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Line);
