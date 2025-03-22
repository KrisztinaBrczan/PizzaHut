export interface MenuItemType {
  value: string;
  menuItemText: string;
}

export interface adminMenuItemListType {
  menuTitle: string;
  subtitles: string[];
  onItemClick: () => void;
  currentState: boolean;
}
