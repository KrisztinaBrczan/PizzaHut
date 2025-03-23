'use client';

import { useSidebarStore } from '@/app/store/useSidebarStore';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';

import { AdminMenuItemListType } from '@/Types';
import CollapsibleListItems from './CollapsibleListItems';

const adminMenuItemLists: AdminMenuItemListType[] = [
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

export default function Sidebar() {
  const { isDrawerOpen, reset } = useSidebarStore();

  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={reset} sx={{ zIndex: -1 }}>
      <List sx={{ marginTop: '60%', width: 200 }}>
        {adminMenuItemLists.map((list) =>
          list.subtitles ? (
            <CollapsibleListItems key={list.menuTitle} list={list} />
          ) : (
            <ListItemButton key={list.menuTitle} sx={{ '&:hover': { color: 'primary.main' } }}>
              <ListItemText primary={list.menuTitle} />
            </ListItemButton>
          ),
        )}
      </List>
    </Drawer>
  );
}
