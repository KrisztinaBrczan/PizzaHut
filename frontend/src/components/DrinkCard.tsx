'use client';

import { Drink } from '@/Types';
import { Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material';

interface DrinkCardProps {
  currentDrink: Drink;
}

export default function DrinkCard({ currentDrink }: DrinkCardProps) {
  return (
    <Card sx={{ width: '250px' }}>
      <CardMedia
        component="img"
        sx={{ height: 230, width: ' 100%', objectFit: 'fit' }}
        image={currentDrink.photo_url}
        title={currentDrink.name}
      />
      <CardContent sx={{ height: '130px' }}>
        <Typography align="center" sx={{ fontWeight: 'bold' }}>
          {currentDrink.price} HUF
        </Typography>
        <Typography align="center" variant="h6" sx={{ marginTop: '8px' }}>
          {currentDrink.name}
        </Typography>
        <Typography align="center" sx={{ marginTop: '8px' }}>
          {currentDrink.size} ml
        </Typography>
      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end' }}>
        <Button
          variant="contained"
          size="small"
          sx={{
            borderRadius: '25px',
            px: 4,
          }}
        >
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
