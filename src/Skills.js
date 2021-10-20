import React from "react";
import { Grid, Typography } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';

const Skills = (props) => {

  const { skills } = props;

  return <Grid container direction='row' style={{ display: 'flex', marginTop: '1rem' }}>
            {skills.map((skill) => (
             <Grid item sm={4}>  
             <Typography align='center'><CodeIcon style={{ fontSize: 'small'}}/> {skill}</Typography>
            </Grid>
        ))}
        </Grid>;
};

export default Skills;