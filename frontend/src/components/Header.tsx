'use client';

import { AppBar, Box, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { MouseEvent, SyntheticEvent, useState } from 'react';
import LocalPizzaTwoToneIcon from '@mui/icons-material/LocalPizzaTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

export default function Header() {
  const [value, setValue] = useState(1);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();

  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  function onMobileMenuClick(event: MouseEvent<HTMLButtonElement>) {
    setMobileMenuOpen(true);
    setAnchorEl(event?.currentTarget);
  }

  function onMobileMenuClose() {
    setMobileMenuOpen(false);
    setAnchorEl(null);

    //routing
  }

  return (
    <>
      <AppBar position="static">
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: -5,
            width: !isMobileScreen ? 100 : 80,
            height: !isMobileScreen ? 100 : 80,
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
              <LocalPizzaTwoToneIcon sx={{ fontSize: !isMobileScreen ? 80 : 60, rotate: '-20deg', color: 'secondary.main' }} />
            </IconButton>
          </Tooltip>
        </Box>

        <Toolbar sx={{ position: 'relative', justifyContent: isMobileScreen ? 'flex-end' : 'center' }}>
          {!isMobileScreen ? (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab value={'pizzas'} sx={{ fontWeight: 'bold' }} label="Pizzas" />
                <Tab value={'softDrinks'} sx={{ fontWeight: 'bold' }} label="Soft drinks" />
                <Tab value={'customPizza'} sx={{ fontWeight: 'bold' }} label="Custom pizza" />
              </Tabs>
            </Box>
          ) : (
            <Box>
              <IconButton onClick={onMobileMenuClick}>
                <MenuTwoToneIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
              </IconButton>

              <Menu id="basic-menu" anchorEl={anchorEl} open={mobileMenuOpen} onClose={onMobileMenuClose}>
                <MenuItem value="pizzas" onClick={onMobileMenuClose} sx={{ '&:hover': { color: 'primary.main' } }}>
                  Pizzas
                </MenuItem>
                <MenuItem value="softDrinks" onClick={onMobileMenuClose} sx={{ '&:hover': { color: 'primary.main' } }}>
                  Soft drinks
                </MenuItem>
                <MenuItem value="customPizza" onClick={onMobileMenuClose} sx={{ '&:hover': { color: 'primary.main' } }}>
                  Custom pizza
                </MenuItem>
              </Menu>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
