import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
import { useEffect } from "react";
import { IEmployee } from "../../../../types/employee.type";
import { useGetEmployeeProfileQuery } from "../../employee.service";
import { MdOutlineErrorOutline } from "react-icons/md";

export const AdminProfileModal = () => {


  const {
    handleSubmit,
    register,
    reset,
    formState: { errors }
  } = useForm<IEmployee>({});

  const userId = useSelector((state: RootState) => state.authentication.userId);
  const { data: employeeProfileResponse } = useGetEmployeeProfileQuery(
    {
      userId,
    },
    { skip: !userId },
  );


  useEffect(() => {
    reset(employeeProfileResponse?.data)
  }, [employeeProfileResponse, reset])


  const onSubmit = async (data: any) => {
    console.log(data);
  };

  return (
    <dialog id="admin_profile_modal" className="modal backdrop:!hidden">
      <div className="modal-box w-full max-w-3xl border-2 border-black">
        <div className="text-center text-3xl">Profile</div>
        <form
          method="post"
          onSubmit={handleSubmit(onSubmit)}
          encType="multipart/form-data"
          className="flex flex-wrap justify-between"
        >
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">First name:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("first_name", {
                required: "First name is empty!",
              })}
            />
            {errors?.first_name && (
              <span className="badge badge-error mt-2 gap-2 text-white">
                <MdOutlineErrorOutline />
                {(errors?.first_name as any).message}
              </span>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Last name:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("last_name", {
                required: "Last name is empty!",
              })}
            />
            {errors?.last_name && (
              <span className="badge badge-error mt-2 gap-2 text-white">
                <MdOutlineErrorOutline />
                {(errors?.last_name as any).message}
              </span>
            )}
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone number:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("phone_number", {
                required: "Phone number is empty!",
              })}
            />
            {errors?.phone_number && (
              <span className="badge badge-error mt-2 gap-2 text-white">
                <MdOutlineErrorOutline />
                {(errors?.phone_number as any).message}
              </span>
            )}
          </label>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
