'use client';

import { AppBar, Box, IconButton, Menu, MenuItem, Tab, Tabs, Toolbar, Tooltip, useMediaQuery, useTheme } from '@mui/material';
import { MouseEvent, SyntheticEvent, useState } from 'react';
import LocalPizzaTwoToneIcon from '@mui/icons-material/LocalPizzaTwoTone';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { MenuItemType } from '@/Types';
import { useSidebarStore } from '@/app/store/useSidebarStore';
import { useRouter } from 'next/navigation';

const menuItems: MenuItemType[] = [
  {
    value: 'pizzas',
    path: '/',
    menuItemText: 'Pizzas',
  },
  {
    value: 'softDrinks',
    path: '/softDrinks',
    menuItemText: 'Soft drinks',
  },
  {
    value: 'customPizza',
    path: '/customPizza',
    menuItemText: 'Custom Pizza',
  },
];

export default function Header() {
  const [value, setValue] = useState('pizzas');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const theme = useTheme();
  const router = useRouter();

  const { toggleDrawer } = useSidebarStore();

  const isMobileScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function onMobileMenuClick(event: MouseEvent<HTMLButtonElement>) {
    setIsMobileMenuOpen(true);
    setAnchorEl(event?.currentTarget);
  }

  function onMobileMenuClose() {
    setIsMobileMenuOpen(false);
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
            <IconButton onClick={toggleDrawer} sx={{ cursor: 'pointer', zIndex: 2 }}>
              <LocalPizzaTwoToneIcon sx={{ fontSize: !isMobileScreen ? 80 : 60, rotate: '-20deg', color: 'secondary.main' }} />
            </IconButton>
          </Tooltip>
        </Box>

        <Toolbar sx={{ position: 'relative', justifyContent: isMobileScreen ? 'flex-end' : 'center' }}>
          {isMobileScreen ? (
            <Box>
              <IconButton onClick={onMobileMenuClick}>
                <MenuTwoToneIcon sx={{ fontSize: 40, color: 'secondary.main' }} />
              </IconButton>

              <Menu id="basic-menu" anchorEl={anchorEl} open={isMobileMenuOpen} onClose={onMobileMenuClose}>
                {menuItems.map(({ value, menuItemText, path }, index) => (
                  <MenuItem
                    key={`${value}_${index}`}
                    value={value}
                    onClick={() => router.push(path)}
                    sx={{ '&:hover': { color: 'primary.main' } }}
                  >
                    {menuItemText}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                {menuItems.map(({ value, menuItemText, path }, index) => (
                  <Tab
                    key={`${value}_${index}`}
                    value={value}
                    label={menuItemText}
                    sx={{ fontWeight: 'bold' }}
                    onClick={() => router.push(path)}
                  />
                ))}
              </Tabs>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
