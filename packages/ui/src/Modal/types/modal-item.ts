export interface ModalItem {
  id: string;
  content: Modal;
}

export interface Modal {
  title: string;
  content: React.ReactNode;
}