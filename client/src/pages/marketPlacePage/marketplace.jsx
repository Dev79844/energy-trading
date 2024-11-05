import React, { useEffect, useState } from 'react';
import UserNav from '../../components/DashboardNavigation/UserNav';
import { Box } from '@mui/material';
import MultiActionAreaCard from './MultiActionAreaCard';
import Grid from '@mui/material/Grid2';

const marketplace = () => {
  const [items, setItems] = useState([]);

  // Load data from JSON file
  useEffect(() => {
    fetch('./marketplaceData.json')
      .then(response => response.json())
      .then(data => setItems(data))
      .catch(error => console.error("Error loading data:", error));
  }, []);

  // Remove item on "Buy" button click
  const handleBuy = (id) => {
    setItems((prevItems) => prevItems.filter(item => item.id !== id));
    // Additional code here would send a delete request to a server endpoint to update the data
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3 }}>
      <UserNav />
      <Grid container spacing={3} columns={{ xs: 4, sm: 8, md: 12 }}>
        {items.map((item) => (
          <Grid item xs={4} sm={4} md={4} key={item.id}>
            <MultiActionAreaCard item={item} onBuy={() => handleBuy(item.id)} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default marketplace;