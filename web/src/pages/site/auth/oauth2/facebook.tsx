import { useDispatch } from "react-redux";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useLoginWithFacebookRequestMutation } from "../../../auth.service";
import { toast } from "react-toastify";

import { setAuthenticated } from "../../../auth.slice";
import { useModalPetCare } from "../../../../components/pc-modal/hook";
import { useLogin, LoginButton } from "react-facebook";

export const PetCareFacebookLoginButton = () => {
  const dispatch = useDispatch();
  const { closeModalPetCare } = useModalPetCare();
  const { login } = useLogin();
  const [loginFacebookRequest] = useLoginWithFacebookRequestMutation();
  //   const { login } = useLogin({
  //     onResponse: ,
  //     onError: handleError,
  //     scope: "public_profile,email", // Specify scopes as needed
  //   });

  function handleLoginFacebook() {
    login({
      scope: "public_profile,email,user_gender",
    })
      .then((response) => {
        let { authResponse } = response;
        loginFacebookRequest((authResponse as any).accessToken).then(
          (result) => {
            // if ("error" in result) {
            //   toast.error((result.error as any).data.message, {
            //     position: "top-right",
            //   });
            // }
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
        );
      })
      .catch((err) => {});
  }
  return (
    // <>
    //   <LoginButton scope="public_profile,email" onSuccess={handleLoginFacebook}>
    //     Login with Facebook
    //   </LoginButton>
    // </>
    <FacebookLoginButton
      onClick={() => {
        handleLoginFacebook();
      }}
      text="Login with Facebook"
      className="!h-10 !text-sm"
    />
  );
};
