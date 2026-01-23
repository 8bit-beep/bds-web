"use client";

import { useCallback, useState, RefObject } from "react";
import { getMonthCalendar } from "../utils/get-month-calendar";
import { useClickOutside } from "./useClickOutside";

export const useDatePicker = (
  date: Date,
  portalRef?: RefObject<HTMLElement | null>
) => {
  const [isOpen, setIsOpen] = useState(false);

  const [current, setCurrent] = useState(
    () => new Date(date.getFullYear(), date.getMonth(), 1)
  );

  const [selected, setSelected] = useState<Date>(date);

  const year = current.getFullYear();
  const month = current.getMonth();

  const calendar = getMonthCalendar(year, month);

  const goPrevMonth = () =>
    setCurrent(new Date(year, month - 1, 1));

  const goNextMonth = () =>
    setCurrent(new Date(year, month + 1, 1));

  const close = useCallback(() => setIsOpen(false), []);

  const ignoreRefs = portalRef ? [portalRef] : [];

  const containerRef =
    useClickOutside<HTMLDivElement>(close, ignoreRefs);

  return {
    isOpen,
    setIsOpen,
    current,
    goPrevMonth,
    goNextMonth,
    selected,
    setSelected,
    calendar,
    containerRef,
  };
};
