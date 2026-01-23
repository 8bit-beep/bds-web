"use client";

import { CalendarIcon } from "../../CalendarIcon";
import { DatePickerProps } from "../types/props";
import { formatDate } from "../utils/format-date";
import * as S from "./style";

export const DatePicker = ({
  date = new Date(),
  onChangeDate = () => {},
  disablePast = false,
  title = "날짜 선택",
}: DatePickerProps) => {
  const min = disablePast ? formatDate(new Date()) : undefined;
  
  return (
    <S.Container>
      <S.DateText>{formatDate(date)}</S.DateText>
      <CalendarIcon size={16} />
      <input
        type="date"
        value={formatDate(date)}
        min={min}
        aria-label={title}
        style={{ display: "flex" }}
        onChange={(e) => {
          const value = e.target.value;
          if (value) {
            onChangeDate(new Date(value));
          }
        }}
      />
    </S.Container>
  );
};
