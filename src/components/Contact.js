import React, { useState } from 'react';
import Appbar from './Appbar';
import { TextField, Button, Container, Paper } from '@mui/material';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactDetails = { name, email, message };
    console.log('Message Sent:', contactDetails);
    // You can add functionality to send this data to the server or an API.
  };

  return (
    <div>
      {/* Appbar Component */}
      <Appbar />

      {/* Contact Section */}
      <section className="contact-section">
        <Container>
          <Paper elevation={3} style={{ padding: '30px', marginTop: '20px' }}>
            <h2>Contact Us</h2>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Your Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{ marginBottom: '16px' }}
              />
              <TextField
                label="Your Email"
                variant="outlined"
                fullWidth
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{ marginBottom: '16px' }}
              />
              <TextField
                label="Your Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{ marginBottom: '16px' }}
              />
              <Button type="submit" variant="contained" color="primary">
                Send Message
              </Button>
            </form>
          </Paper>
        </Container>
      </section>

      {/* Footer */}
      <footer>
        <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
      </footer>

      {/* CSS Styles */}
      <style>
        {`
          .contact-section {
            padding: 50px 20px;
            background-color: #f9f9f9;
          }

          .contact-section h2 {
            color: #087f5b;
            text-align: center;
            margin-bottom: 20px;
          }

          footer {
            text-align: center;
            padding: 10px;
            background-color: #087f5b;
            color: white;
            position: fixed;
            width: 100%;
            bottom: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
