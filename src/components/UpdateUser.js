import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, Paper, Box, Typography } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateUser() {
  const [user, setUser] = useState({
    id: '',
    name: '',
    address: '',
    contact: ''
  });
  const [error, setError] = useState('');
  const { id } = useParams(); // Get user ID from URL
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the user data based on the user ID
    fetch(`http://localhost:1000/customer/get/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }
        return res.json();
      })
      .then((data) => setUser(data))
      .catch((error) => {
        setError(`Error fetching user data: ${error.message}`);
        console.error('Error fetching user:', error);
      });
  }, [id]);

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Send a PUT request to update the user
    fetch(`http://localhost:1000/customer/update/${user.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Failed to update user');
        }
      })
      .then(() => {
        alert('User updated successfully!');
        navigate('/usermanagement'); // Navigate back to user management page
      })
      .catch((error) => {
        setError('Error updating user');
        console.error('Error updating user:', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      <Paper sx={{ padding: '20px', width: '100%', maxWidth: '600px', backgroundColor: 'white' }}>
        <Typography variant="h4" align="center" color="textPrimary" gutterBottom>
          Update User
        </Typography>

        {/* Error Message */}
        {error && (
          <Typography variant="body1" color="error" align="center" gutterBottom>
            {error}
          </Typography>
        )}

        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            name="name"
            value={user.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Address"
            name="address"
            value={user.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <TextField
            label="Contact"
            name="contact"
            value={user.contact}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            required
          />
          <Box sx={{ textAlign: 'center', marginTop: '20px' }}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
            >
              Update
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
}
