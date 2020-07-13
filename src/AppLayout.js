import React from 'react';
import PropTypes from 'prop-types';
// Material UI core
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
// Views
import Sidebar from './views/sidebar';
import Header from './views/header';
import Skills from './views/skills';
import Works from './views/works';
import About from './views/about';
import Contact from './views/contact';
import Copyright from './views/copyright';
// React components
import ScrollTo from './components/scroll-to';
import layoutImg from './assets/imgs/layout.jpg';
// Material UI icons
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';


const styles = (theme) => ({
    root:{},
    backdrop:{
        backgroundImage:`url(${layoutImg})`,
        height: '100vh',
        backgroundSize: '100% 100%;',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.9)', 
        position:'fixed',
        zIndex: -1,
        top: 0,
        bottom: 0,
        width:'100%'
    },
    container:{
        height: '100%',
        position: 'relative',
        zIndex: 1
    },
    aside:{
        backgroundColor:theme.palette.background.paper,
        height:'100vh',
        top: 0,
        position: 'sticky',
        [theme.breakpoints.down('sm')]: {
            height: 'auto',
            position: 'fixed',
            width: '100%',
            zIndex: 10
        }
    },
    main:{
        [theme.breakpoints.up('md')]: {
            padding:theme.spacing(0,12,9,6),
        },
        [theme.breakpoints.only('sm')]:{
            marginRight:theme.spacing(4),
            marginLeft:theme.spacing(4),
        },
        [theme.breakpoints.down('sm')]: {
            padding:theme.spacing(0,3,4),
            marginTop: theme.spacing(22)
        }
    },
    scrollTop:{
        position: 'fixed',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fab:{
        backgroundColor:'rgba(3,3,3,0.6)',
        borderRadius: ['3px','!important'],
        height: ['40px','!important'],
        transition:'background-color 0.5s ease',
        '&:hover':{
            backgroundColor:'rgba(3,3,3,0.8)',
        }
    }
})



function AppLayout(props){
    const { classes } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 1000,
    });

    return (
        <div className={classes.root}>
            <div className={classes.backdrop} />
            <Grid container className={classes.container}>
                <Grid item className={classes.aside} md={4} sm={12} component="aside">
                    <Sidebar />
                </Grid>
                <Grid item lg={7} md={8} sm={12} component="main">
                    <div className={classes.main}>
                        <Header />
                        <Skills />
                        <Works />
                        <About />
                        <Contact />
                        <Copyright />
                        <ScrollTo sectionId="header">
                            <Zoom in={trigger}>
                                <div className={classes.scrollTop}>
                                    <Fab className={classes.fab} variant="extended" color="secondary" size="small" aria-label="scroll back to top">
                                        <KeyboardArrowUpIcon />
                                    </Fab>
                                </div>
                            </Zoom> 
                        </ScrollTo>
                    </div>
                </Grid>
            </Grid>
        </div>    
    )
}

AppLayout.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppLayout);