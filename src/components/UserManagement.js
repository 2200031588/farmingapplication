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

export default function UserManagement() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Fetch user data
  useEffect(() => {
    fetch('http://localhost:1000/customer/getAll')
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      })
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // Handle Add Customer
  const handleAddCustomer = (e) => {
    e.preventDefault();
    const customer = { name, address, contact, password };
    fetch('http://localhost:1000/customer/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(customer),
    })
      .then(() => {
        console.log('New Customer added');
        // Clear form fields
        setName('');
        setAddress('');
        setContact('');
        setPassword('');
        // Refresh customer list
        fetch('http://localhost:1000/customer/getAll')
          .then((res) => res.json())
          .then((result) => setUsers(result));
      })
      .catch((error) => console.error('Error adding customer:', error));
  };

  // Handle Update button click
  const handleUpdate = (userId) => {
    navigate(`/updateuser/${userId}`);
  };

  // Handle Delete button click
  const handleDelete = (userId) => {
    navigate(`/deleteuser/${userId}`);
  };

  return (
    <div>
      {/* AppBar */}
      <AppBar position="static" sx={{ backgroundColor: 'darkgreen' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Button color="inherit" onClick={() => navigate('/adminhome')}>
              Home
            </Button>
          </Box>
         
        </Toolbar>
      </AppBar>

      <Container>
        {/* Title */}
        <Typography
          variant="h4"
          sx={{
            textAlign: 'center',
            margin: '20px 0',
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          User Management
        </Typography>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>Id</b></TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Address</b></TableCell>
                <TableCell><b>Contact</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.address}</TableCell>
                  <TableCell>{user.contact}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ marginRight: '8px' }}
                      onClick={() => handleUpdate(user.id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(user.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Add Customer Form */}
        <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px', backgroundColor: 'white' }}>
          <Typography variant="h5" sx={{ marginBottom: '16px', color: 'darkgreen' }}>
            Add Customer
          </Typography>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }} onSubmit={handleAddCustomer}>
            <TextField
              id="name"
              label="Customer Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="address"
              label="Customer Address"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <TextField
              id="contact"
              label="Customer Contact"
              variant="outlined"
              fullWidth
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            <TextField
              id="password"
              label="Customer Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
