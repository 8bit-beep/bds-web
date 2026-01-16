import { ButtonSize } from "../types/props"

const mapping = {
  small: '28px',
  medium: '32px',
  large: '40px',
} as const;

export const getSize = (size: ButtonSize) => {
  return mapping[size];
}