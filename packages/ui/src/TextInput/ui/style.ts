import { colors } from "@bds-web/colors";
import { shapes } from "@bds-web/shapes";
import { typoCss } from "@bds-web/typography";
import styled from "@emotion/styled";

export const Container = styled.div<{ $width?: string | number }>`
  width: ${({ $width }) => $width};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const TextInput = styled.input<{ $isError: boolean }>`
  width: 100%;
  ${typoCss("Body")};
  height: 48px;
  border-radius: ${shapes.medium};
  background-color: ${colors.static.white};
  outline: none;
  border: 1px solid
      ${({ $isError }) => ($isError ? colors.red.light : colors.static.white)};
  padding: 0 16px;
  color: ${colors.static.black};
  box-sizing: border-box;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);

  &::placeholder {
    color: ${colors.greyScale[60]};
  }

  &:focus:not(:disabled) {
    border: 1px solid
      ${({ $isError }) => ($isError ? colors.red.light : colors.blue.light)};
  }

  &:hover {
    border-bottom: 1px solid ${colors.blue.light};
  }

  &:disabled {
    border: 1px solid ${colors.greyScale[10]};
    background-color: ${colors.greyScale[10]};
    cursor: not-allowed;
  }
`;

export const Label = styled.label`
  ${typoCss("Caption1")};
  color: ${colors.static.black};
`;

export const ErrorMessage = styled.span`
  ${typoCss("Caption1")};
  color: ${colors.red.light};
`;
