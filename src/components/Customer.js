import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Link, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

export default function Customer() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '16px' };

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate(); // useNavigate hook for navigation

  const validate = () => {
    const newErrors = {};
    if (!name) newErrors.name = 'Name is required';
    if (!address) newErrors.address = 'Address is required';
    if (!contact) newErrors.contact = 'Contact is required';
    if (!/^\d{10}$/.test(contact)) newErrors.contact = 'Contact should be a 10-digit number';
    if (!password) newErrors.password = 'Password is required';
    if (password.length < 6) newErrors.password = 'Password should be at least 6 characters long';
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (validate()) {
      const customer = { name, address, contact, password };
      console.log(customer);
      fetch('http://localhost:1000/customer/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(customer),
      }).then(() => {
        console.log('New Customer added');
      });
    }
  };

  return (
    <div>
      {/* AppBar with left-aligned navigation buttons */}
      <AppBar position="static" sx={{ backgroundColor: 'darkgreen' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Button sx={{ color: 'white' }} onClick={() => navigate('/')}>
              Home
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => navigate('/contact')}>
              Contact
            </Button>
            <Button sx={{ color: 'white' }} onClick={() => navigate('/about')}>
              About
            </Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container>
        <Paper elevation={3} style={paperStyle}>
          <Typography
            variant="h4"
            sx={{
              color: 'darkgreen',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            <u>Customer Registration</u>
          </Typography>

          <form style={formStyle} noValidate autoComplete="off">
            <TextField
              id="name"
              label="Customer Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderColor: 'darkgreen' } }}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              id="address"
              label="Customer Address"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              error={!!errors.address}
              helperText={errors.address}
            />
            <TextField
              id="contact"
              label="Customer Contact"
              variant="outlined"
              fullWidth
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              error={!!errors.contact}
              helperText={errors.contact}
            />
            <TextField
              id="password"
              label="Customer Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: 'darkgreen', color: 'white' }}
              onClick={handleClick}
            >
              Submit
            </Button>

            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <span>Already have an account? </span>
              <Link
                href="#"
                onClick={() => navigate('/customerlogin')}
                sx={{ color: 'darkgreen', fontWeight: 'bold' }}
              >
                Login
              </Link>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
