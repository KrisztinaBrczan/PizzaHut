'use client';

import { Pizzas } from '@/Types';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material';

interface PizzaCardProps {
  currentPizza: Pizzas;
}

export default function PizzaCard({ currentPizza }: PizzaCardProps) {
  console.log('currentpizza', currentPizza);

  return (
    <Card sx={{ width: '250px' }}>
      <CardMedia component="img" sx={{ height: 140, objectFit: 'fit' }} image={currentPizza.photo_url} title={currentPizza.name} />
      <CardContent sx={{ height: '200px' }}>
        <Typography align="center" sx={{ fontWeight: 'bold' }}>
          {currentPizza.price} HUF
        </Typography>
        <Typography align="center" variant="h6" sx={{ marginTop: '8px' }}>
          {currentPizza.name}
        </Typography>

        <Grid2 container spacing={2} justifyContent="center" sx={{ marginTop: '16px' }}>
          {currentPizza.diet.map((diet) => (
            <Typography
              key={diet}
              sx={{
                border: '0.5px solid',
                borderColor: 'secondary.main',
                borderRadius: '25px',
                textAlign: 'center',
                padding: '5px',
                fontSize: '12px',
              }}
            >
              {diet}
            </Typography>
          ))}
        </Grid2>

        <Grid2 container gap="3px" sx={{ marginTop: '20px' }}>
          {currentPizza.toppings.map((topping, index) => (
            <Typography variant="body2" key={topping}>
              {topping}
              {index < currentPizza.toppings.length - 1 ? ', ' : ''}
            </Typography>
          ))}
        </Grid2>
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
