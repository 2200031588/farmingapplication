import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, Box } from "@mui/material";
import farmerImage from "../images/farmer-3.jpg";

const FarmerHome = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: '#F5F5DC' }}> {/* Soft Beige Background */}
      {/* Navigation Bar using AppBar */}
      <AppBar position="static" style={{ backgroundColor: "#406343" }}>
        <Toolbar>
          {/* Navigation Links */}
          <Box sx={{ flexGrow: 1 }}>
            <Button color="inherit" href="/farmerhome">
              Home
            </Button>
            <Button color="inherit" href="/orders">
              Orders
            </Button>
            <Button color="inherit" href="/market">
              Market
            </Button>
            <Button color="inherit" href="/products">
              Add Product
            </Button>
          </Box>
          {/* Logout Button */}
          <Button color="inherit" href="/">
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      {/* Main Content Area */}
      <div style={{ flexGrow: 1 }}>
        {/* Welcome Section */}
        <Container maxWidth="lg" style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "12px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" style={{ color: "#406343", marginBottom: "1rem" }}>
              Welcome Farmers!
            </Typography>
            <Typography variant="body1" style={{ color: "#555", lineHeight: 1.8 }}>
              This platform is designed to support you in your farming journey. Here you can find various resources, including information about crops, tools, and farming methods.
            </Typography>
          </Box>
        </Container>

        {/* Resources Section */}
        <Container maxWidth="lg" style={{ marginBottom: "2rem" }}>
          <Box
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              borderRadius: "12px",
              boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
              padding: "2rem",
              textAlign: "center",
            }}
          >
            <Typography variant="h4" style={{ color: "#406343", marginBottom: "1rem" }}>
              Resources for Farmers
            </Typography>
            <Typography variant="body1" style={{ color: "#555", lineHeight: 1.8 }}>
              Explore our collection of resources tailored to help you succeed:
            </Typography>
            <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
              <img
                src={farmerImage}
                alt="Farmer Resources"
                style={{
                  width: "100%",
                  maxWidth: "600px",
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Box>
          </Box>
        </Container>
      </div>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "rgba(91, 138, 114, 0.9)",
          color: "white",
          textAlign: "center",
          padding: "1.5rem 0",
        }}
      >
        <Typography variant="body2">
          &copy; 2024 Support the Farmers. All rights reserved.
        </Typography>
      </Box>
    </div>
  );
};

export default FarmerHome;
