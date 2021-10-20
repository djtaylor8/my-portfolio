import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid, Typography, Divider, IconButton } from '@material-ui/core'
import { Avatar } from '@mui/material';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Image from '../static/images/IMG_6865.png';
import Skills from '../Skills';
import WorkIcon from '@material-ui/icons/Work';
import Tooltip from '@mui/material/Tooltip';



const About = (props) => {
    const { about, skills } = props
    const mode = localStorage.getItem('darkMode')


    const handleResume =() => {
        window.open('https://docs.google.com/document/d/1Wp1g32wksyM5jywTAKCzVLnTSqIEhSno2dCns9oQwRE/edit?usp=sharing')
    }

    return (
        <div>
         <Grid container spacing={4} direction='row' style={{display: 'flex', maxWidth: '100%', margin: '0 auto', marginTop: '2px', marginLeft: '2px', marginBottom: '2rem' }}>
            <Grid item sm={6} style={{ maxHeight: 800, overflow: 'auto', marginBottom: '2rem' }} >
            <Typography variant='h4' align='center'>About Me</Typography>
            <Divider style={{ marginBottom: '1rem', background: mode === 'dark' ? 'rgba(255, 255, 255, 0.12)' : 'rgba(0,0,0,0.12)' }}/>
            <Carousel
             autoPlay={false}
             NextIcon={<NavigateNextIcon />}
             PrevIcon={<NavigateBeforeIcon />}
            >
            <Typography>{about.bio}</Typography>
            <Typography>{about.dev}</Typography>
            <div>
            <Typography>{about.end}</Typography>
            <Avatar src={Image} variant='square' style={{ margin: 'auto', height: '50%', width: '50%', marginTop: '1rem' }} />
            </div>
          </Carousel>
        </Grid>
        <Grid item sm={6} style={{ marginBottom: '2rem' }}>
            <Typography variant='h4' align='center'>Notable Skills</Typography>
            <Divider style={{ background: mode === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)' }}/>
            <Skills skills={skills} />
            <Tooltip title='View Resume' arrow>
            <IconButton onClick={handleResume} style={{ display: 'flex', margin: '0 auto', marginTop: '4rem', color: mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.54)' }} >
             <WorkIcon fontSize='large' />
            </IconButton>
            </Tooltip>
        </Grid>
        </Grid>
        </div>
    );
};

export default About;