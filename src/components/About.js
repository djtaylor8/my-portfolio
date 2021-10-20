import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Grid, Typography } from '@material-ui/core'
import { Avatar } from '@mui/material';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Image from '../static/images/IMG_6865.png';

const About = (props) => {
    const { about } = props
    const mode = localStorage.getItem('darkMode')

    return (
        <div>
         <Grid container spacing={1} direction='row' style={{display: 'flex', maxWidth: 1200, margin: '0 auto', marginLeft: '2rem', alignItems: 'center', marginTop: '5rem', marginBottom: '10rem' }}>
            <Grid item sm={6} >
            <Carousel
             autoPlay={false}
             NextIcon={<NavigateNextIcon />}
             PrevIcon={<NavigateBeforeIcon />}
            >
            <Typography>{about.bio}</Typography>
            <Typography>{about.hobbies}</Typography>
            <Typography>{about.dev}</Typography>
            <div>
            <Typography>{about.end}</Typography>
            <Avatar src={Image} variant='square' style={{ minHeight: '15rem', width: '100%', minWidth: '15rem', marginTop: '2rem' }} />
            </div>
          </Carousel>
        </Grid>
        </Grid>
        </div>
    );
};

export default About;