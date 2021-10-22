import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid, Typography, Divider, IconButton, Button } from '@material-ui/core'
import { Avatar } from '@mui/material';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Image from '../../static/images/IMG_6865.png';
import Skills from './Skills';
import LaunchIcon from '@material-ui/icons/Launch';import Tooltip from '@mui/material/Tooltip';
import { Link, Element, animateScroll as scroll } from 'react-scroll'

const About = (props) => {
    const { about, skills } = props
    const mode = localStorage.getItem('darkMode')


    const handleResume =() => {
        window.open('https://docs.google.com/document/d/1Wp1g32wksyM5jywTAKCzVLnTSqIEhSno2dCns9oQwRE/edit?usp=sharing')
    }

    return (
        <div>
         <Grid container spacing={4} direction='column' style={{display: 'flex', margin: '0 auto', marginTop: '2px', marginLeft: '2px', marginBottom: '2rem', alignItems: 'center', justifyContent: 'center' }}>
            <Grid item sm={6} style={{ marginBottom: '15rem' }} >
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
          <Grid item style={{ margin: '1rem' }}>
            <Link activeClass="active" to="skills" spy={true} smooth={true}  duration={500}>
                <Button style={{ display: 'flex', margin: '0 auto', color: mode === 'dark' ? '#fff' : '#000' }} variant='text'>View Skills and Link to Resume</Button>
             </Link>
          </Grid>
        </Grid>
        <Grid item sm={6} style={{ marginBottom: '2rem' }}>
        <Element name='skills'>
            <Typography variant='h4' align='center'>Notable Skills & Resume</Typography>
            <Divider style={{ background: mode === 'dark' ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.12)' }}/>
            <Skills skills={skills} />
            <IconButton onClick={handleResume} style={{ display: 'flex', margin: '0 auto', marginTop: '3rem', marginBottom: '1rem', color: mode === 'dark' ? '#fff' : 'rgba(0,0,0,0.54)' }} >
            <Typography variant='h5' style={{ marginRight: '0.5rem' }}>View Resume</Typography><LaunchIcon />
            </IconButton>
            <Button style={{ display: 'flex', margin: '0 auto', color: mode === 'dark' ? '#fff' : '#000'}} onClick={() => scroll.scrollToTop()} variant='text'>Back to Top</Button>
        </Element>
        </Grid>
        </Grid>
        </div>
    );
};

export default About;