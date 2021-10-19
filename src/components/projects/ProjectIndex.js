import React from 'react';
import { Grid } from '@material-ui/core'
import { Avatar, Typography } from '@mui/material';
import { projects } from '../../static/data/projects.js';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    image: {
        transition: 'all .3s ease-in-out',
        '&:hover': {
            cursor: 'pointer',
            'box-shadow': 'rgba(0, 0, 0, 0.22) 0px 26px 40px',
            transform: 'translate3d(0px, -3px, 0px)',
        }
    },
}));



const ProjectIndex = () => {

    const classes = useStyles();

    return (
        <div>
            <Grid container spacing={2} direction='row' style={{ display: 'flex', maxWidth: 1100, margin: '0 auto', alignItems: 'center', justifyContent: 'center' }}>
                {projects.map((project) => (
                <Grid item key={project.id} sm={6}>
                 <Avatar variant='square' sx={{height: '100%', width: '100%' }} src={require(`../../static/images/${project.title}.png`).default} className={classes.image} />
                </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProjectIndex;





