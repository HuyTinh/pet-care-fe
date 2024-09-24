import { ReactNode } from "react";

type PCModalProps = {
  children: ReactNode;
  size?: "sm" | "md" | "xl" | "2xl" | "3xl" | "4xl";
  onClose?: Function;
};

export const PetCareModal = ({ children, size, onClose }: PCModalProps) => {
  return (
    <dialog
      id="pc-modal"
      className="modal backdrop:!hidden"
      onClose={() => onClose && onClose()}
    >
      <div className={`modal-box flex max-w-${size} flex-col`}>{children}</div>
      <form method="dialog" className="modal-backdrop !-z-10">
        <button>close</button>
      </form>
    </dialog>
  );
};
