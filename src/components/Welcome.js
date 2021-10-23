import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Image from '../static/images/IMG_9375.png';
import { Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    sizeAvatar: {
        height: theme.spacing(50),
        width: theme.spacing(50),
    },
}));

const Welcome = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={1} direction='row' style={{display: 'flex', margin: '0 auto', maxWidth: 800, justifyContent: 'center', alignItems: 'center', marginTop: '5rem', marginBottom: '5rem' }}>
            <Grid item xs={6}>
            <Typography variant='h2'>DJ Taylor</Typography>
            <Typography variant='subtitle1'>Full Stack Developer | Musician</Typography>
            </Grid>
            <Grid item xs={6} style={{ display: 'flex', margin: '0 auto', alignItems:'center', justifyContent: 'center' }}>
            <Avatar src={Image} className={classes.sizeAvatar} />    
            </Grid>
            </Grid>
        </div>
    );
};

export default Welcome;

