'use client';

import DrinkCard from '@/components/DrinkCard';
import getAllDrinks from '@/services/getAllDrinks';
import { DrinkDocument } from '@/Types';
import { Box, Typography, CircularProgress, Grid2 } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

export default function Page() {
  const {
    data: drinks,
    isLoading,
    isError,
    error,
  } = useQuery<DrinkDocument[]>({
    queryFn: async () => await getAllDrinks(),
    queryKey: ['drinks'],
  });

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="500px">
        <CircularProgress />
      </Box>
    );
  }

  if (isError) {
    return <Typography>An error occured: {error.message}</Typography>;
  }

  return (
    <>
      {drinks && (
        <Box>
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
            Our Soft Drinks
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
            {drinks.map((currentDrink) => (
              <Grid2 key={currentDrink.id} container justifyContent="center">
                <DrinkCard currentDrink={currentDrink} />
              </Grid2>
            ))}
          </Grid2>
        </Box>
      )}
    </>
  );
}
