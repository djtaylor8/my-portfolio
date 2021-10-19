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
            <Grid container spacing={1} direction='row' style={{display: 'flex', maxWidth: 1200, margin: '0 auto', justifyContent: 'center', alignItems: 'center', marginTop: '5rem', marginBottom: '10rem' }}>
            <Grid item sm={6}>
            <Typography variant='h1'>DJ Taylor</Typography>
            <Typography variant='subtitle1'>Full Stack Developer | Musician</Typography>
            </Grid>
            <Grid item sm={6}>
            <Avatar src={Image} className={classes.sizeAvatar} />    
            </Grid>
            </Grid>
        </div>
    );
};

export default Welcome;

