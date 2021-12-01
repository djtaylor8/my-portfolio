import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Avatar } from '@mui/material';
import Image from '../../static/images/IMG_6865.png';

const useStyles = makeStyles((theme) => ({
  sizeAvatar: {
      height: theme.spacing(50),
      width: theme.spacing(50),
    },
}));

const About = (props) => {
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    const classes = useStyles();
    const { about } = props
    const mode = localStorage.getItem('darkMode')

    return (
        <div>
         <Grid container spacing={6} direction={largeScreen ? 'row' : 'column'} style={{maxWidth: 1100, display: 'flex', margin: '0 auto', marginTop: '2px', marginLeft: '2px', marginBottom: '2rem', alignItems: 'center', justifyContent: 'space-around' }}>
            <Grid item xs={8} style={{ marginBottom: '1rem'}} >
            <Typography variant='h4' align='center'>About Me</Typography>
            <Divider style={{ marginBottom: '1rem', background: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0,0,0,0.12)' }}/>
            <Typography style={{ marginBottom: '1rem' }}>{about.bio}</Typography>
            <Typography style={{ marginBottom: '1rem' }}>{about.dev}</Typography>
            <Typography>{about.end}</Typography>
            </Grid>
            <Grid item xs={largeScreen ? 2 : 8} >
            <Avatar src={Image} variant='circle' className={classes.sizeAvatar} />
            </Grid>
        </Grid>
        </div>
    );
};

export default About;