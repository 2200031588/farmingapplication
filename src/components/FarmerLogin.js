import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Link, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function FarmerLogin() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '50px auto' }; // Adjusted margin to move form down
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '16px' };

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Mock API call for demonstration
    fetch(`http://localhost:1000/farmer/login?name=${name}&password=${password}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 'success') {
          console.log('Login successful:', result.farmer);
          navigate('/farmerhome'); // Redirect to FarmerHome
        } else {
          setErrorMessage(result.message); // Display error message
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
      <AppBar position="static" style={{ backgroundColor: 'darkgreen' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', flexGrow: 1 }}>
            <Button color="inherit" onClick={() => navigate('/farmerhome')} style={{ color: 'white' }}>Home</Button>
            <Button color="inherit" onClick={() => navigate('/contact')} style={{ color: 'white' }}>Contact</Button>
            <Button color="inherit" onClick={() => navigate('/about')} style={{ color: 'white' }}>About</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1 style={{ color: 'darkgreen' }}>
            <u>Farmer Login</u>
          </h1>

          <form style={formStyle} noValidate autoComplete="off">
            <TextField
              id="name"
              label="Farmer Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: '16px' }}
              InputProps={{
                style: { borderColor: 'darkgreen' }
              }}
              InputLabelProps={{
                style: { color: 'darkgreen' }
              }}
            />
            <TextField
              id="password"
              label="Farmer Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: '16px' }}
              InputProps={{
                style: { borderColor: 'darkgreen' }
              }}
              InputLabelProps={{
                style: { color: 'darkgreen' }
              }}
            />
            <Button
              variant="contained"
              color="success"
              onClick={handleLogin}
              style={{ backgroundColor: 'darkgreen', color: 'white' }}
            >
              Login
            </Button>

            {errorMessage && (
              <Typography color="error" style={{ marginTop: '10px', textAlign: 'center' }}>
                {errorMessage}
              </Typography>
            )}

            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <span>Don't have an account? </span>
              <Link href="#" onClick={() => navigate('/farmer')} style={{ color: 'darkgreen' }}>
                Register
              </Link>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
