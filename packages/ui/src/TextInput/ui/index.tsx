"use client";

import { TextInputProps } from "../types/props";
import * as S from "./style";

export const TextInput = ({ label, errorMessage, width, id, name,  ...props }: TextInputProps) => {
  return (
    <S.Container $width={width}>
      {label && <S.Label htmlFor={id}>{label}</S.Label>}
      <S.TextInput id={id} name={name} $isError={!!errorMessage} {...props} />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
    </S.Container>
  );
};
