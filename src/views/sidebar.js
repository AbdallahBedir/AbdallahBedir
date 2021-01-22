import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Hidden from "@material-ui/core/Hidden";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Person,
  BarChart,
  Work,
  LocalOffer,
  MailOutline,
} from "@material-ui/icons";
import { withStyles } from "@material-ui/core/styles";
import ScrollTo from "../components/scroll-to";

const styles = (theme) => ({
  root: {
    padding: theme.spacing(8, 4, 0),
    textAlign: "right",
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(8, 3, 0),
    },
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      padding: theme.spacing(2, 0, 0),
    },
  },
  heading: {
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginBottom: 0,
    },
    fontWeight: 200,
    fontSize: "2rem",
    letterSpacing: "1.5px",
    "& span": {
      fontFamily: "'Covered By Your Grace', cursive",
      fontSize: "40px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.3rem",
      "& span": {
        fontSize: "55px",
      },
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "2.7rem",
      "& span": {
        fontSize: "60px",
      },
    },
    [theme.breakpoints.up("xl")]: {
      fontSize: "3.2rem",
      "& span": {
        fontSize: "65px",
      },
    },
  },
  role: {
    letterSpacing: "1.5px",
    [theme.breakpoints.down("lg")]: {
      fontSize: "1rem",
    },
  },
  list: {
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(5),
    },
  },
  item: {
    textAlign: "right",
    color: theme.palette.text.secondary,
    transition: "color 0.2s ease-in-out",
    [theme.breakpoints.down("sm")]: {
      width: ["auto", "!important"],
      display: ["inline-flex", "!important"],
      textAlign: "center",
    },
    "&:hover": {
      color: "#FFF",
      "& $icon": {
        color: "#FFF",
      },
    },
  },
  icon: {
    justifyContent: "flex-end",
    minWidth: "35px",
    color: theme.palette.text.secondary,
    transition: "color 0.2s ease-in-out",
    "& svg": {
      fontSize: "1.15rem",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "0 5px",
      "& svg": {
        fontSize: ["1.4rem", "!important"],
      },
    },
  },
});

function Sidebar(props) {
  const { classes } = props;
  const links = [
    {
      text: "Profile",
      href: "header",
      icon: <Person style={{ fontSize: "1.2rem" }} />,
    },
    {
      text: "Skills",
      href: "skills",
      icon: <BarChart />,
    },
    {
      text: "Works",
      href: "works",
      icon: <Work style={{ fontSize: "1.05rem" }} />,
    },
    {
      text: "About",
      href: "about",
      icon: <LocalOffer style={{ fontSize: "1.05rem" }} />,
    },
    {
      text: "Contact",
      href: "contact",
      icon: <MailOutline />,
    },
  ];

  return (
    <div className={classes.root}>
      <Typography className={classes.heading} variant="h3">
        <span>A</span>bdallah <span>B</span>edir
      </Typography>
      <Typography className={classes.role} variant="h6">
        Front-end Developer.
      </Typography>
      <div className={classes.list}>
        <List dense={false} component="div">
          {links.map((link) => (
            <ScrollTo sectionId={link.href} key={link.href}>
              <ListItem className={classes.item} disableGutters>
                <Hidden smDown>
                  <ListItemText primary={link.text} />
                </Hidden>
                <ListItemIcon className={classes.icon} fontSize="small">
                  {link.icon}
                </ListItemIcon>
              </ListItem>
            </ScrollTo>
          ))}
        </List>
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sidebar);
