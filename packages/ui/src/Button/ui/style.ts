import styled from "@emotion/styled";
import { ButtonSize, ButtonType } from "../types/props";
import { getStyle } from "../utils/get-style";
import { getSize } from "../utils/get-size";
import { typoCss } from "@bds-web/typography";
import { shapes } from "@bds-web/shapes";

export const Button = styled.button<{
  $buttonType: ButtonType;
  $buttonSize: ButtonSize;
}>`
  ${typoCss("Caption2")};
  cursor: pointer;
  ${({ $buttonType }) => getStyle($buttonType)};
  height: ${({ $buttonSize }) => getSize($buttonSize).height};
  padding: 0 ${({ $buttonSize }) => getSize($buttonSize).paddingX};
  border-radius: ${shapes.small};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-sizing: border-box;
`;
