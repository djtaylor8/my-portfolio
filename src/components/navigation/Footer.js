import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import EmailIcon from '@material-ui/icons/Email';
import Tooltip from '@mui/material/Tooltip';



export default function Footer() {

    const handleLinkedIn = () => {
        window.open('https://www.linkedin.com/in/dj-taylor-3b91ba3a/')
    }

    const handleGitHub = () => {
        window.open('https://github.com/djtaylor8')
    }

    const handleBlog = () => {
        window.open('https://dj-taylor.medium.com/')
    }

    const handleEmail =() => {
        window.open('mailto:dtaylor88@gmail.com')
    }

  return (
    <Box sx={{ width: 500 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}>

      <BottomNavigation
      >
        <Tooltip title='LinkedIn' arrow>
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} onClick={handleLinkedIn} />
        </Tooltip>
        <Tooltip title='GitHub' arrow>
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} onClick={handleGitHub} />
        </Tooltip>
        <Tooltip title='Blog' arrow>
        <BottomNavigationAction label="Blog" icon={<LibraryBooksIcon onClick={handleBlog} />} />
        </Tooltip>
        <Tooltip title='Email' arrow>
        <BottomNavigationAction label="Email" icon={<EmailIcon />} onClick={handleEmail} />
        </Tooltip>
      </BottomNavigation>
      </Paper>
    </Box>
  );
}


