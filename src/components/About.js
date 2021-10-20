import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Grid, Typography, Box, Divider } from '@material-ui/core'
import { Avatar } from '@mui/material';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Image from '../static/images/IMG_6865.png';
import Skills from '../Skills';


const About = (props) => {
    const { about, skills } = props

    return (
        <div>
         <Grid container spacing={6} direction='row' style={{display: 'flex', maxWidth: 1200, margin: '0 auto', marginLeft: '2rem', marginTop: '5rem', marginBottom: '10rem' }}>
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
        <Grid item sm={6} style={{ marginBottom: '2rem', alignItems: 'center', justifyContent: 'center' }}>
            <Typography variant='h4' align='center'>Notable Skills</Typography>
            <Divider />
            <Skills skills={skills} />
        </Grid>
        </Grid>
        </div>
    );
};

export default About;