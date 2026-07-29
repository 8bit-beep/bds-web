import { ButtonSize } from "../types/props"

const mapping = {
  small: { paddingX: '28px', height: '32px' },
  medium: { paddingX: '32px', height: '40px' },
  large: { paddingX: '40px', height: '44px' },
} as const;

export const getSize = (size: ButtonSize) => {
  return mapping[size];
}
