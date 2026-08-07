import React, { useState } from 'react';
import { Drawer, List, ListItem, ListItemText, Box, Paper, Container, Typography, Button } from '@mui/material';
import DashboardIcon from '@mui/icons-material/Dashboard'; // Import the Dashboard icon
import { useNavigate } from 'react-router-dom';
import customerIcon from '../images/customer-1.jpg';
import farmerIcon from '../images/farmer.png';
import productIcon from '../images/product.png';

export default function AdminHome() {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleLogout = () => {
    console.log('Admin logged out');
    navigate('/');
  };

  return (
    <div style={{ display: 'flex' }}>
      {/* Sidebar Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            backgroundColor: 'darkgreen',
            color: 'white',
          },
        }}
      >
        <Box
          sx={{
            padding: '20px',
            textAlign: 'center',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            justifyContent: 'center',
          }}
        >
          <DashboardIcon fontSize="large" /> {/* Add the icon */}
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Admin Dashboard
          </Typography>
        </Box>
        <List>
          <ListItem button onClick={() => navigate('/adminhome')}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => navigate('/viewallfarmers')}>
            <ListItemText primary="Farmers" />
          </ListItem>
          <ListItem button onClick={() => navigate('/viewallcustomers')}>
            <ListItemText primary="Customers" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box sx={{ flexGrow: 1, marginLeft: '240px', padding: '20px' }}>
        <Container>
          <Paper elevation={3} sx={{ padding: '30px', marginBottom: '20px' }}>
            <Typography variant="h4" gutterBottom>
              Welcome!!
            </Typography>
            <Typography variant="body1">
              This is your dashboard. From here, you can manage users, view reports, and perform administrative tasks.
            </Typography>
          </Paper>

          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Paper elevation={3} sx={{ padding: '20px', flex: 1, textAlign: 'center' }}>
              <img
                src={customerIcon}
                alt="User Management Icon"
                style={{ width: '80px', height: '80px', marginBottom: '10px' }}
              />
              <Typography variant="h6" gutterBottom>
                Customers
              </Typography>
              <Typography variant="body2">View and manage user accounts.</Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'darkgreen',
                  color: 'white',
                  marginTop: '10px',
                  '&:hover': {
                    backgroundColor: '#006400',
                  },
                }}
                onClick={() => navigate('/usermanagement')}
              >
                User Management
              </Button>
            </Paper>

            <Paper elevation={3} sx={{ padding: '20px', flex: 1, textAlign: 'center' }}>
              <img
                src={farmerIcon}
                alt="Farmer Management Icon"
                style={{ width: '80px', height: '80px', marginBottom: '10px' }}
              />
              <Typography variant="h6" gutterBottom>
                Farmers
              </Typography>
              <Typography variant="body2">View and manage farmer accounts.</Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'darkgreen',
                  color: 'white',
                  marginTop: '10px',
                  '&:hover': {
                    backgroundColor: '#006400',
                  },
                }}
                onClick={() => navigate('/farmermanagement')}
              >
                Farmer Management
              </Button>
            </Paper>

            <Paper elevation={3} sx={{ padding: '20px', flex: 1, textAlign: 'center' }}>
              <img
                src={productIcon}
                alt="Product Management Icon"
                style={{ width: '80px', height: '80px', marginBottom: '10px' }}
              />
              <Typography variant="h6" gutterBottom>
                Products
              </Typography>
              <Typography variant="body2">Update product preferences.</Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'darkgreen',
                  color: 'white',
                  marginTop: '10px',
                  '&:hover': {
                    backgroundColor: '#006400',
                  },
                }}
                onClick={() => navigate('/productmanagement')}
              >
                Product Management
              </Button>
            </Paper>
          </Box>
        </Container>
      </Box>
    </div>
  );
}
