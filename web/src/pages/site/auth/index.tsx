import { useState } from "react";
import { PetCareModalContainer } from "../../../components/pc-modal";
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
      <PetCareModalContainer
        size={"md"}
        onClose={() => setFormState("LOGIN_FORM")}
      >
        <div className="relative p-5">
          {/* {
            <div className="absolute left-0 top-0 flex h-full w-full justify-center bg-black/10">
              <span className="loading loading-spinner loading-lg text-info"></span>
            </div>
          } */}
          {(tabs[formState as keyof Tabs] as Function)(setFormState)}
        </div>
      </PetCareModalContainer>
    </div>
  );
};
