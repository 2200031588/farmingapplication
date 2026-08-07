import React, { useEffect, useState } from 'react';
import {
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  AppBar,
  Toolbar,
  Box,
  TextField,
  Typography,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [category, setCategory] = useState('');
  const navigate = useNavigate();

  // Fetch product data
  useEffect(() => {
    fetch('http://localhost:1000/product/getAll')
      .then((res) => res.json())
      .then((result) => setProducts(result))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  // Handle Update button click
  const handleUpdate = (productId) => {
    navigate(`/update/${productId}`);
  };

  // Handle Delete button click
  const handleDelete = (productId) => {
    navigate(`/delete/${productId}`);
  };

  // Handle Add Product form submission
  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProduct = { productname: productName, category };
    fetch('http://localhost:1000/product/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newProduct),
    })
      .then(() => {
        console.log('New product added');
        setProductName('');
        setCategory('');
        fetch('http://localhost:1000/product/getAll')
          .then((res) => res.json())
          .then((result) => setProducts(result));
      })
      .catch((error) => console.error('Error adding product:', error));
  };

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: 'darkgreen' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Button color="inherit" onClick={() => navigate('/adminhome')}>Home</Button>
          </Box>
         
        </Toolbar>
      </AppBar>

      <Container>
        {/* Title */}
        <h1 style={{ textAlign: 'center', margin: '20px 0', color: 'white' }}>Product Management</h1>

        {/* Product Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Id</b></TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Category</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell>{product.id}</TableCell>
                  <TableCell>{product.productname}</TableCell>
                  <TableCell>{product.category}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ marginRight: '8px' }}
                      onClick={() => handleUpdate(product.id)} // Trigger the update action
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(product.id)} // Navigate to delete page
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Add Product Form */}
        <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px', backgroundColor: 'white' }}>
          <Typography variant="h5" sx={{ marginBottom: '16px', color: 'darkgreen' }}>
            Add Product
          </Typography>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={handleAddProduct}>
            <TextField
              id="productname"
              label="Product Name"
              variant="outlined"
              fullWidth
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
            <TextField
              id="category"
              label="Category"
              variant="outlined"
              fullWidth
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <Button variant="contained" sx={{ backgroundColor: 'darkgreen', color: 'white' }} type="submit">
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
