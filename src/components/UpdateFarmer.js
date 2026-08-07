import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, AppBar, Toolbar, Box, Paper } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateFarmer() {
  const [farmer, setFarmer] = useState({
    id: '',
    name: '',
    email: '',
    password: '',
    state: '',
    village: '',
    mobile: '',
  });
  const { farmerId } = useParams(); // Retrieve farmerId from the URL params
  const navigate = useNavigate();

  // Fetch farmer data to populate the form
  useEffect(() => {
    fetch(`http://localhost:1000/farmer/${farmerId}`)
      .then((res) => res.json())
      .then((result) => {
        setFarmer(result); // Set the fetched farmer details in the state
      })
      .catch((error) => console.error('Error fetching farmer details:', error));
  }, [farmerId]);

  // Handle form submission to update farmer
  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch(`http://localhost:1000/farmer/update/${farmerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(farmer),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Farmer details updated successfully!');
        navigate('/farmer'); // Redirect to Farmer Management page after update
      })
      .catch((error) => console.error('Error updating farmer:', error));
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFarmer((prevFarmer) => ({
      ...prevFarmer,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: 'darkgreen' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Button color="inherit" onClick={() => navigate('/')}>Home</Button>
            <Button color="inherit" onClick={() => navigate('/farmer')}>Farmer Management</Button>
          </Box>
          <Button color="inherit" onClick={() => navigate('/logout')}>Logout</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: '20px' }}>
        <h1 style={{ textAlign: 'center', margin: '20px 0', color: 'white' }}>Update Farmer</h1>

        {/* Form to update farmer with white background */}
        <Paper elevation={3} sx={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={farmer.name}
              onChange={handleChange}
              size="small" // Decrease size of input fields
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              name="email"
              value={farmer.email}
              onChange={handleChange}
              size="small" // Decrease size of input fields
            />
            <TextField
              label="Password"
              variant="outlined"
              fullWidth
              margin="normal"
              name="password"
              type="password"
              value={farmer.password}
              onChange={handleChange}
              size="small" // Decrease size of input fields
            />
            <TextField
              label="State"
              variant="outlined"
              fullWidth
              margin="normal"
              name="state"
              value={farmer.state}
              onChange={handleChange}
              size="small" // Decrease size of input fields
            />
            <TextField
              label="Village"
              variant="outlined"
              fullWidth
              margin="normal"
              name="village"
              value={farmer.village}
              onChange={handleChange}
              size="small" // Decrease size of input fields
            />
            <TextField
              label="Mobile"
              variant="outlined"
              fullWidth
              margin="normal"
              name="mobile"
              value={farmer.mobile}
              onChange={handleChange}
              size="small" // Decrease size of input fields
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: '20px' }}
            >
              Update Farmer
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

