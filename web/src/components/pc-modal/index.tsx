import { ReactNode, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useModalPetCare } from "./hook";
import { setContent } from "./modal.slice";

type PCModalContainerProps = {
  children: ReactNode;
  size?: "sm" | "md" | "xl" | "2xl" | "3xl" | "4xl";
  onClose?: Function;
};

type PCModalContentProps = {
  children: ReactNode;
};

export const PetCareModalContent = ({ children }: PCModalContentProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setContent(children));
  }, [dispatch]);
  return <></>;
};

export const PetCareModalContainer = ({
  children,
  size,
  onClose,
}: PCModalContainerProps) => {
  const ref = useRef(null);
  const { closeModalPetCare } = useModalPetCare();
  const modalVisible = useSelector((state: RootState) => state.modal.visible);

  if (modalVisible) {
    (ref.current as any)?.showModal();
  } else {
    (ref.current as any)?.close();
  }

  return (
    <dialog
      ref={ref}
      className="modal backdrop:!hidden"
      onClose={() => onClose && onClose()}
    >
      <div className={`modal-box flex max-w-${size} flex-col`}>{children}</div>
      <form method="dialog" className="modal-backdrop !-z-10">
        <button type="button" onClick={() => closeModalPetCare()}>
          close
        </button>
      </form>
    </dialog>
  );
};
