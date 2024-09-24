import { useDispatch } from "react-redux";
import { openModal, closeModal } from "./modal.slice";

export const useModalPetCare = () => {
  const dispatch = useDispatch();

  const openModalPetCare = () => {
    dispatch(openModal());
  };

  const closeModalPetCare = () => {
    dispatch(closeModal());
  };

  return { openModalPetCare, closeModalPetCare };
};
