"use client";

import { useEffect, useRef } from "react";
import { TriangleIcon } from "../../TriangleIcon";
import { useDropdown } from "../hooks/useDropdown";
import { DropdownProps } from "../types/props";
import * as S from "./style";
import { useOutsideClick } from "../hooks/useOutsideClick";

export const Dropdown = ({
  dropdownSize = "small",
  onSelect,
  options,
  selected,
  width = "auto",
}: DropdownProps) => {
  const { isOpen, closeDropdown, toggleDropdown } = useDropdown();
  const containerRef = useOutsideClick(isOpen, closeDropdown);

  return (
    <S.Container
      ref={containerRef}
      $size={dropdownSize}
      $width={width}
      onClick={toggleDropdown}>
      <S.SelectedItem>
        <S.SelectedText>
          {selected ? selected.name : "선택해주세요."}
        </S.SelectedText>
        <TriangleIcon />
      </S.SelectedItem>
      {isOpen && (
        <S.OptionsList $size={dropdownSize} $isOpen={true}>
          {options.map((option, idx) => (
            <S.OptionItem
              key={idx}
              $isSelected={selected?.value === option.value}
              $size={dropdownSize}
              onClick={() => onSelect(option)}>
              {option.name}
            </S.OptionItem>
          ))}
        </S.OptionsList>
      )}
    </S.Container>
  );
};
