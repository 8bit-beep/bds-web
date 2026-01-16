"use client";

import { ButtonProps } from "../types/props";
import * as S from "./style";
import { ArrowIcon } from "../../ArrowIcon";

export const Button = ({
  buttonSize = "small",
  buttonType = "primary",
  showIcon = false,
  children,
  ...props
}: ButtonProps) => {
  return (
    <S.Button $buttonSize={buttonSize} $buttonType={buttonType} {...props}>
      {children}
      {showIcon && <ArrowIcon />}
    </S.Button>
  );
};
