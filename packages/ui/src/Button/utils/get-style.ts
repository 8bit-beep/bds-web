import { colors } from "@bds-web/colors";
import { ButtonType } from "../types/props";
import { css } from "@emotion/react";

const bg = {
  enabled: {
    primary: colors.blue.light,
    secondary: colors.green.light,
    ghost: "transparent",
    text: "transparent",
    danger: colors.red.light,
  },

  hover: {
    primary: colors.blue.dark,
    secondary: colors.green.dark,
    ghost: "transparent",
    text: colors.greyScale[10],
    danger: colors.red.dark,
  },

  disabled: {
    primary: colors.greyScale[20],
    secondary: colors.greyScale[20],
    ghost: "transparent",
    text: "transparent",
    danger: colors.greyScale[20],
  },
} as const;

const text = {
  enabled: {
    primary: colors.static.white,
    secondary: colors.static.white,
    ghost: colors.blue.light,
    text: colors.blue.light,
    danger: colors.static.white,
  },

  hover: {
    primary: colors.static.white,
    secondary: colors.static.white,
    ghost: colors.blue.light,
    text: colors.blue.light,
    danger: colors.static.white,
  },

  disabled: {
    primary: colors.greyScale[10],
    secondary: colors.greyScale[10],
    ghost: colors.greyScale[20],
    text: colors.greyScale[20],
    danger: colors.greyScale[10],
  },
} as const;

const border = {
  enabled: colors.blue.light,
  hover: colors.blue.dark,
  disabled: colors.greyScale[20],
} as const;

export const getStyle = (buttonType: ButtonType) => {
  return css`
    background-color: ${bg.enabled[buttonType]};
    color: ${text.enabled[buttonType]};
    border: ${
      buttonType === "ghost"
        ? `1px solid ${border.enabled}`
        : "none"
    };

    &:hover {
      background-color: ${bg.hover[buttonType]};
      color: ${text.hover[buttonType]};
      border: ${
        buttonType === "ghost"
          ? `1px solid ${border.hover}`
          : "none"
      };
    }

    &:disabled {
      background-color: ${bg.disabled[buttonType]};
      color: ${text.disabled[buttonType]};
      border: ${
        buttonType === "ghost"
          ? `1px solid ${border.disabled}`
          : "none"
      };
      cursor: not-allowed;
    }
  `;
}