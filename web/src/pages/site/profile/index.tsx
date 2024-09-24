import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useGetCustomerProfileQuery } from "../customer.service";
import { useNavigate } from "react-router-dom";
import { setUnauthenticated } from "../../auth.slice";

export const ProfilePage = () => {
  const userId = useSelector((state: RootState) => state.authentication.userId);
  const { data: customerProfileData, isFetching } = useGetCustomerProfileQuery({
    userId,
  });

  // const { data: appoimentsHistoryData } = useGetAppointmentByCustomerIdQuery(9);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(setUnauthenticated());
    navigate("/");
  };

  // useEffect(() => {
  //   console.log(appoimentsHistoryData?.result);
  // }, [appoimentsHistoryData]);

  if (!isFetching)
    return (
      <div className="mt-32 px-20">
        <div className="flex">
          <div className="flex flex-col gap-y-5">
            <button className="btn">Profile</button>
            <button className="btn">Appointment</button>
            <button
              className="btn btn-outline btn-error"
              onClick={() => logout()}
            >
              Log out
            </button>
          </div>
          <div className="flex flex-1 flex-col items-center py-10">
            <div className="avatar">
              <div className="mask mask-squircle w-24">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
              </div>
            </div>
            <div className="flex gap-x-5">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">First name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  defaultValue={customerProfileData.result.first_name}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Last name</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  defaultValue={customerProfileData.result.last_name}
                />
              </label>
            </div>
            <div className="flex gap-x-5">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Email:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  readOnly
                  defaultValue={customerProfileData.result.email}
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Phone number:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                  defaultValue={customerProfileData.result.phone_number}
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  return;
};
