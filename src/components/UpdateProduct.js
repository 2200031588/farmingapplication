import React, { useEffect, useState } from 'react';
import { Container, TextField, Button, AppBar, Toolbar, Box, Paper } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

export default function UpdateProduct() {
  const [product, setProduct] = useState({
    id: '',
    name: '',
    category: '',
    price: '',
    description: '',
  });
  const { productId } = useParams(); // Retrieve productId from the URL params
  const navigate = useNavigate();

  // Fetch product data to populate the form
  useEffect(() => {
    fetch(`http://localhost:1000/product/get/${productId}`)
      .then((res) => res.json())
      .then((result) => {
        setProduct(result); // Set the fetched product details in the state
      })
      .catch((error) => console.error('Error fetching product details:', error));
  }, [productId]);

  // Handle form submission to update product
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:1000/product/update/${productId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then(() => {
        alert('Product details updated successfully!');
        navigate('/productmanagement'); // Redirect to Product Management page after update
      })
      .catch((error) => console.error('Error updating product:', error));
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: 'darkgreen' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Button color="inherit" onClick={() => navigate('/adminhome')}>Home</Button>
            <Button color="inherit" onClick={() => navigate('/productmanagement')}>Product Management</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: '20px' }}>
        <h1 style={{ textAlign: 'center', margin: '20px 0', color: 'white' }}>Update Product</h1>

        {/* Form to update product with white background */}
        <Paper elevation={3} sx={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
          <form onSubmit={handleSubmit}>
            <TextField
              label="Product Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="name"
              value={product.productname}
              onChange={handleChange}
              size="small" // Decrease size of input fields
            />
            <TextField
              label="Category"
              variant="outlined"
              fullWidth
              margin="normal"
              name="category"
              value={product.category}
              onChange={handleChange}
              size="small" // Decrease size of input fields
            />
           
           
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginTop: '20px' }}
            >
              Update Product
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
