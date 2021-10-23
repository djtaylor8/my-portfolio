import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Image from '../static/images/IMG_9375.png';
import { Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sizeAvatar: {
        height: theme.spacing(50),
        width: theme.spacing(50),
        display: 'flex',
        margin: '0 auto'
    },
}));

const Welcome = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1} direction='row' style={{display: 'flex', margin: '0 auto', maxWidth: 1000, justifyContent: 'center', alignItems: 'center', marginTop: '3rem', marginBottom: '5rem' }}>
            <Grid item xs={6} style={{ display: 'flex', margin: '0 auto', flexDirection: 'column' }}>
            <div style={{ margin: '0 auto' }}>
            <Typography variant='h1'>DJ Taylor</Typography>
            <Typography variant='subtitle1'>Full Stack Developer | Musician</Typography>
            </div>
            </Grid>
            <Grid item xs={6}>
            <Avatar src={Image} className={classes.sizeAvatar} />    
            </Grid>
            </Grid>
        </div>
    );
};

export default Welcome;

