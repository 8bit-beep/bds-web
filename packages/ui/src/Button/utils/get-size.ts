import { typoCss } from "@bds-web/typography";
import { ButtonSize } from "../types/props"

type TypographyLevel = Parameters<typeof typoCss>[0];

const mapping = {
  small: { paddingX: '28px', height: '32px', typo: 'Caption2' },
  medium: { paddingX: '32px', height: '40px', typo: 'Body' },
  large: { paddingX: '40px', height: '44px', typo: 'H4' },
} as const satisfies Record<ButtonSize, { paddingX: string; height: string; typo: TypographyLevel }>;

export const getSize = (size: ButtonSize) => {
  return mapping[size];
}