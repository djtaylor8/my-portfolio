import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Grid, Typography } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Image from '../static/images/IMG_9375.png';
import { Avatar } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';

const theme = createTheme({
    breakpoints: {
      values: {
       xs: 0,
       sm: 450,
       md: 600,
       lg: 900,
       xl: 1200,
       tablet:1024
     }
   }
   }); 

const useStyles = makeStyles((theme) => ({
    sizeAvatar: {
        height: theme.spacing(45),
        width: theme.spacing(45)
    },
}));

const Welcome = () => {
    const classes = useStyles();
    const largeScreen = useMediaQuery(theme => theme.breakpoints.up('md'));
    const mobile = useMediaQuery(theme => theme.breakpoints.down('xs'));

    return (
        <ThemeProvider theme={theme}>
            <Grid container spacing={2} direction={largeScreen ? 'row' : 'column'} style={{display: 'flex', maxWidth: mobile ? '1224px' : 1200, margin: '0 auto', justifyContent: 'center', alignItems: 'center', marginTop: '3rem', marginBottom: '5rem' }}>
            <Grid item xs={largeScreen ? 6 : 12} style={{ display: 'flex', alignItems:'center', justifyContent: 'center', margin: '0 auto' }}>
            <div>
            <Typography variant={mobile ? 'h2' : 'h1'} align='center'>DJ Taylor</Typography>
            <Typography variant='subtitle1' align='center'>Full Stack Developer | Musician</Typography>
            </div>
            </Grid>
            <Grid item xs={largeScreen ? 6 : 12} style={{ marginTop: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', margin:'0 auto' }}>
            <Avatar src={Image} className={classes.sizeAvatar} />    
            </Grid>
            </Grid>
        </ThemeProvider>
    );
};

export default Welcome;

