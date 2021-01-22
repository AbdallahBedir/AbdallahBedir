import React from "react";
import PropTypes from "prop-types";
import MuiBox from "@material-ui/core/Box";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: "3px",
    boxShadow: "0 0 5px #333",
    overflow: "hidden",
    padding: (props) => (props.disableGutters ? 0 : theme.spacing(5, 4)),
    margin: (props) =>
      props.disableGutters
        ? theme.spacing(0, "auto", 3)
        : theme.spacing(0, "auto", 35),
    [theme.breakpoints.down("lg")]: {
      maxWidth: (props) => (props.disableGutters ? "600px" : "none"),
    },
    [theme.breakpoints.up("xl")]: {
      maxWidth: (props) => (props.disableGutters ? "650px" : "none"),
    },
  },
});

function Box(props) {
  const { classes, children } = props;

  return (
    <div className={classes.root}>
      <MuiBox>{children}</MuiBox>
    </div>
  );
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Box);
