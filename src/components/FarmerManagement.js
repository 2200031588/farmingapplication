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

export default function FarmerManagement() {
  const [farmers, setFarmers] = useState([]);
  const [name, setName] = useState('');
  const [village, setVillage] = useState('');
  const [state, setState] = useState('');
  const [contact, setMobile] = useState('');
  const navigate = useNavigate();

  // Fetch farmer data
  useEffect(() => {
    fetch('http://localhost:1000/farmer/getAll')
      .then((res) => res.json())
      .then((result) => setFarmers(result))
      .catch((error) => console.error('Error fetching farmers:', error));
  }, []);

  // Handle Delete
  const handleDelete = async (farmerId) => {
    try {
      const response = await fetch(`http://localhost:1000/farmer/delete/${farmerId}`, { method: 'DELETE' });
      if (response.ok) {
        setFarmers(farmers.filter((farmer) => farmer.id !== farmerId));
        alert('Farmer deleted successfully');
      } else {
        alert('Error deleting farmer');
      }
    } catch (error) {
      console.error('Error deleting farmer:', error);
    }
  };

  // Handle Update
  const handleUpdate = (farmerId) => {
    navigate(`/updatefarmer/${farmerId}`);
  };

  // Handle Add Farmer
  const handleAddFarmer = (e) => {
    e.preventDefault();
    const newFarmer = { name, village, state, contact };
    fetch('http://localhost:1000/farmer/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newFarmer),
    })
      .then(() => {
        console.log('New farmer added');
        setName('');
        setVillage('');
        setState('');
        setMobile('');
        fetch('http://localhost:1000/farmer/getAll')
          .then((res) => res.json())
          .then((result) => setFarmers(result));
      })
      .catch((error) => console.error('Error adding farmer:', error));
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
        <h1 style={{ textAlign: 'center', margin: '20px 0', color: 'darkgreen' }}>Farmer Management</h1>

        {/* Farmer Table */}
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell><b>ID</b></TableCell>
                <TableCell><b>Name</b></TableCell>
                <TableCell><b>Village</b></TableCell>
                <TableCell><b>State</b></TableCell>
                <TableCell><b>Contact</b></TableCell>
                <TableCell><b>Actions</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {farmers.map((farmer) => (
                <TableRow key={farmer.id}>
                  <TableCell>{farmer.id}</TableCell>
                  <TableCell>{farmer.name}</TableCell>
                  <TableCell>{farmer.village}</TableCell>
                  <TableCell>{farmer.state}</TableCell>
                  <TableCell>{farmer.mobile}</TableCell>
                  <TableCell>
                    <Button
                      variant="outlined"
                      color="primary"
                      sx={{ marginRight: '8px' }}
                      onClick={() => handleUpdate(farmer.id)}
                    >
                      Update
                    </Button>
                    <Button
                      variant="outlined"
                      color="error"
                      onClick={() => handleDelete(farmer.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Add Farmer Form */}
        <Paper elevation={3} sx={{ padding: '20px', marginTop: '20px', backgroundColor: 'white' }}>
          <Typography variant="h5" sx={{ marginBottom: '16px', color: 'darkgreen' }}>
            Add Farmer
          </Typography>
          <form
            style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            onSubmit={handleAddFarmer} // Correctly linked the submit handler here
          >
            <TextField
              id="name"
              label="Farmer Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="village"
              label="Village"
              variant="outlined"
              fullWidth
              value={village}
              onChange={(e) => setVillage(e.target.value)}
            />
            <TextField
              id="state"
              label="State"
              variant="outlined"
              fullWidth
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <TextField
              id="contact"
              label="Contact"
              variant="outlined"
              fullWidth
              value={contact}
              onChange={(e) => setMobile(e.target.value)}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: 'darkgreen', color: 'white' }}
              type="submit"
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
