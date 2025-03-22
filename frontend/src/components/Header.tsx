'use client';

import { AppBar, Box, Tab, Tabs, Toolbar } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

export default function Header() {
  const [value, setValue] = useState<number>(1);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
            >
              <Tab value={1} sx={{ fontWeight: 'bold' }} label="Pizzas" />
              <Tab value={2} sx={{ fontWeight: 'bold' }} label="Soft drinks" />
              <Tab value={3} sx={{ fontWeight: 'bold' }} label="Custom pizza" />
            </Tabs>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
