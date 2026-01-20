import { css } from "@emotion/react";
import { DropdownSize } from "../types/props";
import { typoCss } from "@bds-web/typography";

const map = {
  small: css`
    height: 28px;
    ${typoCss("Body")};
  `,

  medium: css`
    height: 36px;
    ${typoCss("Body")};
  `,

  large: css`
    height: 48px;
    ${typoCss("H4")};
  `
}

export const getStyle = (size: DropdownSize) => {
  return map[size];
}