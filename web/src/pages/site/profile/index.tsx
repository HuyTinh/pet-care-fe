import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import {
  useGetCustomerProfileQuery,
  useUpdateCustomerProfileMutation,
} from "../customer.service";
import _ from "lodash";
import { useNavigate } from "react-router-dom";
import { setUnauthenticated } from "../../auth.slice";
import { useGetAppointmentByCustomerIdQuery } from "../../admin/receptionist/appointment.service";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { ClientChangePasswordModal } from "./change-password-modal";
import { useModalPetCare } from "../../../components/pc-modal/hook";

export const ProfilePage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    mode: "onChange",
  });
  const userId = useSelector((state: RootState) => state.authentication.userId);
  const { data: customerProfileResponse, isFetching } =
    useGetCustomerProfileQuery(
      {
        userId,
      },
      { skip: !userId },
    );
  const [updateProfileRequest, { isLoading }] =
    useUpdateCustomerProfileMutation();

  // const { data: appoimentsHistoryResponse } =
  //   useGetAppointmentByCustomerIdQuery(
  //     {
  //       userId,
  //     },
  //     { skip: !userId },
  //   );

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { openModalPetCare } = useModalPetCare();

  useEffect(() => {
    if (customerProfileResponse) {
      reset(customerProfileResponse.result);
    }
  }, [customerProfileResponse]);

  const logout = () => {
    dispatch(setUnauthenticated());
    navigate("/");
  };

  const onSubmit: SubmitHandler<any> = (data) => {
    updateProfileRequest({
      userId: userId,
      data: _.omit(data, ["account_id", "id"]),
    }).then((result) => {
      if ("error" in result) {
        toast.error((result.error as any).data.message, {
          position: "top-right",
        });
      }
      if ("data" in result) {
        toast.success("Update successful", {
          position: "top-right",
        });
      }
    });
  };

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
            <form onSubmit={handleSubmit(onSubmit)}>
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
                    {...register("first_name")}
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
                    {...register("last_name")}
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
                    {...register("email")}
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
                    {...register("phone_number")}
                  />
                </label>
              </div>
              <div className="space-x-2">
                {isLoading ? (
                  <button className="btn btn-square my-5" disabled>
                    <span className="loading loading-spinner text-info"></span>
                  </button>
                ) : (
                  <button className="btn btn-square my-5">Save</button>
                )}
                <button
                  className="btn btn-neutral"
                  onClick={() => openModalPetCare()}
                  type="button"
                >
                  Change Password
                </button>
              </div>
            </form>
            <ClientChangePasswordModal
              email={customerProfileResponse.result.email}
            />
          </div>
        </div>
      </div>
    );
  return;
};
