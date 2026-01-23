"use client";

import { useRef } from "react";
import { CalendarIcon } from "../../CalendarIcon";
import { DatePickerProps } from "../types/props";
import { formatDate } from "../utils/format-date";
import { formatDateInput } from "../utils/format-date-input";
import * as S from "./style";

export const DatePicker = ({
  date = new Date(),
  onChangeDate = () => {},
  disablePast = false,
  title = "날짜 선택",
}: DatePickerProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const value = formatDateInput(date);
  const min = disablePast ? formatDateInput(new Date()) : undefined;

  return (
    <S.Container onClick={() => ref.current?.showPicker()}>
      <S.DateText>{formatDate(date)}</S.DateText>
      <CalendarIcon size={16} />

      <S.HiddenDateInput
        ref={ref}
        type="date"
        value={value}
        min={min}
        aria-label={title}
        onChange={(e) => {
          if (e.target.value) {
            onChangeDate(new Date(e.target.value));
          }
        }}
      />
    </S.Container>
  );
};
