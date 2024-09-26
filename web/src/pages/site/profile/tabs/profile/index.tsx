import { useSelector } from "react-redux";

import _ from "lodash";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { ClientChangePasswordModal } from "../../change-password";
import { RootState } from "../../../../../store/store";
import {
  useGetCustomerProfileQuery,
  useUpdateCustomerProfileMutation,
} from "../../../customer.service";
import { useModalPetCare } from "../../../../../components/pc-modal/hook";

export const ProfileTab = () => {
  const { register, handleSubmit, reset } = useForm<any>({
    mode: "onChange",
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      phone_number: "",
    },
  });
  const userId = useSelector((state: RootState) => state.authentication.userId);
  const { data: customerProfileResponse } = useGetCustomerProfileQuery(
    {
      userId,
    },
    { skip: !userId },
  );
  const [updateProfileRequest, { isLoading }] =
    useUpdateCustomerProfileMutation();

  const { openModalPetCare } = useModalPetCare();

  useEffect(() => {
    if (customerProfileResponse) {
      reset(customerProfileResponse.result);
    }
  }, [customerProfileResponse]);

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

  //   if (!isFetching)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="border-b border-solid border-gray-300 px-6 pb-2">
            <div className="flex">
              <div className="avatar">
                <div className="mask mask-squircle w-24">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center px-4">
                <div className="text-xl font-bold">My account</div>
                <div>
                  <label className="form-control w-full max-w-xs">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="w-full text-zinc-400 disabled:bg-transparent"
                      disabled
                      {...register("email")}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-x-5">
            <div className="p-2 py-3 font-bold">
              <span className="border-b-2 border-black p-2">
                Personal Details
              </span>
            </div>
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
        <div className="flex gap-x-5 py-5">
          {isLoading ? (
            <button className="btn btn-square" disabled>
              <span className="loading loading-spinner text-info"></span>
            </button>
          ) : (
            <button className="btn btn-square">Save</button>
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
        email={customerProfileResponse?.result.email}
      />
    </div>
  );
};
