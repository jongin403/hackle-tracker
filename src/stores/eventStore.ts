import create from 'zustand';

const DEFAULT_MENU = '';

enum TabControllerMenus {
  events = 'Events',
  apiOptions = 'API Options',
  Settings = 'Settings',
}

type MenuState = {
  currentMenu: string;
  menuList: string[];
  setMenu: (menu: string) => void;
};

export const useMenuStore = create<MenuState>((set) => ({
  currentMenu: DEFAULT_MENU,
  menuList: Object.values(TabControllerMenus),
  setMenu: (menu) => set({ currentMenu: menu }),
}));
