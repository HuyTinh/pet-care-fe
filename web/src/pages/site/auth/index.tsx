import { useEffect, useState } from "react";
import { PetCareModalContent } from "../../../components/pc-modal";
import { ClientLoginForm } from "./login";
import { ClientRegisterForm } from "./register";

type Tabs = {
  LOGIN_FORM: Function;
  REGISTER_FORM: Function;
};

const tabs: Tabs = {
  LOGIN_FORM: (setFormState: React.Dispatch<React.SetStateAction<string>>) => (
    <ClientLoginForm setFormState={setFormState} />
  ),
  REGISTER_FORM: (
    setFormState: React.Dispatch<React.SetStateAction<string>>,
  ) => <ClientRegisterForm setFormState={setFormState} />,
};

export const AuthModal = () => {
  const [formState, setFormState] = useState<string>("LOGIN_FORM");

  return (
    <div>
      <PetCareModalContent
      // size={"md"}
      // onClose={() => setFormState("LOGIN_FORM")}
      >
        {(tabs[formState as keyof Tabs] as Function)(setFormState)}
      </PetCareModalContent>
    </div>
  );
};
