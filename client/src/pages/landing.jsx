import React from "react";
import Navbar from "../components/Navigation/Navbar";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      <Navbar />

      <Box 
        sx={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100vh', // Full viewport height for vertical centering
          width: '90vw', // Full width for horizontal centering
          textAlign: "center", 
          gap: 4,
          px: 2,
          ml: 4
        }}
      >
        <div>
          <Typography variant="h2" sx={{ color: "yellow", fontWeight: 'bold' }} gutterBottom>
            Energon
          </Typography>
          <Typography variant="h6" sx={{ color: "white", mb: 2 }}>
            Offering secure and reliable energy trading platform to all!
          </Typography>
        </div>
        
        <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
          <Button 
            variant="contained" 
            component={Link} 
            to="/user/login"
            sx={{ bgcolor: "yellow", color: "black", fontWeight: "bold" }}
          >
            Log In
          </Button>
          <Button 
            variant="contained" 
            component={Link} 
            to="/user/signup"
            sx={{ bgcolor: "yellow", color: "black", fontWeight: "bold" }}
          >
            Sign Up
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Landing;
