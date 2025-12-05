export interface MenuItem {
  id: string;
  label: string;
  description?: string;
  icon: string;
  children?: MenuItem[];
  onClick?: () => void;
}
