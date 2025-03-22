'use client';

import { useSidebarStore } from '@/app/store/useSidebarStore';
import { Box, Collapse, Drawer, List, ListItemButton, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import { adminMenuItemListType } from '@/Types';

export default function Sidebar() {
  const [isPizzaListItemOpen, setIsPizzaListItemOpen] = useState(false);
  const [isSoftDrinkListItemOpen, setSoftDrinkIsListItemOpen] = useState(false);

  const adminMenuItemList: adminMenuItemListType[] = [
    {
      menuTitle: 'Manage pizzas',
      subtitles: ['Add new pizza', 'Amend pizzas'],
      onItemClick: () => setIsPizzaListItemOpen(!isPizzaListItemOpen),
      currentState: isPizzaListItemOpen,
    },
    {
      menuTitle: 'Manage soft drinks',
      subtitles: ['Add new soft drink', 'Amend soft drinks'],
      onItemClick: () => setSoftDrinkIsListItemOpen(!isSoftDrinkListItemOpen),
      currentState: isSoftDrinkListItemOpen,
    },
  ];

  const { isDrawerOpen, toggleDrawer } = useSidebarStore();
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer} sx={{ zIndex: -1 }}>
      <List sx={{ marginTop: '60%', width: 200 }}>
        <ListItemButton sx={{ '&:hover': { color: 'primary.main' } }}>
          <ListItemText primary="Orders" />
        </ListItemButton>

        {adminMenuItemList.map((list) => (
          <Box key={list.menuTitle}>
            <ListItemButton onClick={list.onItemClick} sx={{ '&:hover': { color: 'primary.main' } }}>
              <ListItemText primary={list.menuTitle} />
              {list.currentState ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>

            <Collapse in={list.currentState} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {list.subtitles.map((subtitle, index) => (
                  <Box key={list.subtitles[index]}>
                    <ListItemButton sx={{ pl: 4, '&:hover': { color: 'primary.main' } }}>
                      <ListItemText primary={subtitle} />
                    </ListItemButton>
                  </Box>
                ))}
              </List>
            </Collapse>
          </Box>
        ))}
      </List>
    </Drawer>
  );
}
