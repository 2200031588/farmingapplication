import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Link, AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const paperStyle = { padding: '60px 30px', width: 600, margin: '20px auto' };
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '16px' };

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    fetch(`http://localhost:1000/admin/login?name=${name}&password=${password}`, {
      method: 'POST',
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === 'success') {
          console.log('Login successful:', result.admin);
          navigate('/adminhome');
        } else {
          setErrorMessage(result.message);
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
            <Button color="inherit" onClick={() => navigate('/')} style={{ color: 'white' }}>Home</Button>
            <Button color="inherit" onClick={() => navigate('/contact')} style={{ color: 'white' }}>Contact</Button>
            <Button color="inherit" onClick={() => navigate('/about')} style={{ color: 'white' }}>About</Button>
          </Box>
        </Toolbar>
      </AppBar>

      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1 style={{ color: 'darkgreen' }}>
            <u>Admin Login</u>
          </h1>

          <form style={formStyle} noValidate autoComplete="off">
            <TextField
              id="name"
              label="Admin Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ marginBottom: '16px' }}
            />
            <TextField
              id="password"
              label="Admin Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ marginBottom: '16px' }}
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
          </form>
        </Paper>
      </Container>
    </div>
  );
}
