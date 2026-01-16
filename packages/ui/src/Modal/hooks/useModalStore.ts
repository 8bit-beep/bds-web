"use client";

import { create } from "zustand";
import { Modal, ModalItem } from "../types/modal-item";

interface ModalState {
  isOpen: boolean;
  content: Modal | null;
  modals: ModalItem[];
  openModal: (content: Modal) => void;
  closeModal: () => void;
  closeAllModal: () => void;
}

export const useModalStore = create<ModalState>((set, get) => ({
  isOpen: false,
  content: null,
  modals: [],
  openModal: (content) => {
    const id = crypto.randomUUID();
    const newModals = [...get().modals, { id, content }];
    set({
      isOpen: true,
      content: newModals[newModals.length - 1].content,
      modals: newModals,
    });
  },
  closeModal: () => {
    const currentModals = get().modals;
    if (currentModals.length <= 1) {
      set({ isOpen: false, content: null, modals: [] });
    } else {
      const newModals = currentModals.slice(0, -1);
      set({
        isOpen: true,
        content: newModals[newModals.length - 1].content,
        modals: newModals,
      });
    }
  },
  closeAllModal: () => {
    set({ isOpen: false, content: null, modals: [] });
  },
}));
