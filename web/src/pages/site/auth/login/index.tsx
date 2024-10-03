import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginRequestMutation } from "../../../auth.service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../../auth.slice";
import { MdOutlineErrorOutline } from "react-icons/md";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { FacebookProvider } from "react-facebook";

import { PetCareGoogleLoginButton } from "../oauth2/google";
import { PetCareFacebookLoginButton } from "../oauth2/facebook";
export const ClientLoginForm = ({
  setFormState,
}: {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
  });
  const dispatch = useDispatch();

  const [loginRequest] = useLoginRequestMutation();

  const GG_CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const FB_APP_ID = import.meta.env.VITE_FACEBOOK_APP_ID;

  const onSubmit: SubmitHandler<any> = (data) => {
    loginRequest(data).then((result) => {
      if ("error" in result) {
        toast.error((result.error as any).data.message, {
          position: "top-right",
        });
      }
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

        (document.getElementById("authentication_modal") as any).close();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-5 space-y-2">
        <div className="text-3xl font-bold">Join with us</div>
        <div className="text-lg">
          to{" "}
          <span className="rounded-lg bg-blue-700/75 p-1 px-2 text-white">
            take care your pet
          </span>{" "}
          much more
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        {/* <PetCareForm fields={Fields} /> */}

        <div className="space-y-2">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Email"
              {...register("email", {
                required: "Email is empty!",
              })}
            />
          </label>
          {errors.email && (
            <span className="badge badge-error gap-2 text-white">
              <MdOutlineErrorOutline />
              {(errors.email as any).message}
            </span>
          )}
        </div>
        <div className="space-y-5">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="password"
              className="grow"
              placeholder="Password"
              {...register("password", {
                required: "Password is empty!",
              })}
            />
          </label>
          {errors.password && (
            <span className="badge badge-error gap-2">
              <MdOutlineErrorOutline />
              {(errors.password as any).message}
            </span>
          )}
        </div>
        <span className="flex items-center justify-between">
          <span className="flex">
            <div className="form-control">
              <label className="label cursor-pointer space-x-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-sm"
                />
                <span className="label-text">Remember me</span>
              </label>
            </div>
          </span>
          <span
            className="link link-primary !inline-block"
            onClick={() => setFormState("REGISTER_FORM")}
          >
            Register new account!
          </span>
        </span>
        <button className="btn bg-blue-700/75 text-white hover:bg-blue-700">
          Login
        </button>
        <div>
          <div className="divider">OR</div>
          <div className="px-10">
            <GoogleOAuthProvider clientId={GG_CLIENT_ID}>
              <PetCareGoogleLoginButton />
            </GoogleOAuthProvider>

            <FacebookProvider appId={FB_APP_ID}>
              <PetCareFacebookLoginButton />
            </FacebookProvider>
          </div>
        </div>
      </div>
    </form>
  );
};
