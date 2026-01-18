"use client";

interface Props {
  size: number;
}

export const CheckIcon = ({ size }: Props) => {
  return (
    <svg
      width={size * (11 / 20)}
      height={size * (8 / 20)}
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.5625 7.51562L0 3.95313L0.890625 3.0625L3.5625 5.73437L9.29688 0L10.1875 0.890625L3.5625 7.51562Z"
        fill="white"
      />
    </svg>
  );
};
