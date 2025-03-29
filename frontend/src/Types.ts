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
  name: string;
  base_sauce: string;
  diet: string[];
  toppings: string[];
  size: number;
  photo_url: string;
  price: number;
}

export interface PizzaDocument extends Pizza {
  id: string;
}

export interface Drink {
  name: string;
  photo_url: string;
  price: number;
  size: number;
}

export interface DrinkDocument extends Drink {
  id: string;
}
