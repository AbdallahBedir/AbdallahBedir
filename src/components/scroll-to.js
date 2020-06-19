import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const styles = {
    root:{
        cursor:'pointer',
        display:'inline'        
    }
}
function ScrollTo(props) {
  const { classes, children, sectionId } = props;  

  const isSmallMatches = useMediaQuery(theme => theme.breakpoints.down('sm'));

  const handleClick = (event) => {  
    event.preventDefault();

    const element = document.getElementById(sectionId);

    if(element && element.getBoundingClientRect()){
        
        let offset = 60;
        if(isSmallMatches){
            offset = 160
        }
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <span onClick={handleClick} className={classes.root}>
        {children}
    </span>
  );
}

ScrollTo.propTypes = {
  children: PropTypes.element.isRequired
};

export default withStyles(styles)(ScrollTo);