export interface MenuItem {
  separator: string;
  title: string;
  icon: string;
  submenu: SubMenuItem[];
}

export interface SubMenuItem {
  title: string;
  url: string;
}
