import { useState } from "react";
import { ClientLoginForm } from "./login";
import { ClientRegisterForm } from "./register";
type Tabs = {
  LOGIN_FORM: (setFormState: React.Dispatch<React.SetStateAction<string>>) => JSX.Element;
  REGISTER_FORM: (setFormState: React.Dispatch<React.SetStateAction<string>>) => JSX.Element;
};

const tabs: Tabs = {
  LOGIN_FORM: (setFormState: React.Dispatch<React.SetStateAction<string>>) => (
    <ClientLoginForm setFormState={setFormState} />
  ),
  REGISTER_FORM: (
    setFormState: React.Dispatch<React.SetStateAction<string>>,
  ) => <ClientRegisterForm setFormState={setFormState} />,
};

const closeAuthModal = () => {
  (document.getElementById("authentication_modal") as any).close();
};

export const AuthModal = () => {
  const [formState, setFormState] = useState<string>("LOGIN_FORM");

  return (
    <div>
      <dialog
        id="authentication_modal"
        className="modal backdrop:!hidden"
        onClose={() => setFormState("LOGIN_FORM")}
      >
        <div className="modal-box flex max-w-md flex-col p-0">
          <div className="relative p-5">

            {(tabs[formState as keyof Tabs] as (setFormState: React.Dispatch<React.SetStateAction<string>>) => JSX.Element)(setFormState)}
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button type="button" onClick={() => closeAuthModal()}>
            close
          </button>
        </form>
      </dialog>
    </div>
  );
};
