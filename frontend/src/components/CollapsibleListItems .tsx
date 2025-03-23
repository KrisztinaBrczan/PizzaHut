import { Box, Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { AdminMenuItemListType } from '@/Types';
import { useState } from 'react';

interface ReceivedCollapsibleListItemsProps {
  list: AdminMenuItemListType;
}

export default function CollapsibleListItems({ list }: ReceivedCollapsibleListItemsProps) {
  const [isOpen, setIsOpen] = useState(false);

  function onToggleOpen() {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }

  return (
    <Box key={list.menuTitle}>
      <ListItemButton onClick={onToggleOpen} sx={{ '&:hover': { color: 'primary.main' } }}>
        <ListItemText primary={list.menuTitle} />
        {isOpen ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {list.subtitles &&
            list.subtitles.map((subtitle, index) => (
              <Box key={`${subtitle}_${index}`}>
                <ListItemButton sx={{ pl: 4, '&:hover': { color: 'primary.main' } }}>
                  <ListItemText primary={subtitle} />
                </ListItemButton>
              </Box>
            ))}
        </List>
      </Collapse>
    </Box>
  );
}
