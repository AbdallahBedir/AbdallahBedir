import React from "react";
import { withStyles, WithStyles, Theme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

interface Props extends WithStyles<typeof styles> {
  sectionId: string;
  children: JSX.Element;
}

const styles = {
  root: {
    cursor: "pointer",
    display: "inline",
  },
};

const ScrollTo: React.FC<Props> = ({ classes, children, sectionId }) => {
  const isSmallMatches = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("sm")
  );

  const handleClick = (
    event: React.MouseEvent<HTMLSpanElement, MouseEvent>
  ) => {
    event.preventDefault();

    const element = document.getElementById(sectionId);

    if (element && element.getBoundingClientRect()) {
      let offset = 60;
      if (isSmallMatches) {
        offset = 160;
      }
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <span onClick={handleClick} className={classes.root}>
      {children}
    </span>
  );
};

export default withStyles(styles)(ScrollTo);
