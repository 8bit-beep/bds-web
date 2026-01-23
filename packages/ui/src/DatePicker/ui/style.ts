"use client";

import { colors } from "@bds-web/colors";
import { shapes } from "@bds-web/shapes";
import { typoCss } from "@bds-web/typography";
import styled from "@emotion/styled";

export const Container = styled.div`
  width: fit-content;
  height: 48px;
  background-color: ${colors.static.white};
  border-radius: ${shapes.medium};
  padding: 5px 20px;
  color: ${colors.greyScale[90]};
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;
  gap: 10px;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.05);
`;

export const DateText = styled.span`
  ${typoCss("Body")}
  flex: 1;
  user-select: none;
`;

export const HiddenDateInput = styled.input`
  position: absolute;
  inset: 0;
  opacity: 0;
  cursor: pointer;
`;