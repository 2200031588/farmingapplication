import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function Appbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // useNavigate hook for navigation

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (path) => {
    navigate(path); // Navigate to the specific route
    handleClose();
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'darkgreen' }}> {/* Dark Teal Color */}
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ marginRight: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
          <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
          <Button color="inherit" onClick={() => navigate('/about')}>About</Button>

          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textAlign: 'center' }}
          >
             {/* Add title if needed */}
          </Typography>

          <Button
            color="inherit"
            onClick={handleClick}>
            Login
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              '& .MuiPaper-root': {
                backgroundColor: '#e0f2f1', /* Light teal for menu */
                color: '#004d40', /* Dark teal for text */
              },
            }}
          >
            <MenuItem onClick={() => handleMenuItemClick('/farmerlogin')}>Farmer</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/customerlogin')}>Buyer</MenuItem>
            <MenuItem onClick={() => handleMenuItemClick('/adminlogin')}>Admin</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
