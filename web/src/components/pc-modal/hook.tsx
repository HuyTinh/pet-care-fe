export const useModalPetCare = () => {
  const openModal = () => {
    (document.getElementById("pc-modal") as any)?.showModal();
  };

  const closeModal = () => {
    (document.getElementById("pc-modal") as any)?.close();
  };

  return { openModal, closeModal };
};
