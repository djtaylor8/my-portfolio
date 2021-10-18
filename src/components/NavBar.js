import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import { Switch, Typography } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

export default function NavBar({ darkMode, setDarkMode }) {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleMenu = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = (e) => {
        setAnchorEl(null);
    };

  return (
      <AppBar position="static" elevation={0} style={{background: 'none', display: 'flex' }}>
        <Toolbar>
        <div style={{ flexGrow: '1' }}>
          <IconButton
            size="large"
            aria-label="menu"
            color='primary'
            onClick={handleMenu}
          >
        <MenuIcon />
          </IconButton>
          <Menu
          anchorEl={anchorEl}
          PaperProps={{
              style: {
                  width: 100,
              },
          }}
          anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          >
          <div style={{ textAlign: 'center' }}>
          <MenuItem onClick={() => console.log('hi')}>About</MenuItem>
          </div>
          <div style={{ textAlign: 'center' }}>
          <MenuItem onClick={() => console.log('hello')}>Projects</MenuItem>
          </div>
          <div style={{ textAlign: 'center' }}>
          <MenuItem onClick={() => console.log('hello')}>Contact</MenuItem>
          </div>
          </Menu>
          </div>
          <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        </Toolbar>
      </AppBar>
  );
}
