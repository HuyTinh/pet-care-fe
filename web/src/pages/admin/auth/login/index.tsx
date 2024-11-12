import { MdEmail, MdKey, MdOutlineErrorOutline } from "react-icons/md";
import { Fragment } from "react/jsx-runtime";
import { PCCheckBox } from "../../../../components/pc-checkbox";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useLoginRequestMutation } from "../../../auth.service";
import { toast } from "react-toastify";
import { setAuthenticated } from "../../../auth.slice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../../store/store";
import { useEffect } from "react";

export const AdminLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
  });
  const dispatch = useDispatch();
  const [loginRequest] = useLoginRequestMutation();
  const navigate = useNavigate();
  const role = useSelector((state: RootState) => state.authentication.role);

  const onSubmit: SubmitHandler<any> = (data) => {
    loginRequest(data).then((res) => {
      if ("error" in res) {
        toast.error((res.error as any).data.message, {
          position: "top-right",
        });
      }
      if ("data" in res) {
        const { data } = res;
        toast.success("Login successful", {
          position: "top-right",
        });
        const loginResponse: {
          token: string;
          authenticated: boolean;
        } = data.data;
        localStorage.setItem("token", loginResponse.token);
        dispatch(setAuthenticated(loginResponse.token));
      }
    });
  };

  useEffect(() => {
    switch (role?.replace("ROLE_", "")) {
      case "RECEPTIONIST":
        navigate("/receptionist");
        return;

      case "DOCTOR":
        navigate("/doctor");
        return;

      case "WAREHOUSE_MANAGER":
        navigate("/warehouse");
        return;
      case "CUSTOMER":
        navigate("/");
        return;
      default:
        navigate("/admin");
        return;
    }
  }, [navigate, role]);

  return (
    <Fragment>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-justify text-xl font-bold text-white">
          <span className="rounded-xl bg-blue-700/75 px-2 pb-2 text-4xl text-white">
            Login
          </span>{" "}
          to
          <br />
          <div className="m-3 mb-0 mt-5 inline-block">Start taking</div>
          <span className="rounded-xl bg-blue-700/75 px-2 text-3xl text-white">
            Care
          </span>{" "}
          pet
        </h1>
        <div className="my-6">
          <label className="input input-bordered flex items-center gap-2">
            <MdEmail />
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
        <div>
          <label className="input input-bordered flex items-center gap-2">
            <MdKey />
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
        <div className="my-6 flex items-center justify-between">
          <PCCheckBox />
          <div>
            <span className="cursor-pointer rounded-lg bg-blue-700/75 px-2 py-1 text-sm text-white hover:bg-white hover:text-black hover:underline">
              Forgot password
            </span>
          </div>
        </div>
        <div>
          <button type="submit" className="btn w-full text-lg outline">
            Login
          </button>
        </div>
      </form>
    </Fragment>
  );
};
