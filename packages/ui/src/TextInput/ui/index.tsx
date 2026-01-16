"use client";

import { TextInputProps } from "../types/props";
import * as S from "./style";

export const TextInput = ({ label, errorMessage, ...props }: TextInputProps) => {
  return (
    <S.Container>
      {label && <S.Label>{label}</S.Label>}
      <S.TextInput $isError={!!errorMessage} {...props} />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
};
