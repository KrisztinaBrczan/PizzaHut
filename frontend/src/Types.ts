export interface MenuItemType {
  value: string;
  path: string;
  menuItemText: string;
}

export interface AdminMenuItemListType {
  menuTitle: string;
  subtitles?: string[];
}

export interface Pizza {
  id?: string;
  name: string;
  base_sauce: string;
  diet: string[];
  toppings: string[];
  size: number;
  photo_url: string;
  price: number;
}
