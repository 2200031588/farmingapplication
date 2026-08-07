import React, { useEffect, useState } from 'react';
import { Container, Paper, AppBar, Toolbar, Button, Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ViewFarmers() {
  const paperStyle = { padding: '20px', width: '80%', margin: '20px auto' };
  const [farmers, setFarmers] = useState([]);
  const navigate = useNavigate();

  // Fetch the list of farmers when the component mounts
  useEffect(() => {
    fetch('http://localhost:1000/farmer/getAll')
      .then((res) => res.json())
      .then((result) => {
        setFarmers(result);
      })
      .catch((err) => {
        console.error('Error fetching farmers:', err);
      });
  }, []);

  return (
    <div>
      {/* AppBar with navigation buttons */}
      <AppBar position="static" sx={{ backgroundColor: 'darkgreen' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Button
              sx={{
                color: 'white',
                fontWeight: 'bold',
              }}
              onClick={() => navigate('/adminhome')}
            >
              Home
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container>
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            textAlign: 'center',
            marginTop: '20px',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          <u>Farmers List</u>
        </Typography>

        <Paper elevation={3} style={paperStyle}>
          {farmers.length > 0 ? (
            farmers.map((farmer) => (
              <Paper
                elevation={6}
                style={{ margin: '10px', padding: '15px', textAlign: 'left' }}
                key={farmer.id}
              >
                <Typography variant="body1">
                  <strong>Id:</strong> {farmer.id}
                </Typography>
                <Typography variant="body1">
                  <strong>Name:</strong> {farmer.name}
                </Typography>
                <Typography variant="body1">
                  <strong>State:</strong> {farmer.state}
                </Typography>
                <Typography variant="body1">
                  <strong>Village:</strong> {farmer.village}
                </Typography>
                <Typography variant="body1">
                  <strong>Mobile:</strong> {farmer.mobile}
                </Typography>
              </Paper>
            ))
          ) : (
            <Typography variant="body1" style={{ textAlign: 'center' }}>
              No farmers found.
            </Typography>
          )}
        </Paper>
      </Container>
    </div>
  );
}
