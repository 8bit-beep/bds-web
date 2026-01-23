"use client";

import { useRef } from "react";
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
  const ref = useRef<HTMLInputElement>(null);

  return (
    <S.Container onClick={() => ref.current?.click()}>
      <S.DateText>{formatDate(date)}</S.DateText>
      <CalendarIcon size={16} />
      <input
        ref={ref}
        type="date"
        value={formatDate(date)}
        min={min}
        aria-label={title}
        onChange={(e) => {
          const value = e.target.value;
          if (value) onChangeDate(new Date(value));
        }}
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0,
          pointerEvents: "none",
        }}
      />
    </S.Container>
  );
};
