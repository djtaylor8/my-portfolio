import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel'
import { Grid, Typography, Divider, Button } from '@material-ui/core'
import { Avatar } from '@mui/material';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Image from '../../static/images/IMG_6865.png';
import { Document, Page, pdfjs } from "react-pdf";
import Resume from '../../static/data/DJ Taylor Resume.pdf'
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const About = (props) => {
    const { about, skills } = props
    const mode = localStorage.getItem('darkMode')

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
  
    function onDocumentLoadSuccess({ numPages }) {
      setNumPages(numPages);
    }


    const handleResume =() => {
        window.open('https://drive.google.com/file/d/1Ezf6Ic7cBaHiaUfryU_E1ht4xYJ6Grqd/view?usp=sharing')
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
            <Link activeClass="active" to="resume" spy={true} smooth={true}  duration={500}>
                <Button style={{ display: 'flex', margin: '0 auto', color: mode === 'dark' ? '#fff' : '#000' }} variant='text'>View Resume</Button>
             </Link>
          </Grid>
        </Grid>
        <Grid item xs={6} style={{ display: 'flex', margin: '0 auto', marginBottom: '2rem', alignItems: 'center', justifyContent: 'center' }}>
        <Element name='resume'>
            <Document file={Resume} 
            onLoadSuccess={onDocumentLoadSuccess}
            style={{ cursor: 'pointer' }}
            >
            <Page
            pageNumber={pageNumber} 
            pageWidth={600} 
            renderAnnotationLayer={false}
            
            />
            <OpenInNewIcon onClick={handleResume} style={{ display: 'flex', margin: '0 auto', marginTop: '1rem', cursor: 'pointer' }}/>
            </Document>
            <Button style={{ display: 'flex', margin: '0 auto', marginTop: '1rem', color: mode === 'dark' ? '#fff' : '#000'}} onClick={() => scroll.scrollToTop()} variant='text'>Back to Top</Button>
        </Element>
        </Grid>
        </Grid>
        </div>
    );
};

export default About;