import React from 'react';
import { Grid, Typography, Divider, Box } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LanguageIcon from '@material-ui/icons/Language';



const ProductInfo = (props) => {

    const { project } = props;

    const handleGitHub = () => {
        window.open(`${project.github}`)
    }

    const handleYouTube = () => {
        window.open(`${project.demo}`)
    }

    const handleWebsite = () => {
        window.open(`${project.site}`)
    }

    return (
        <Grid container direction='column' style={{ height: '100%' }}>
        <Box style={{ margin: '1rem' }}>
            <div>
            <Typography variant='h4'>{project.title}</Typography>
            <>
            <GitHubIcon style={{cursor: 'pointer', margin: '2px' }} onClick={handleGitHub}/>
            <YouTubeIcon onClick={handleYouTube} style={{cursor: 'pointer', margin: '2px' }}/>
            {project.site !== '' ? <LanguageIcon onClick={handleWebsite} style={{cursor: 'pointer', margin: '2px'}}/> : null }
            </>
            </div>
            <Divider/>
            <Typography variant='subtitle1'>{project.description}</Typography>
        </Box>
        </Grid>
    );
};

export default ProductInfo;