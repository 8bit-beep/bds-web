import { useModalStore } from "../hooks/useModalStore";
import { Modal } from "../types/modal-item";

export const modal = {
  open: (content: Modal): void => {
    useModalStore.getState().openModal(content);
  },
  close: (): void => {
    useModalStore.getState().closeModal();
  },
  closeAll: (): void => {
    useModalStore.getState().closeAllModal();
  },
};
