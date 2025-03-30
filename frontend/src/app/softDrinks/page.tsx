'use client';

import getAllDrinks from '@/services/getAllDrinks';
import { DrinkDocument } from '@/Types';
import { Box, Typography, CircularProgress } from '@mui/material';
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
      <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
        Our Soft Drinks
      </Typography>
    </>
  );
}
