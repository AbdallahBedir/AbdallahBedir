import React from 'react';
import PropTypes from 'prop-types';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import Box from '../components/box';
import Button from '@material-ui/core/Button';
import Line from '../components/line';
import { withStyles } from '@material-ui/core/styles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import ScrollTo from '../components/scroll-to';
import DownloadIcon from '@material-ui/icons/GetApp';
import PreviewIcon from '@material-ui/icons/Visibility';

const styles = (theme) => ({
    root:{
        fontFamily:[theme.typography.fontFamilySecondary,'!important']
    },
    heading:{
        margin:theme.spacing(2,0),
        color: '#DDD',
        fontSize: '19px'
    },
    listItem:{
        paddingTop:0,
        paddingBottom:0
    },
    listItemText:{
        marginBottom:[0,'!important'],
    },
    listIcon:{
        color:'#999999',
        minWidth: '25px',
        '& svg':{
            fontSize: '0.8rem'
        }
    },
    button:{
        fontWeight:600,
        textTransform: 'capitalize',
        marginRight:theme.spacing(1),
        minWidth:'50px'
    },
    resumeWrapper:{
        position:'relative',
        width:'180px',
        overflow:'hidden',
        '& .backdrop':{
            position:'absolute',
            width:'100%',
            height:'100%',
            bottom:'calc(-100% + 36px)',
            transition: 'bottom .3s ease-in-out',
            backgroundColor:'rgba(0,0,0,0.7)',
            zIndex:1
        },
        '&:hover':{
            '& .backdrop':{
                bottom: 0,
            },
        },
    },
    resumeImage:{
        width:'100%',
        borderRadius: '3px'
    },
    resumeActions:{
        position:'absolute',
        zIndex:2,
        top:'50%',
        transform: 'translateY(-50%)',
        width: '100%',
        textAlign: 'center',
        transition:'all 0.2s ease-in-out',
    },
    resumeFooter:{
        position:'absolute',
        bottom:'0px',
        width: '100%',
        height: '36px',
        padding: '5px 10px',
        zIndex:2,
        display:'flex',
        '& img':{
            marginRight:'6px'
        }
    },
    resumeStartIcon:{
        marginRight:0
    }
})


function About(props){
    const { classes } = props;
    const employment = [
            (<React.Fragment>
                Front end Developer at <Link href="https://b5digital.dk/" target="_blank" color="textPrimary">B5 digital.</Link>  2020.
            </React.Fragment>),
            (<React.Fragment>
                 Angular Developer at <Link href="https://eleganttech.dk/" target="_blank" color="textPrimary">Elegant Tech Soultions.</Link>  . 2018.
             </React.Fragment>),
            (<React.Fragment>
                Front End Developer at <Link href="https://thed.io/" target="_blank" color="textPrimary">The D.</Link>  . 2017.
            </React.Fragment>),
            (<React.Fragment>
                Web designer at <Link href="http://shrkety.com/" target="_blank" color="textPrimary">shrkety for web solutions.</Link>  2016.
            </React.Fragment>)    
    ];
    const education = [
        "Al-Jazeerah Secondary School at Al-Riyadh – Kingdom of Saudi Arabia (KSA) 2010.",
        "Faculty of Engineering Tanta University – Computers and Control Automation Department 2013.",
    ]
    return(
        <section id="about" className={classes.root}>
            <Box>
                <Typography className="box-title" variant="h5">
                    ABOUT
                </Typography>
                <Line />
                <Typography className={classes.heading} variant="h5">
                    Biography
                </Typography>
                <Typography variant="body2">
                    Abdallah ahmed bedir is a front end developer in Egypt.<br />
                    Experienced in all stages of single page apps & server side rendering front end development cycle for web applications.<br />
                    Well-versed in Javascript programming language including its frameworks like Angular,React and VueJs along with building cross platform mobile apps in Ionic.<br />
                    I have been worked on more than 35 projects but <ScrollTo sectionId="works"><Link color="textPrimary">those</Link></ScrollTo> are only the public pages that I could add in my portfolio.<br />
                </Typography>
                <Typography className={classes.heading} variant="h5">
                    Education
                </Typography>
                <List dense={true} disablePadding={true}>
                    {education.map((e,index) => (
                        <ListItem key={index} className={classes.listItem} disableGutters>
                            <ListItemIcon className={classes.listIcon} fontSize="small">
                                <FiberManualRecordIcon />
                            </ListItemIcon>
                            <ListItemText primary={e} classes={{ primary: classes.listItemText }}/>
                        </ListItem>
                    ))}
                </List>
                <Typography className={classes.heading} variant="h5">
                    Employment
                </Typography>
                <List dense={true} disablePadding={true}>
                    {employment.map((e,index) => (
                        <ListItem key={index} className={classes.listItem} disableGutters>
                            <ListItemIcon className={classes.listIcon} fontSize="small">
                                <FiberManualRecordIcon />
                            </ListItemIcon>
                            <ListItemText primary={e} classes={{ primary: classes.listItemText }}>
                            </ListItemText>
                        </ListItem>
                    ))}
                </List>
                <Typography className={classes.heading} variant="h5">
                    Resume
                </Typography>
                <div className="resume">
                    <div className={classes.resumeWrapper}>
                        <div className="backdrop">
                            <div className={classes.resumeActions}>
                                <Button type="submit" component="a" href='/resume.pdf' download 
                                        className={classes.button} variant="contained" color="secondary" 
                                        startIcon={<DownloadIcon />} title="Download"
                                        classes={{startIcon:classes.resumeStartIcon}}>
                                </Button>
                                <Button type="submit" component="a" href='/resume.pdf' 
                                        target="_blank" className={classes.button} variant="contained" 
                                        color="secondary" startIcon={<PreviewIcon />} title="Preview"
                                        classes={{startIcon:classes.resumeStartIcon}}></Button>
                            </div>
                        </div>
                        <img className={classes.resumeImage} src="images/resume.png" alt="resume"/>
                        <div className={classes.resumeFooter}>
                            <img src="images/pdf.png" alt="pdf-icon" height="20"/>
                            <label>resume.pdf</label>
                        </div>
                    </div>
                </div>
                {/* <img src="images/resume.png" alt="resume" width="160"/>
                <Button type="submit" component="a" href='/invoice_9.pdf' download className={classes.button} variant="contained"
                 color="secondary" startIcon={<DownloadIcon />}>Download pdf</Button>
                <Button type="submit" component="a" href='/invoice_9.pdf' target="_blank" className={classes.button} variant="outlined" startIcon={<PreviewIcon />}>Preview</Button> */}
            </Box>
        </section>
    )
}

About.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);