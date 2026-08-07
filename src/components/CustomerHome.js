import React from 'react';
import { AppBar, Toolbar, Button, Container, Grid, Card, CardMedia, CardContent, CardActions, Box, Typography } from '@mui/material';

// Import images
import vegetablesImage from '../images/vegetables.jpeg';
import dairyImage from '../images/dairy.jpeg';
import spicesImage from '../images/spices.jpeg';
import fruitsImage from '../images/fruits.jpg';
import beveragesImage from '../images/beverages.jpeg';
import nutsImage from '../images/nuts.jpeg';
import legumeImage from '../images/legume.jpeg';

const CustomerHome = () => {
  return (
    <div style={{ backgroundColor: '#f4f4f4' }}> {/* Set background color here */}
      {/* AppBar (Navigation Bar) */}
      <AppBar position="sticky" style={{ backgroundColor: '#406343' }}>
        <Toolbar>
          {/* Left side buttons */}
          <Button color="inherit" href="/cutomerhome">Home</Button>
          <Button color="inherit" href="/customerprofile">Profile</Button>

          {/* Right side logout button */}
          <Box sx={{ flexGrow: 1 }} /> {/* This pushes the logout button to the right */}
          <Button color="inherit" href="/">Logout</Button>
        </Toolbar>
      </AppBar>

      {/* Main Section with Products */}
      <Container style={{ marginTop: '2rem' }}>
        <Grid container spacing={3}>
          {/* Vegetables Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Vegetables"
                height="200"
                image={vegetablesImage}  
              />
              <CardContent>
                <Typography variant="h6" color="primary">Vegetables</Typography>
                <Typography variant="body2" color="textSecondary">
                  Freshly grown organic vegetables from local farms.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="/vegetables">View More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Dairy Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Dairy"
                height="200"
                image={dairyImage} 
              />
              <CardContent>
                <Typography variant="h6" color="primary">Dairy</Typography>
                <Typography variant="body2" color="textSecondary">
                  Pure and healthy dairy products 
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="/dairy">View More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Spices Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Spices"
                height="200"
                image={spicesImage}  
              />
              <CardContent>
                <Typography variant="h6" color="primary">Spices</Typography>
                <Typography variant="body2" color="textSecondary">
                  Aromatic spices sourced directly from farmers.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="/spices">View More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Fruits Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Fruits"
                height="200"
                image={fruitsImage} 
              />
              <CardContent>
                <Typography variant="h6" color="primary">Fruits</Typography>
                <Typography variant="body2" color="textSecondary">
                  Fruits, berries, and vegetables fresh from farms.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="/fruits">View More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Beverages Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Beverages"
                height="200"
                image={beveragesImage}  
              />
              <CardContent>
                <Typography variant="h6" color="primary">Beverages</Typography>
                <Typography variant="body2" color="textSecondary">
                  Natural beverages made from farm-fresh ingredients.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="/beverages">View More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Nuts Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Nuts"
                height="200"
                image={nutsImage} 
              />
              <CardContent>
                <Typography variant="h6" color="primary">Nuts</Typography>
                <Typography variant="body2" color="textSecondary">
                  A variety of nuts from sustainable farms.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="/nuts">View More</Button>
              </CardActions>
            </Card>
          </Grid>

          {/* Legume Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia
                component="img"
                alt="Legume"
                height="200"
                image={legumeImage} 
              />
              <CardContent>
                <Typography variant="h6" color="primary">Legume</Typography>
                <Typography variant="body2" color="textSecondary">
                  Healthy legumes for your dietary needs.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href="/legume">View More</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Footer */}
      <footer style={{ backgroundColor: '#5b8a72', color: 'white', textAlign: 'center', padding: '.5rem 0' }}>
        <p>&copy; 2024 Support the Farmers. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CustomerHome;
