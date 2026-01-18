"use client";

import { CheckIcon } from "../../CheckIcon";
import { CheckboxProps } from "../types/props";
import * as S from "./style";

export const Checkbox = ({ checked, onChange, size = 20 }: CheckboxProps) => {
  return (
    <S.Container
      $size={size}
      $checked={checked}
      onClick={() => onChange(!checked)}>
      {checked && <CheckIcon size={size} />}
    </S.Container>
  );
};
