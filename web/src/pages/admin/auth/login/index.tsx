import { MdEmail, MdKey } from "react-icons/md";
import { Fragment } from "react/jsx-runtime";
import { PCCheckBox } from "../../../../components/pc-checkbox";

export const LoginForm = () => {
  return (
    <Fragment>
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
      <div>
        <label className="input input-bordered flex items-center gap-2">
          <MdEmail />
          <input type="text" className="grow" placeholder="Email" />
        </label>
      </div>
      <div>
        <label className="input input-bordered flex items-center gap-2">
          <MdKey />
          <input type="password" className="grow" placeholder="Password" />
        </label>
      </div>
      <div className="flex items-center justify-between">
        <PCCheckBox />
        <div>
          <span className="cursor-pointer rounded-lg bg-blue-700/75 px-2 py-1 text-sm text-white hover:bg-white hover:text-black hover:underline">
            Forgot password
          </span>
        </div>
      </div>
      <div>
        <button className="btn w-full text-lg outline">Login</button>
      </div>
    </Fragment>
  );
};
