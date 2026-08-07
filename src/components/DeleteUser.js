import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Paper, Typography, Button } from '@mui/material';

export default function DeleteUser() {
  const { id } = useParams(); // Get userId from the URL
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  // Handle the delete operation
  const handleDelete = () => {
    fetch(`http://localhost:1000/customer/delete/${id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          setSuccess(true);
        } else {
          setError('Failed to delete the user.');
        }
      })
      .catch((error) => {
        console.error('Error deleting user:', error);
        setError('Error deleting the user.');
      });
  };

  useEffect(() => {
    if (success) {
      alert('User deleted successfully!');
      navigate('/usermanagement'); // Redirect back to user management after successful deletion
    }
  }, [success, navigate]);

  return (
    <Container>
      <Paper sx={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h5" color="textPrimary" gutterBottom>
          Are you sure you want to delete this user?
        </Typography>

        {/* Error or success message */}
        {error && (
          <Typography variant="body1" color="error" gutterBottom>
            {error}
          </Typography>
        )}

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
          onClick={() => navigate('/usermanagement')} // Navigate back to user management
        >
          Cancel
        </Button>
      </Paper>
    </Container>
  );
}
