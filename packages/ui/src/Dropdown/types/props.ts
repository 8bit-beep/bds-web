import { DropdownItem } from "./dropdown-item";

export type DropdownSize = "small" | "medium" | "large";

export type DropdownOpenDirection = "down" | "up";

export interface DropdownProps {
  dropdownSize?: DropdownSize;
  options: DropdownItem[];
  selected: DropdownItem | null;
  onSelect: (item: DropdownItem | null) => void;
  width?: string;
  openDirection?: DropdownOpenDirection;
}