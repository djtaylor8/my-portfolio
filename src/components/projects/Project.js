import React, { useRef } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles(() => ({
  container: {
    position: 'relative',
    display: 'flex',
    height: 400,
    width: '100%',
  },
    overlay: {
      position: 'absolute',
      top: '0',
      left: '0',
      height: '100%',
      width: '100%',
      color: '#fff',
      backgroundColor: '#121212',
      opacity: '0.9',
      cursor: "pointer",
   }
  }));

const Project = (props) => {

    const classes = useStyles();
    const layer = useRef()

    const { project } = props

    const handleMouseEnter = () => {
      layer.current.style.display = 'block'
  }

    const handleMouseLeave = () => {
      layer.current.style.display = 'none'
  }

    return( 
      <div className={classes.container}>
            <Avatar 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave} 
            variant="square" 
            style={{ height: '100%', width: '100%' }}
            src={require(`../../static/images/${project.title}.png`).default} className={classes.image}            
            />
            <div 
            className={classes.overlay} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            style={{display: "none"}} 
            ref = {layer}
           >
             <Grid container style={{ display: 'flex', margin: '0 auto' }}>
               <Grid style={{ display: 'flex', margin: '0 auto', marginTop: '10rem' }}>
                  <Typography variant="h5">{project.title}</Typography>
               </Grid>
             </Grid>
            </div>
      </div>
    )
}

export default Project
