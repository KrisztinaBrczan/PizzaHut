'use client';

import getAllDrinks from '@/services/getAllDrinks';
import { DrinkDocument } from '@/Types';
import { Typography } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

export default function Page() {
  const { data: drinks } = useQuery<DrinkDocument[]>({
    queryFn: async () => await getAllDrinks(),
    queryKey: ['drinks'],
  });

  return (
    <>
      <Typography variant="h5" align="center" sx={{ fontWeight: 'bold' }}>
        Our Soft Drinks
      </Typography>
    </>
  );
}
