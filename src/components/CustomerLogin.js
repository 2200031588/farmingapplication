import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Link, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function CustomerLogin() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '16px' };

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`http://localhost:1000/customer/login?name=${name}&password=${password}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 'success') {
          console.log('Login successful:', result.customer);
          navigate('/customerhome'); // Redirect to CustomerHome component upon successful login
        } else {
          setErrorMessage(result.message); // Show error message
        }
      })
      .catch((err) => {
        console.error('Login failed:', err);
        setErrorMessage('An error occurred. Please try again.');
      });
  };

  return (
    <div>
      {/* AppBar with left-aligned navigation buttons */}
      <AppBar position="static" sx={{ backgroundColor: 'darkgreen' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Button sx={{ color: 'white' }} onClick={() => navigate('/')}>Home</Button>
            <Button sx={{ color: 'white' }} onClick={() => navigate('/contact')}>Contact</Button>
            <Button sx={{ color: 'white' }} onClick={() => navigate('/about')}>About</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1 style={{ color: 'darkgreen' }}>
            <u>Customer Login</u>
          </h1>

          <form style={formStyle} noValidate autoComplete="off">
            <TextField
              id="name"
              label="Customer Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderColor: 'darkgreen' } }}
            />
            <TextField
              id="password"
              label="Customer Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ '& .MuiOutlinedInput-root': { borderColor: 'darkgreen' } }}
            />
            <Button variant="contained" sx={{ backgroundColor: 'darkgreen', color: 'white' }} onClick={handleLogin}>
              Login
            </Button>

            {errorMessage && (
              <Typography color="error" style={{ marginTop: '10px', textAlign: 'center' }}>
                {errorMessage}
              </Typography>
            )}

            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <span>Don't have an account? </span>
              <Link href="" onClick={() => navigate('/customer')} style={{ color: 'darkgreen', fontWeight: 'bold' }}>
                Register
              </Link>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
