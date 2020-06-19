import React from 'react';
import PropTypes from 'prop-types';
import LivePreview from '../components/live-preview';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '../components/box';
import MuiExpansionPanel from '@material-ui/core/ExpansionPanel';
import MuiExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import MuiExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import { withStyles } from '@material-ui/core/styles';

const ExpansionPanel = withStyles({
    root: {
      backgroundColor:'transparent',
      boxShadow: 'none',
      '&:not(:last-child)': {
        borderBottom: 0,
      },
      '&:before': {
        display: 'none',
      },
      '&$expanded': {
        margin: 'auto',
      },
    },
    expanded: {},
  })(MuiExpansionPanel);
  
  const ExpansionPanelSummary = withStyles(theme => ({
    root: {
      backgroundColor:theme.palette.secondary.main,
      borderBottom: 'none',
      minHeight: 40,
      margin:theme.spacing(1,0),
      borderRadius: '3px',
      fontSize: '14px',
      transition:'all 0.5s ease-in-out',
      '&$expanded': {
        minHeight: 40,
        backgroundColor:theme.palette.primary.main,
      },
    },
    content: {
      margin: '0',
      '&$expanded': {
        margin: '0',
      },
    },
    expanded: {},
  }))(MuiExpansionPanelSummary);

  const ExpansionPanelDetails = withStyles((theme) => ({
    root: {
      backgroundColor: 'transparent',
      padding: theme.spacing(2 ,0),
      transition:'all 0.5s ease-in-out',
    },
  }))(MuiExpansionPanelDetails);

const styles = (theme) => ({
    root:{
        marginBottom:theme.spacing(10)
    },
    item:{
      paddingTop: ['8px','!important'],
      paddingBottom: ['8px','!important']
    },
    image:{
      width:'100%',
      borderRadius: '3px',
      transition:'all 0.2s ease-in-out',
      '&:hover':{        
        filter: 'brightness(0.75)', 
      }
    },
    projectThumbnail:{
      position:'relative',
      '& .live-preview':{
        position: 'absolute',
        top: 'calc(50% - 15px)',
        width: '100%',
        textAlign: 'center',
        transform:'scale(0)',
        transition: 'transform .5s',
        zIndex:2
      },
      '& .backdrop':{
        position:'absolute',
        width:'100%',
        height:'100%',
        transition: 'background-color .5s',
        backgroundColor: 'transparent',
        zIndex:1
      },
      '&:hover':{
        '& .live-preview':{
          transform:'scale(1)'
        },
        '& .backdrop':{
          backgroundColor: 'rgba(0,0,0,0.85)',
        }
      },
    },
    link:{
      transition:'color 0.2s ease-in-out',
      fontWeight: '600',
      fontSize:['11px','!important'],
      '&:hover':{
        color:'#FFF'
      }
    }
})


function Works(props){
    const { classes } = props;
    const screens = [
      "lg-tablet.jpg",
      "lg-xs.jpg",
      "lg-xs-tablet.jpg",
      "lg-xs-2.jpg"
    ]
    const books = [
      "the-road-to-react.png",
      "reactjs-notes-for-professional.png",
      "web-development-with-mongoDB-and-nodeJS.jpg",
      "ng-book.jpg",
      "rangle.io.png"
    ]
    const projects = [
      {
        title:'E4SC',
        img:'e4sc.png',
        url:'http://www.e4sc.org/'
      },
      {
        title:'PROPERTIESAPP',
        img:'properties-app.png',
        url:'https://abdallahbedir.github.io/propreties-app/'
      },
      {
        title:'MEAN-STACK',
        img:'mean.png',
        url:'https://lit-wave-43120.herokuapp.com/'
      },
      {
        title:'KHALIL GROUP',
        img:'khalil-group.png',
        url:'http://submariner-molly-81024.bitballoon.com/'
      },
      {
        title:'AKLNEY',
        img:'aklney.PNG',
        url:'https://cdn.rawgit.com/AbdallahBedir/Aklney/master/index.html'
      },
      {
        title:'TRIGGER',
        img:'it.PNG',
        url:'https://rawgit.com/AbdallahBedir/Trigger/master/index.html'
      },
      {
        title:'SCREEN',
        img:'screen.PNG',
        url:'http://screen.bitballoon.com/'
      },
      {
        title:'FASHION STORE',
        img:'fashion-store.PNG',
        url:'http://captain-eagle-87612.bitballoon.com/'
      },
      {
        title:'SPACE INC.',
        img:'space-inc.PNG',
        url:'http://advocate-karina-48643.bitballoon.com/'
      },
      {
        title:'TASMEN',
        img:'tasmen.PNG',
        url:'http://tasmen.bitballoon.com/'
      },
      {
        title:'TALAT NAGRO',
        img:'nagro.PNG',
        url:'http://developer-plating-58674.bitballoon.com/'
      },
      {
        title:'NEW USER',
        img:'new-user.PNG',
        url:'https://newuser.netlify.app/'
      },
      {
        title:'VEGAS STUDIO',
        img:'vegas.PNG',
        url:'http://toll-collecter-zebra-68827.bitballoon.com/'
      },
      {
        title:'CLASSIC',
        img:'classic.PNG',
        url:'http://myclassic.bitballoon.com/'
      }
    ]
    return(
        <section id="works" className={classes.root}>
            <Box>
                <Typography className="box-title" variant="h5">
                    Works
                </Typography>
                <div className="panels">
                    <ExpansionPanel square defaultExpanded TransitionProps={{timeout: 1000}}>
                      <ExpansionPanelSummary aria-controls="panel1d-content">
                        <Typography>Web Design & SPAs</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid container justify="space-between" className={classes.container} spacing={4}>
                          {projects.map(project => (
                            <Grid item className={classes.item} sm={6} xs={12} key={project.title}>
                              <div className="project">
                                <div className={classes.projectThumbnail}>
                                  <div className="backdrop" />
                                  <img className={classes.image} src={'images/'+project.img} alt={project.title} height="145"/>
                                  <LivePreview url={project.url} />
                                </div>
                                <Link className={classes.link} href={project.url} target="_blank" variant="body2" underline="none">
                                  {project.title}
                                </Link>
                              </div>                              
                            </Grid>
                          ))}
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel square TransitionProps={{timeout: 1000}}>
                      <ExpansionPanelSummary aria-controls="panel2d-content">
                        <Typography>Responsive</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                        <Grid container justify="space-between" className={classes.container} spacing={4}>
                            {screens.map(imgUrl => (
                              <Grid item className={classes.item} sm={6} xs={6} key={imgUrl}>
                                <div className="screen">
                                  <img className={classes.image} src={'images/'+imgUrl} alt={imgUrl} height="202"/>
                                </div>                              
                              </Grid>
                            ))}
                        </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                    <ExpansionPanel square TransitionProps={{timeout: 1000}}>
                      <ExpansionPanelSummary aria-controls="panel3d-content">
                        <Typography>Readed Books</Typography>
                      </ExpansionPanelSummary>
                      <ExpansionPanelDetails>
                          <Grid container className={classes.container} spacing={4}>
                            {books.map(bookUrl => (
                              <Grid item className={classes.item} sm={4} xs={6} key={bookUrl}>
                                <div className="screen">
                                  <img className={classes.image} src={'images/'+bookUrl} alt={bookUrl} height="202"/>
                                </div>                              
                              </Grid>
                            ))}
                          </Grid>
                      </ExpansionPanelDetails>
                    </ExpansionPanel>
                  </div>
            </Box>
        </section>
    )
}

Works.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Works);