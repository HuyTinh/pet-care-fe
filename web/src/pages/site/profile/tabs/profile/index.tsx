import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import _ from "lodash";
import { SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ClientChangePasswordModal } from "./change-password";
import { RootState } from "../../../../../store/store";
import {
  useGetCustomerProfileQuery,
  useUpdateCustomerProfileMutation,
} from "../../../customer.service";
import { useCookies } from "react-cookie";
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
  const [tab, setTab] = useState(0);
  const [cookies, setCookie] = useCookies<any>();
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

  const emailNotification = (e: any) => {
    let expires = new Date();

    let cookieName = `email-notification-${userId}`;
    setCookie(cookieName, e.target.checked, {
      path: "/",
      expires,
    });
  };

  //   if (!isFetching)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <div className="border-b border-solid border-gray-300 px-8 pb-2">
            <div className="flex">
              <div className="avatar">
                <div className="mask mask-squircle w-24">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-center gap-y-2 px-4">
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
            <div className="space-x-10 p-2 py-3 font-bold">
              <span
                className={`border-b-2 ${tab === 0 ? "border-black" : "border-transparent"} cursor-pointer p-2`}
                onClick={() => setTab(0)}
              >
                Personal Details
              </span>
              <span
                className={`border-b-2 ${tab === 1 ? "border-black" : "border-transparent"} cursor-pointer p-2`}
                onClick={() => setTab(1)}
              >
                Setting
              </span>
            </div>
          </div>
        </div>
        <div className="min-h-72 pt-5">
          {tab === 0 && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
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
            </motion.div>
          )}
          {tab === 1 && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
              }}
              transition={{
                duration: 0.6,
              }}
            >
              <div className="form-control w-56">
                <label className="label cursor-pointer">
                  <span className="label-text text-lg">Email notification</span>
                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    onChange={(e) => emailNotification(e)}
                    checked={cookies[`email-notification-${userId}`]}
                  />
                </label>
              </div>
            </motion.div>
          )}
        </div>
      </form>
      <ClientChangePasswordModal
        email={customerProfileResponse?.result.email}
      />
    </div>
  );
};
