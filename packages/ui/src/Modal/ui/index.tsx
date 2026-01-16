"use client";

import { createPortal } from "react-dom";
import { useModal } from "../hooks/useModal";
import { ModalProviderProps } from "../types/props";
import * as S from "./style";
import { CloseIcon } from "../../CloseIcon";

export const ModalProvider = ({ baseZIndex = 10000 }: ModalProviderProps) => {
  const { modals, closeModal, mountedRoot } = useModal();

  if (modals.length === 0 || !mountedRoot) return null;

  return createPortal(
    <>
      {modals.map((modal, index) => (
        <S.Overlay
          key={modal.id}
          $zIndex={baseZIndex + index}
          onClick={index === modals.length - 1 ? closeModal : undefined}>
          <S.Modal onClick={(e) => e.stopPropagation()}>
            <S.ModalHeader>
              <S.ModalTitle>{modal.content.title}</S.ModalTitle>
              <CloseIcon onClose={closeModal} />
            </S.ModalHeader>
            {modal.content.content}
          </S.Modal>
        </S.Overlay>
      ))}
    </>,
    mountedRoot
  );
};
