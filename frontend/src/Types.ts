export interface MenuItemType {
  value: string;
  path: string;
  menuItemText: string;
}

export interface SubtitleItems {
  path: string;
  title: string;
}

export interface AdminMenuItemListType {
  menuTitle: string;
  path: string;
  subtitles?: SubtitleItems[];
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

export interface FormInputType {
  label: string;
  inputName: string;
  placeholderText: string;
}
