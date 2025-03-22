'use client';

import { useSidebarStore } from '@/app/store/useSidebarStore';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

export default function Sidebar() {
  const { isDrawerOpen, toggelDrawer } = useSidebarStore();
  return (
    <Drawer anchor="left" open={isDrawerOpen} onClose={toggelDrawer}>
      <List>
        <ListItem>
          <ListItemText primary="Orders" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Manage stock" />
        </ListItem>
      </List>
    </Drawer>
  );
}
