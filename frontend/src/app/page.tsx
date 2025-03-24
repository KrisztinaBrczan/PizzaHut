'use client';

import PizzaCard from '@/components/PizzaCard';
import getAllPizzas from '@/services/getAllPizzas';
import { Pizzas } from '@/Types';
import { Box, CircularProgress, Grid2, Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

export default function Home() {
  const { data: pizzas, isLoading } = useQuery<Pizzas[]>({
    queryFn: async () => await getAllPizzas(),

    queryKey: ['pizzas'],
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="50vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <>
      {pizzas && (
        <Box>
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
            Our Pizzas
          </Typography>
          <Grid2
            container
            spacing={4}
            justifyContent="center"
            sx={{
              flexDirection: { xs: 'column', sm: 'row' },
              marginTop: '35px',
            }}
          >
            {pizzas.map((currentPizza) => (
              <Grid2 key={currentPizza.id} container justifyContent="center">
                <PizzaCard currentPizza={currentPizza} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      )}
    </>
  );
}
