import React from 'react';

const ProjectImage = ({ title }) => {
    return (
        <div>
            <img src={require(`../../static/images/${title}.png`).default} width='100%' alt='project'/>
        </div>
    );
};

export default ProjectImage;