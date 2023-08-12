"use client";

import GroupModal from "./GroupModel";

const Navbar = () => {
  const groupModal = GroupModal();

  return (
    <div className="pl-10 mt-5">
      <div
        onClick={() =>
          groupModal.isOpen ? groupModal.onClose() : groupModal.onOpen()
        }
      >
        Supabase
      </div>
    </div>
  );
};

export default Navbar;
