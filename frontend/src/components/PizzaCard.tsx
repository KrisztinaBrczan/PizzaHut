import { Pizzas } from '@/Types';
import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material';

interface PizzaCardProps {
  currentPizza: Pizzas;
}

export default function PizzaCard({ currentPizza }: PizzaCardProps) {
  return (
    <Card sx={{ width: '250px' }}>
      <CardMedia sx={{ height: 140, backgroundImage: '' }} image={currentPizza.photo_url} title={currentPizza.name} />
      <CardContent>
        <Typography align="center" sx={{ fontWeight: 'bold' }}>
          {currentPizza.price} HUF
        </Typography>
        <Typography align="center" variant="h6">
          {currentPizza.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" size="small" sx={{ borderRadius: '25px' }}>
          Add
        </Button>
      </CardActions>
    </Card>
  );
}
