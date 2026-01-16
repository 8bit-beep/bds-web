"use client";

import { colors } from "@bds-web/colors";

export const TriangleIcon = () => {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 10 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M5 10L0 0L10 0L5 10Z" fill={colors.blue.light} />
    </svg>
  );
};
