import { css } from "@emotion/react";
import { DropdownSize } from "../types/props";
import { colors } from "@bds-web/colors";
import { typoCss } from "@bds-web/typography";

const map = {
  small: css`
    min-width: 98px;
    border: 1px solid ${colors.greyScale[20]};
    background-color: ${colors.static.white};
    height: 28px;
    ${typoCss("Body")};
  `,

  medium: css`
    min-width: 152px;
    box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.05);
    background-color: ${colors.static.white};
    height: 36px;
    ${typoCss("Body")};
  `,

  large: css`
    min-width: 164px;
    box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.05);
    background-color: ${colors.static.white};
    height: 48px;
    ${typoCss("H4")};
  `
}

export const getStyle = (size: DropdownSize) => {
  return map[size];
}