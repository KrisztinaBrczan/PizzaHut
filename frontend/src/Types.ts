export interface MenuItemType {
  value: string;
  menuItemText: string;
}

export interface AdminMenuItemListType {
  menuTitle: string;
  subtitles?: string[];
  onItemClick?: () => void;
  currentState?: boolean;
}
