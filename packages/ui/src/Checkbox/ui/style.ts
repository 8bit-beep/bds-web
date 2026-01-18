import { colors } from "@bds-web/colors";
import { shapes } from "@bds-web/shapes";
import styled from "@emotion/styled";

export const Container = styled.div<{ $size: number, $checked: boolean }>`
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border: 1px solid ${colors.blue.light};
  border-radius: ${shapes.small};
  background-color: ${({ $checked }) => $checked ? colors.blue.light : "transparent"};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;