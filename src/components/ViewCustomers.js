import React, { useEffect, useState } from 'react';
import { Container, Paper, AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

export default function ViewCustomers() {
  const paperStyle = { padding: '20px', width: '80%', margin: '20px auto' };
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate(); // useNavigate hook for navigation

  useEffect(() => {
    fetch('http://localhost:1000/customer/getAll')
      .then((res) => res.json())
      .then((result) => {
        setCustomers(result);
      })
      .catch((err) => {
        console.error('Error fetching customers:', err);
      });
  }, []);

  return (
    <div>
      {/* AppBar with dark green background */}
      <AppBar position="static" style={{ backgroundColor: 'darkgreen' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Button color="inherit" onClick={() => navigate('/adminhome')}>
              Home
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container>
        {/* White-colored heading */}
        <Typography
          variant="h4"
          gutterBottom
          style={{ textAlign: 'center', marginTop: '20px', color: 'white', padding: '10px' }}
        >
          Customer List
        </Typography>

        <Paper elevation={3} style={paperStyle}>
          {customers.length > 0 ? (
            customers.map((customer) => (
              <Paper
                elevation={6}
                style={{ margin: '10px', padding: '15px', textAlign: 'left' }}
                key={customer.id}
              >
                <Typography variant="body1">
                  <strong>Id:</strong> {customer.id}
                </Typography>
                <Typography variant="body1">
                  <strong>Name:</strong> {customer.name}
                </Typography>
                <Typography variant="body1">
                  <strong>Address:</strong> {customer.address}
                </Typography>
                <Typography variant="body1">
                  <strong>Contact:</strong> {customer.contact}
                </Typography>
              </Paper>
            ))
          ) : (
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              No customers found.
            </Typography>
          )}
        </Paper>
      </Container>
    </div>
  );
}
