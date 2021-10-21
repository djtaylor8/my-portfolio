import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Project from './Project';



const ProjectIndex = (props) => {

    const { projects } = props

    const history = useHistory();


    const handleProjectClick = (projectId) => {
        history.push(`/projects/${projectId}`)
    }

    return (
        <div>
            <Grid container spacing={2} direction='row' style={{ display: 'flex', maxWidth: 1100, margin: '0 auto', marginBottom: '5rem', alignItems: 'center', justifyContent: 'center' }}>
                {projects.map((project) => (
                <Grid key={project.id} onClick={() => handleProjectClick(project.id)} style={{ marginTop: '2rem' }}>
                    <Project project={project} />
                </Grid>
                ))}
            </Grid>
        </div>
    );
};

export default ProjectIndex;


