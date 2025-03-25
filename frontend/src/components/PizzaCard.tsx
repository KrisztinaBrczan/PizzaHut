'use client';

import { Pizza } from '@/Types';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Chip, Grid2, Stack, Typography } from '@mui/material';

interface PizzaCardProps {
  currentPizza: Pizza;
}

export default function PizzaCard({ currentPizza }: PizzaCardProps) {
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

        <Stack direction="row" spacing={1} sx={{ marginTop: '16px', justifyContent: 'center' }}>
          {currentPizza.diet.map((diet) => (
            <Chip label={diet} variant="outlined" color="secondary" size="small" />
          ))}
        </Stack>

        <Grid2 container gap="3px" sx={{ marginTop: '20px' }}>
          <Typography variant="body2">{currentPizza.toppings.join(', ')}</Typography>
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
