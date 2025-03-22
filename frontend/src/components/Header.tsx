'use client';

import { AppBar, Box, IconButton, Tab, Tabs, Toolbar, Tooltip } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import LocalPizzaTwoToneIcon from '@mui/icons-material/LocalPizzaTwoTone';

export default function Header() {
  const [value, setValue] = useState<number>(1);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="static">
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: -5,
            width: 100,
            height: 100,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            bgcolor: 'primary.main',
            cursor: 'pointer',
          }}
        >
          <Tooltip title="Admin" placement="left" arrow>
            <IconButton sx={{ cursor: 'pointer', zIndex: 2 }}>
              <LocalPizzaTwoToneIcon sx={{ fontSize: 80, rotate: '-20deg', color: 'secondary.main' }} />
            </IconButton>
          </Tooltip>
        </Box>

        <Toolbar sx={{ position: 'relative', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
