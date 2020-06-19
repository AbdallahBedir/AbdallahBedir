import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import RoomIcon from '@material-ui/icons/Room';

const styles = (theme) => ({
    root:{
        textAlign:'center',
        position: 'relative'
    },
    link:{
        color: ['#a8a7a7','!important'],
        fontSize: ['14px','!important'],
        fontWeight: '500',
    },
    underline:{
        width: '26px',
        height: '2px',
        margin: '3px auto',
        display: 'block',
        backgroundColor: theme.palette.primary.main,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
    },
    icon:{
        fontSize: '15px',
        margin: '0 2px'
    }
})

function LivePreview(props){
    const { classes ,url } = props;

    return (
        <div className="live-preview">
            <Link  
                className={classes.link}
                variant="body2"
                href={url}
                target="_blank"
                underline="none"
                >
                Live Preview
                <RoomIcon className={classes.icon} color="primary"/>
            </Link>
            <span className={classes.underline} />
        </div>
    )
}

LivePreview.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LivePreview);