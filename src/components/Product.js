import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, AppBar, Toolbar, Box, Typography, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

export default function Product() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '16px' };

  const [productname, setProductname] = useState('');
  const [category, setCategory] = useState('');
  const [successMessage, setSuccessMessage] = useState(false); // State for success message

  const navigate = useNavigate(); // useNavigate hook for navigation

  // Add a new product
  const handleAdd = async (e) => {
    e.preventDefault();
    const product = { productname, category };

    try {
      const response = await fetch('http://localhost:1000/product/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error('Failed to add product');
      }

      setProductname('');
      setCategory('');
      setSuccessMessage(true); // Show success message
    } catch (error) {
      console.error('Error:', error.message);
      alert('Error adding product: ' + error.message); // Optional error alert
    }
  };

  const handleCloseSnackbar = () => {
    setSuccessMessage(false);
  };

  return (
    <div>
      {/* AppBar with left-aligned navigation buttons */}
      <AppBar position="static" style={{ backgroundColor: '#006400' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Button color="inherit" onClick={() => navigate('/farmerhome')}>Home</Button>
            <Button color="inherit" onClick={() => navigate('/contact')}>Contact</Button>
            <Button color="inherit" onClick={() => navigate('/about')}>About</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1 style={{ color: '#006400' }}>
            <u>Add Product</u>
          </h1>

          <form style={formStyle} noValidate autoComplete="off">
            <TextField
              id="productname"
              label="Product Name"
              variant="outlined"
              fullWidth
              value={productname}
              onChange={(e) => setProductname(e.target.value)}
            />
            <TextField
              id="category"
              label="Category"
              variant="outlined"
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={handleAdd}
              style={{ backgroundColor: '#006400', color: 'white' }}
            >
              Add Product
            </Button>
          </form>
        </Paper>
      </Container>

      {/* Snackbar for success message */}
      <Snackbar
        open={successMessage}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Product added successfully!
        </Alert>
      </Snackbar>
    </div>
  );
}
