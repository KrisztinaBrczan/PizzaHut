'use client';

import { useSidebarStore } from '@/app/store/useSidebarStore';
import { Drawer, List, ListItemButton, ListItemText } from '@mui/material';

import { AdminMenuItemListType } from '@/Types';
import CollapsibleListItems from './CollapsibleListItems';

const adminMenuItemLists: AdminMenuItemListType[] = [
  { menuTitle: 'Orders', path: 'orders' },
  {
    menuTitle: 'Manage pizzas',
    subtitles: [
      { title: 'Add new pizza', path: 'addPizza' },
      { title: 'Amend pizzas', path: 'amendPizzas' },
    ],
  },
  {
    menuTitle: 'Manage soft drinks',
    subtitles: [
      { title: 'Add new soft drink', path: 'addDrink' },
      { title: 'Amend soft drinks', path: 'amendDrinks' },
    ],
  },
];

export default function Sidebar() {
  const { isDrawerOpen, reset } = useSidebarStore();

  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={reset}>
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
