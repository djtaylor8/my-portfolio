import React from 'react';
import { Grid } from '@material-ui/core'
import { Avatar } from '@mui/material';
import { projects } from '../../static/data/projects.js'

const ProjectIndex = () => {

    return (
        <div>
            <Grid container spacing={2} direction='row' style={{ display: 'flex', maxWidth: 1100, margin: '0 auto', alignItems: 'center', justifyContent: 'center' }}>
                {projects.map((project) => (
                <Grid item key={project.id} sm={6} >
                  <Avatar variant='square' sx={{height: '100%', width: '100%', border: '0.1px solid lightgray' }} src={require(`../../static/images/${project.title}.png`).default}/>
                </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProjectIndex;





