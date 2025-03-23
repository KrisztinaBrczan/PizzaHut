import { Pizzas } from '@/Types';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';

interface PizzaCardProps {
  currentPizza: Pizzas;
}

export default function PizzaCard({ currentPizza }: PizzaCardProps) {
  return (
    <Card sx={{ width: '250px' }}>
      <CardMedia component="img" sx={{ height: 140, objectFit: 'fit' }} image={currentPizza.photo_url} title={currentPizza.name} />
      <CardContent>
        <Typography align="center" sx={{ fontWeight: 'bold' }}>
          {currentPizza.price} HUF
        </Typography>
        <Typography align="center" variant="h6">
          {currentPizza.name}
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
