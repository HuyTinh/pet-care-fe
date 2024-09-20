import { ReactNode, useRef } from "react";

type PCModalProps = {
  children: ReactNode;
};

export const PCModal = ({ children }: PCModalProps) => {
  return (
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box flex max-w-4xl flex-col">{children}</div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
