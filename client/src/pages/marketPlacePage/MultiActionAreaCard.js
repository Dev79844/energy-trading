import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';

export default function MultiActionAreaCard({ item, onBuy }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Seller ID: {item.email}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Units Available: {item.numberOfUnits}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Amount Quoted: ₹{item.amountQuoted}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={onBuy}>
          Buy
        </Button>
      </CardActions>
    </Card>
  );
}
