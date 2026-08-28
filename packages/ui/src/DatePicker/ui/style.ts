"use client";

import { colors } from "@beep-ds/colors";
import { shapes } from "@beep-ds/shapes";
import { typoCss } from "@beep-ds/typography";
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