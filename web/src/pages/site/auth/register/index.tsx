import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterRequestMutation } from "../../../auth.service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../../auth.slice";

export const ClientRegisterForm = () => {
  const { register, handleSubmit } = useForm<any>();

  const dispatch = useDispatch();

  const [registerRequest] = useRegisterRequestMutation();

  const onSubmit: SubmitHandler<any> = (data) => {
    registerRequest({ ...data, roles: ["CUSTOMER"] }).then((result) => {
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
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-y-5">
        {/* <PetCareForm fields={Fields} /> */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="First name"
            {...register("first_name")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Last name"
            {...register("last_name")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Phone number"
            {...register("phone_number")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Email"
            {...register("email")}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="password"
            className="grow"
            placeholder="Password"
            {...register("password")}
          />
        </label>

        <button className="btn">Login</button>
      </div>
    </form>
  );
};
