import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import BookIcon from '@material-ui/icons/Book';
import EmailIcon from '@material-ui/icons/Email';


export default function Footer() {

  return (
    <Box sx={{ width: 500 }}>
      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}>

      <BottomNavigation
      >
        <BottomNavigationAction label="LinkedIn" icon={<LinkedInIcon />} />
        <BottomNavigationAction label="GitHub" icon={<GitHubIcon />} />
        <BottomNavigationAction label="Blog" icon={<BookIcon />} />
        <BottomNavigationAction label="Message" icon={<EmailIcon />} />
      </BottomNavigation>
      </Paper>
    </Box>
  );
}