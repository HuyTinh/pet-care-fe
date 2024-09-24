import { PetCareModal } from "../../../components/pc-modal";
import { ClientLoginForm } from "./login";
import { ClientRegisterForm } from "./register";

const tabs = {
  login: ClientLoginForm,
  register: ClientRegisterForm,
};

export const AuthModal = () => {
  return (
    <div>
      <PetCareModal size={"md"}>
        <ClientLoginForm />
      </PetCareModal>
    </div>
  );
};
