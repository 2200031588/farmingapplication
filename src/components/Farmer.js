import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Container, Paper, Button, Link, AppBar, Toolbar, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form'; // Import useForm for form management
import { yupResolver } from '@hookform/resolvers/yup'; // Resolver for Yup validation
import * as Yup from 'yup'; // Yup for validation schema

export default function Farmer() {
  const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };
  const formStyle = { display: 'flex', flexDirection: 'column', gap: '16px' };

  const navigate = useNavigate(); // useNavigate hook for navigation

  // Yup validation schema
  const schema = Yup.object({
    name: Yup.string().min(3, 'Name should be at least 3 characters long').required('Farmer Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password should be at least 6 characters long')
      .max(20, 'Password should not exceed 20 characters')
      .required('Password is required'),
    state: Yup.string().required('State is required'),
    village: Yup.string().required('Village is required'),
    mobile: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile number must be exactly 10 digits')
      .required('Mobile number is required'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
    // Submit the new farmer data to the backend
    fetch('http://localhost:1000/farmer/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(() => {
      console.log('New Farmer added');
      // Reset form fields after successful submission
      reset();
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
            <u>Farmer Registration</u>
          </h1>

          <form style={formStyle} noValidate onSubmit={handleSubmit(onSubmit)}>
            <TextField
              id="name"
              label="Farmer Name"
              variant="outlined"
              fullWidth
              {...register('name')}
              error={!!errors.name}
              helperText={errors.name?.message}
              sx={{ '& .MuiOutlinedInput-root': { borderColor: 'darkgreen' } }}
            />
            <TextField
              id="email"
              label="Farmer Email"
              variant="outlined"
              fullWidth
              {...register('email')}
              error={!!errors.email}
              helperText={errors.email?.message}
              sx={{ '& .MuiOutlinedInput-root': { borderColor: 'darkgreen' } }}
            />
            <TextField
              id="password"
              label="Farmer Password"
              variant="outlined"
              fullWidth
              type="password"
              {...register('password')}
              error={!!errors.password}
              helperText={errors.password?.message}
              sx={{ '& .MuiOutlinedInput-root': { borderColor: 'darkgreen' } }}
            />
            <TextField
              id="state"
              label="Farmer State"
              variant="outlined"
              fullWidth
              {...register('state')}
              error={!!errors.state}
              helperText={errors.state?.message}
              sx={{ '& .MuiOutlinedInput-root': { borderColor: 'darkgreen' } }}
            />
            <TextField
              id="village"
              label="Farmer Village"
              variant="outlined"
              fullWidth
              {...register('village')}
              error={!!errors.village}
              helperText={errors.village?.message}
              sx={{ '& .MuiOutlinedInput-root': { borderColor: 'darkgreen' } }}
            />
            <TextField
              id="mobile"
              label="Mobile Number"
              variant="outlined"
              fullWidth
              {...register('mobile')}
              error={!!errors.mobile}
              helperText={errors.mobile?.message}
              sx={{ '& .MuiOutlinedInput-root': { borderColor: 'darkgreen' } }}
            />
            
            <Button
              variant="contained"
              sx={{ backgroundColor: 'darkgreen', color: 'white' }}
              type="submit"
            >
              Submit
            </Button>
            
            <div style={{ marginTop: '10px', textAlign: 'center' }}>
              <span>Already have an account? </span>
              <Link href="#" onClick={() => navigate('/farmerlogin')} style={{ color: 'darkgreen', fontWeight: 'bold' }}>
                Login
              </Link>
            </div>
          </form>
        </Paper>
      </Container>
    </div>
  );
}
