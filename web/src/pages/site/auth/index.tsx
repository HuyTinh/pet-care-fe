import { useEffect, useState } from "react";
import { PetCareModalContainer } from "../../../components/pc-modal";
import { ClientLoginForm } from "./login";
import { ClientRegisterForm } from "./register";

import { FacebookProvider, useLogin } from "react-facebook";
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
      <FacebookProvider appId="920242286586085">
        <PetCareModalContainer
          size={"md"}
          onClose={() => setFormState("LOGIN_FORM")}
        >
          {(tabs[formState as keyof Tabs] as Function)(setFormState)}
        </PetCareModalContainer>
      </FacebookProvider>
    </div>
  );
};
