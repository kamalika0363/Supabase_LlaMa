import { create } from "zustand";

interface CreateGroupModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const CreateGroupModal = create<CreateGroupModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default CreateGroupModal;
