import React, { useEffect, useState } from 'react';
import { Container, Button, AppBar, Toolbar, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function DeleteFarmer() {
  const [farmer, setFarmer] = useState(null);
  const { farmerId } = useParams(); // Get farmerId from URL params
  const navigate = useNavigate();

  // Fetch farmer details before deletion
  useEffect(() => {
    fetch(`http://localhost:1000/farmer/${farmerId}`)
      .then((res) => res.json())
      .then((result) => {
        setFarmer(result);
      })
      .catch((error) => console.error('Error fetching farmer details:', error));
  }, [farmerId]);

  // Handle delete action
  const handleDelete = () => {
    fetch(`http://localhost:1000/farmer/delete/${farmerId}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        alert('Farmer deleted successfully!');
        navigate('/farmer'); // Redirect to Farmer Management page after deletion
      })
      .catch((error) => console.error('Error deleting farmer:', error));
  };

  // Handle cancel action
  const handleCancel = () => {
    navigate('/farmer'); // Redirect to Farmer Management page without deleting
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

      <Container>
        <h1 style={{ textAlign: 'center', margin: '20px 0', color: 'white' }}>Delete Farmer</h1>

        {/* Display farmer details */}
        {farmer ? (
          <div>
            <p><strong>Name:</strong> {farmer.name}</p>
            <p><strong>Email:</strong> {farmer.email}</p>
            <p><strong>State:</strong> {farmer.state}</p>
            <p><strong>Village:</strong> {farmer.village}</p>
            <p><strong>Mobile:</strong> {farmer.mobile}</p>
            
            {/* Confirmation buttons */}
            <Button
              variant="contained"
              color="error"
              sx={{ marginRight: '10px' }}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
        ) : (
          <p>Loading farmer details...</p>
        )}
      </Container>
    </div>
  );
}
