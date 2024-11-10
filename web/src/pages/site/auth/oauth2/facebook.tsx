import { useDispatch } from "react-redux";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useLoginWithFacebookRequestMutation } from "../../../auth.service";
import { toast } from "react-toastify";

import { setAuthenticated } from "../../../auth.slice";
import { useLogin } from "react-facebook";

export const PetCareFacebookLoginButton = () => {
  const dispatch = useDispatch();
  const { login } = useLogin();
  const [loginFacebookRequest] = useLoginWithFacebookRequestMutation();

  function handleLoginFacebook() {
    login({
      scope: "public_profile,email,user_gender",
    })
      .then((res) => {
        const { authResponse } = res;
        loginFacebookRequest((authResponse as any).accessToken).then(
          (result) => {
            if ("data" in result) {
              const { data } = result;
              toast.success("Login successful", {
                position: "top-right",
              });
              const loginResponse: {
                token: string;
                authenticated: boolean;
              } = data.data;
              localStorage.setItem("token", loginResponse.token);
              dispatch(setAuthenticated(loginResponse.token));
              (document.getElementById("authentication_modal") as any).close();
            }
          },
        );
      })
      .catch(() => { });
  }
  return (
    <FacebookLoginButton
      onClick={() => {
        handleLoginFacebook();
      }}
      text="Login with Facebook"
      className="!h-10 !text-sm"
    />
  );
};
