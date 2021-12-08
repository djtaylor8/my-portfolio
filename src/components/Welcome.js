import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Image from '../static/images/IMG_9375.png';
import { Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sizeAvatar: {
        height: theme.spacing(50),
        width: theme.spacing(50)
    },
}));

const Welcome = () => {
    const classes = useStyles();
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    const mobile = useMediaQuery(theme => theme.breakpoints.down('xs'));
    debugger;

    return (
        <div>
            <Grid container spacing={2} direction={largeScreen ? 'row' : 'column'} style={{display: 'flex', maxWidth: mobile ? '1224px' : 1200, margin: '0 auto', justifyContent: 'center', alignItems: 'center', marginTop: '3rem', marginBottom: '5rem' }}>
            <Grid item xs={largeScreen ? 6 : 12} style={{ display: 'flex', alignItems:'center', justifyContent: 'center', margin: '0 auto' }}>
            <div>
            <Typography variant='h1'>DJ Taylor</Typography>
            <Typography variant='subtitle1' align='center'>Full Stack Developer | Musician</Typography>
            </div>
            </Grid>
            <Grid item xs={largeScreen ? 6 : 12} style={{ marginTop: '2rem' }}>
            <Avatar src={Image} className={classes.sizeAvatar} />    
            </Grid>
            </Grid>
        </div>
    );
};

export default Welcome;

