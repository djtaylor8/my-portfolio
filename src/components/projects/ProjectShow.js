import React from 'react';
import { Grid } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import ProjectInfo from './ProjectInfo';
import ProjectImage from './ProjectImage';


const ProjectShow = (props) => {

    const { projectId } = useParams();
    const { projects } = props

    const project = projects.find(project => project.id == projectId)

    return (
        <div>
            <Grid container spacing={1} style={{ maxWidth: 1100, margin: '0 auto', marginTop: '2rem', alignItems: 'center', justifyContent: 'center' }}>
                <Grid item sm={6}>
                    <ProjectImage title={project.title} />
                </Grid>
                <Grid item sm={6}>
                    <ProjectInfo project={project} />
                </Grid>
            </Grid>
        </div>
    );
};

export default ProjectShow;