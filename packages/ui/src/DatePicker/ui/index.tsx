"use client";

import * as S from "./style";
import { parseDate } from "../utils/parse-date";
import { DAYS } from "../constants";
import { getIsPast } from "../utils/get-is-past";
import { useDatePicker } from "../hooks/useDatePicker";
import { DatePickerProps } from "../types/props";
import { CalendarIcon } from "../../CalendarIcon";
import { ChevronIcon } from "../../ChevronIcon";
import { Button } from "../../Button";
import { DatePickerPortal } from "./DatePickerPortal";
import { useRef } from "react";

export const DatePicker = ({
  date = new Date(),
  onChangeDate = () => {},
  disablePast = false,
  title = "날짜 선택",
}: DatePickerProps) => {
  const portalRef = useRef<HTMLDivElement | null>(null);

  const {
    isOpen,
    setIsOpen,
    current,
    goPrevMonth,
    goNextMonth,
    selected,
    setSelected,
    calendar,
    containerRef,
  } = useDatePicker(date, portalRef);

  return (
    <S.Container
      ref={containerRef}
      onClick={() => setIsOpen(prev => !prev)}
    >
      <S.DateText>{parseDate(date)}</S.DateText>
      <CalendarIcon size={16} pointer />

      <DatePickerPortal
        containerRef={containerRef}
        portalRef={portalRef}
        isOpen={isOpen}
      >
        <S.Calender
          ref={portalRef}
          $isOpen={isOpen}
          onClick={e => e.stopPropagation()}
        >
          <S.Title>{title}</S.Title>

          <S.Header>
            <S.MonthText>
              {current.getFullYear()}년 {current.getMonth() + 1}월
            </S.MonthText>

            <S.Arrows>
              <S.Arrow onClick={goPrevMonth}>
                <ChevronIcon size={16} rotate={90} />
              </S.Arrow>
              <S.Arrow onClick={goNextMonth}>
                <ChevronIcon size={16} rotate={-90} />
              </S.Arrow>
            </S.Arrows>
          </S.Header>

          <S.WeekRow>
            {DAYS.map(day => (
              <S.Week key={day}>{day}</S.Week>
            ))}
          </S.WeekRow>

          <S.Grid>
            {calendar.map((cell, i) =>
              cell.day ? (
                <S.Day
                  key={i}
                  $selected={
                    selected?.toDateString() ===
                    cell.date?.toDateString()
                  }
                  $isPast={disablePast && getIsPast(cell.date)}
                  onClick={() => setSelected(cell.date!)}
                >
                  {cell.day}
                </S.Day>
              ) : (
                <div key={i} />
              )
            )}
          </S.Grid>

          <Button
            buttonSize="large"
            buttonType="primary"
            onClick={() => {
              onChangeDate(selected);
              setIsOpen(false);
            }}
          >
            선택
          </Button>
        </S.Calender>
      </DatePickerPortal>
    </S.Container>
  );
};
