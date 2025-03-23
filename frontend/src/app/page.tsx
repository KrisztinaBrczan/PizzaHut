'use client';

import PizzaCard from '@/components/PizzaCard';
import getAllPizzas from '@/services/getAllPizzas';
import { Pizzas } from '@/Types';
import { Box, Card, Grid2, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: pizzas } = useQuery<Pizzas[]>({
    queryFn: async () => await getAllPizzas(),

    queryKey: ['pizzas'],
  });

  return (
    <>
      <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
        Our Pizzas
      </Typography>
      <Grid2 container spacing={4}>
        {pizzas?.map((currentPizza) => (
          <Grid2 key={currentPizza.id}>
            <PizzaCard currentPizza={currentPizza} />
          </Grid2>
        ))}
      </Grid2>
    </>
  );
}
