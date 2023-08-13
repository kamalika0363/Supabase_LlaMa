import { create } from "zustand";

interface UsersModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const UsersModal = create<UsersModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default UsersModal;
