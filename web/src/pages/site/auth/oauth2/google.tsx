import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useLoginWithGoogleRequestMutation } from "../../../auth.service";
import { toast } from "react-toastify";

import { setAuthenticated } from "../../../auth.slice";
import { useModalPetCare } from "../../../../components/pc-modal/hook";

export const PetCareGoogleLoginButton = () => {
  const dispatch = useDispatch();
  const { closeModalPetCare } = useModalPetCare();
  const [loginWithGoogleRequest] = useLoginWithGoogleRequestMutation();
  const handleLoginGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) =>
      loginWithGoogleRequest((tokenResponse as any).access_token).then(
        (result) => {
          if ("data" in result) {
            let { data } = result;
            toast.success("Login successful", {
              position: "top-right",
            });
            const loginResponse: {
              token: string;
              authenticated: boolean;
            } = data.result;
            localStorage.setItem("token", loginResponse.token);
            dispatch(setAuthenticated(loginResponse.token));
            closeModalPetCare();
          }
        },
      ),
  });
  return (
    <GoogleLoginButton
      text="Login with Google"
      onClick={() => handleLoginGoogle()}
      className="!h-10 !text-sm"
    />
  );
};
