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

export const Calender = styled.div<{ $isOpen: boolean }>`
  background-color: ${colors.static.white};
  border-radius: ${shapes.large};
  position: absolute;
  top: calc(100% + 8px);
  left: -2px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  cursor: default;
  z-index: ${({ $isOpen }) => ($isOpen ? 1000 : -1)};
`;

export const Title = styled.h2`
  ${typoCss("H3")}
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const MonthText = styled.div`
  ${typoCss("Body")}
`;

export const Arrows = styled.div`
  display: flex;
  gap: 8px;
`;

export const Arrow = styled.button`
  padding: 8px;
  cursor: pointer;
`;

export const WeekRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
  color: ${colors.greyScale[60]};
  margin-bottom: 4px;
`;

export const Week = styled.span`
  ${typoCss("Caption1")}
  flex: 1;
`;

export const Grid = styled.div`
  width: 280px;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const Day = styled.button<{ $selected?: boolean, $isPast?: boolean }>`
  ${typoCss("Body")}
  height: 38px;
  border-radius: ${shapes.small};
  border: none;
  cursor: pointer;
  background: ${({ $selected }) => ($selected ? colors.blue.light : 'transparent')};
  color: ${({ $selected }) => ($selected ? colors.static.white : colors.greyScale[60])};
  opacity: ${({ $isPast }) => ($isPast ? 0.5 : 1)};
`;