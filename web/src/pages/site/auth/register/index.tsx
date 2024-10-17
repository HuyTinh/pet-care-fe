import { SubmitHandler, useForm } from "react-hook-form";
import { useRegisterRequestMutation } from "../../../auth.service";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuthenticated } from "../../../auth.slice";
import _ from "lodash";
import { MdOutlineErrorOutline } from "react-icons/md";

export const ClientRegisterForm = ({
  setFormState,
}: {
  setFormState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>({
    mode: "onSubmit",
  });

  const dispatch = useDispatch();

  const [registerRequest] = useRegisterRequestMutation();

  const onSubmit: SubmitHandler<any> = (data) => {
    registerRequest({
      ..._.omit(data, ["confirm_password"]),
      roles: ["CUSTOMER"],
      authentication_method: "LOCAL",
    }).then((res) => {
      if ("error" in res) {
        toast.error((res.error as any).data.message, {
          position: "top-right",
        });
      }
      if ("data" in res) {
        let { data } = res;
        toast.success("Register successful", {
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
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 space-y-2">
        <div className="text-3xl font-bold">Register for more</div>
        <div className="text-lg">
          to{" "}
          <span className="rounded-lg bg-blue-700/75 p-1 px-2 text-white">
            service to take care your pet
          </span>{" "}
          much more
        </div>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="flex gap-x-5">
          {/* <PetCareForm fields={Fields} /> */}
          <div className="space-y-2">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="w-full"
                placeholder="First name"
                {...register("first_name", {
                  required: "First name is empty!",
                })}
              />
            </label>
            {errors.first_name && (
              <span className="badge badge-error gap-2 text-xs text-white">
                <MdOutlineErrorOutline />
                {(errors.first_name as any).message}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="w-full"
                placeholder="Last name"
                {...register("last_name", {
                  required: "Last name is empty!",
                })}
              />
            </label>
            {errors.last_name && (
              <span className="badge badge-error gap-2 text-xs text-white">
                <MdOutlineErrorOutline />
                {(errors.last_name as any).message}
              </span>
            )}
          </div>
        </div>
        <div className="space-y-2">
          <label className="input input-bordered flex items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Phone number"
              {...register("phone_number", {
                required: "Phone number is empty!",
              })}
            />
          </label>
          {errors.phone_number && (
            <span className="badge badge-error gap-2 text-xs text-white">
              <MdOutlineErrorOutline />
              {(errors.phone_number as any).message}
            </span>
          )}
        </div>
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
            <span className="badge badge-error gap-2 text-xs text-white">
              <MdOutlineErrorOutline />
              {(errors.email as any).message}
            </span>
          )}
        </div>
        <div className="flex gap-x-5">
          <div className="space-y-2">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="password"
                className="w-full"
                placeholder="Password"
                {...register("password", {
                  required: "Password is empty!",
                })}
              />
            </label>
            {errors.password && (
              <span className="badge badge-error gap-2 text-xs text-white">
                <MdOutlineErrorOutline />
                {(errors.password as any).message}
              </span>
            )}
          </div>
          <div className="space-y-2">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="password"
                className="w-full"
                placeholder="Confirm Password"
                {...register("confirm_password", {
                  required: "Confirm password is empty!",
                  validate: (val: string) => {
                    if (watch("password") != val) {
                      return "Your passwords do no match";
                    }
                  },
                })}
              />
            </label>
            {errors.confirm_password && (
              <span className="badge badge-error gap-2 text-xs text-white">
                <MdOutlineErrorOutline />
                {(errors.confirm_password as any).message}
              </span>
            )}
          </div>
        </div>
        <div>
          <span
            className="link link-primary"
            onClick={() => setFormState("LOGIN_FORM")}
          >
            I'm already have account!
          </span>
        </div>
        <button className="btn bg-blue-700/75 text-white hover:bg-blue-700">
          Register
        </button>
      </div>
    </form>
  );
};
