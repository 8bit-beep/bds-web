import { shapes } from "@bds-web/shapes";
import styled from "@emotion/styled";
import { DropdownSize } from "../types/props";
import { getStyle } from "../utils/get-style";
import { colors } from "@bds-web/colors";
import { typoCss } from "@bds-web/typography";

export const Container = styled.div<{ $size: DropdownSize; $width: string }>`
  border-radius: ${shapes.large};
  padding: 0 20px;
  ${({ $size }) => getStyle($size)};
  min-width: ${({ $width }) => $width};
  cursor: pointer;
  position: relative;
  user-select: none;
  box-sizing: border-box;
`;

export const SelectedItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  height: 100%;
  user-select: none;
`;

export const SelectedText = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const OptionsList = styled.ul<{ $size: DropdownSize; $isOpen: boolean }>`
  min-width: calc(100% + 2px);
  max-height: 200px;
  overflow-y: scroll;
  background-color: ${colors.static.white};
  border-radius: ${shapes.large};
  ${({ $size }) =>
    $size === "small"
      ? `
    border: 1px solid ${colors.greyScale[20]};
  `
      : `
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  `};
  position: static;
  box-sizing: border-box;
  z-index: ${({ $isOpen }) => ($isOpen ? 100 : -1)};
`;

export const OptionItem = styled.li<{
  $size: DropdownSize;
  $isSelected: boolean;
}>`
  padding: 0 12px;
  height: ${({ $size }) => ($size === "small" ? "28px" : "36px")};
  ${typoCss("Body")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ $isSelected }) =>
    $isSelected ? colors.greyScale[10] : "transparent"};

  &:hover {
    background-color: ${colors.greyScale[10]};
  }
`;
