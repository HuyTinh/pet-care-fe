import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useLoginWithGoogleRequestMutation } from "../../../auth.service";
import { toast } from "react-toastify";

export const PetCareGoogleLoginButton = () => {
  const [loginWithGoogleRequest, { isLoading }] = useLoginWithGoogleRequestMutation();
  const handleLoginGoogle = useGoogleLogin({
    onSuccess: (tokenResponse) =>
      loginWithGoogleRequest((tokenResponse as any).access_token).then(
        (result) => {
          if ("data" in result) {
            toast.success("Login successful", {
              position: "top-right",
            });
            (document.getElementById("authentication_modal") as any).close();
          }
        },
      ),
  });
  return (
    <>
      {
        isLoading && <div className="absolute left-0 top-0 flex h-full w-full justify-center items-center bg-black/35">
          <div className="w-64 relative">
            <img
              src="/src/shared/assets/images/loading.gif"
              className="object-cover"
              alt=""
            />
            <div className="text-white bg-black rounded-full absolute bottom-5 text-center w-full">Waiting for login...</div>
          </div>
        </div>
      }
      <GoogleLoginButton
        text="Login with Google"
        onClick={() => handleLoginGoogle()}
        className="!h-10 !text-sm"
      />
    </>
  );
};
