import { SubmitHandler, useForm } from "react-hook-form";
import { useLoginRequestMutation } from "../../../auth.service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../../auth.slice";
import { MdOutlineErrorOutline } from "react-icons/md";

import { useModalPetCare } from "../../../../components/pc-modal/hook";
export const ClientLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
  });
  const dispatch = useDispatch();

  const { closeModal } = useModalPetCare();

  const [loginRequest] = useLoginRequestMutation();

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

        closeModal();
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
                required: "Email is empty",
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
                required: "Password",
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
        <button className="btn bg-blue-700/75 text-white hover:bg-blue-700">
          Login
        </button>
      </div>
    </form>
  );
};
