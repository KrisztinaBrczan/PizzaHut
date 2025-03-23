'use client';

import { useSidebarStore } from '@/app/store/useSidebarStore';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';

import { AdminMenuItemListType } from '@/Types';
import CollapsibleListItems from './CollapsibleListItems ';

export default function Sidebar() {
  const adminMenuItemList: AdminMenuItemListType[] = [
    { menuTitle: 'Orders' },
    {
      menuTitle: 'Manage pizzas',
      subtitles: ['Add new pizza', 'Amend pizzas'],
    },
    {
      menuTitle: 'Manage soft drinks',
      subtitles: ['Add new soft drink', 'Amend soft drinks'],
    },
  ];

  const { isDrawerOpen, toggleDrawer } = useSidebarStore();
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer} sx={{ zIndex: -1 }}>
      <List sx={{ marginTop: '60%', width: 200 }}>
        {adminMenuItemList.map((list) =>
          !list.subtitles ? (
            <ListItemButton key={list.menuTitle} sx={{ '&:hover': { color: 'primary.main' } }}>
              <ListItemText primary={list.menuTitle} />
            </ListItemButton>
          ) : (
            <CollapsibleListItems list={list} />
          ),
        )}
      </List>
    </Drawer>
  );
}
