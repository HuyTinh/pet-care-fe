import _ from "lodash";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { setUnauthenticated } from "../../auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useGetCustomerProfileQuery } from "../customer.service";
import { motion } from "framer-motion";

export const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector((state: RootState) => state.authentication.userId);
  const { data: customerProfileResponse } = useGetCustomerProfileQuery(
    {
      userId,
    },
    { skip: !userId },
  );
  const logout = () => {
    dispatch(setUnauthenticated());
    navigate("/");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-full bg-gray-200 px-20 py-32">
        <div className="text-md breadcrumbs mb-10 border-b border-solid border-gray-300 px-2">
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Account</a>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-10">
          <div className="flex w-72 flex-col gap-y-5">
            <div className="flex gap-x-5 rounded-lg bg-white p-2">
              <div className="avatar">
                <div className="mask mask-squircle w-24">
                  <img
                    src="/src/assets/images/account_member_logo.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-y-1">
                <div className="font-bold">Welcome back, </div>
                <div className="text-center text-sm">
                  {customerProfileResponse?.data.first_name +
                    " " +
                    customerProfileResponse?.data.last_name}
                </div>
              </div>
            </div>
            <ul className="menu overflow-hidden rounded-lg bg-white p-0 [&_li>*]:rounded-none [&_li>*]:p-5 [&_li>*]:text-xl hover:[&_li>*]:bg-transparent">
              <li>
                <NavLink to={"/account"} end>
                  Account
                </NavLink>
              </li>
              <li>
                <NavLink to={"/account/appointment"}>Appointment</NavLink>
              </li>
            </ul>
            <button
              className="btn-infor btn btn-outline"
              onClick={() => logout()}
            >
              Log out
            </button>
          </div>

          <div className="flex flex-1 flex-col rounded-lg bg-white p-10">
            <Outlet />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
