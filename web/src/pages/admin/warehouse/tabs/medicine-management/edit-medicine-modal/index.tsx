import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { MdOutlineErrorOutline } from "react-icons/md";
import { IMedicine } from "../../../../../../types/medicine.type";
import { toast } from "react-toastify";

type EditMedicineModalProps = {
  medicine: IMedicine;
};

export const EditMedicineModal = ({ medicine }: EditMedicineModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    mode: "all",
  });

  const onSubmit: SubmitHandler<any> = (data) => {};
  // updateAppointment({
  //   appointmentId: appointment.id,
  //   updateAppointment: {
  //     ...data,
  //     pets: pets,
  //     services: services,
  //   },
  // }).then(() => {
  //   toast.success("Change appointment info successful", {
  //     position: "top-right",
  //   });
  // });

  useEffect(() => {
    if (medicine) {
      // setServices(medicine?.services || []);
      // setPets(medicine?.pets || []);
      reset(medicine);
    }
  }, [medicine]);

  return (
    <dialog id="edit_medicine_modal" className="modal backdrop:!hidden">
      <div className="modal-box w-full max-w-xl border-2 border-black">
        <div className="text-center text-3xl font-bold">
          Change Medicine Info
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center gap-x-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("name", {
                  required: "Name is empty!",
                })}
              />
              {errors?.name && (
                <span className="badge badge-error mt-2 gap-2 text-white">
                  <MdOutlineErrorOutline />
                  {(errors?.name as any).message}
                </span>
              )}
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Quantity:</span>
              </div>
              <input
                type="number"
                defaultValue={0}
                step={1}
                className="input input-bordered w-full max-w-xs"
                {...register("quantity")}
              />
            </label>
          </div>
          <div className="flex gap-x-5">
            <label className="form-control w-full max-w-xs justify-between">
              <div className="label">
                <span className="label-text">Price:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("price", {
                  required: "Price is empty!",
                })}
              />
              {errors?.price && (
                <span className="badge badge-error mt-2 gap-2 text-white">
                  <MdOutlineErrorOutline />
                  {(errors.price as any)?.message}
                </span>
              )}
            </label>
            <label className="form-control w-full max-w-xs justify-between">
              <div className="label">
                <span className="label-text">Status:</span>
              </div>
              <select
                className="select select-bordered"
                {...register("status")}
              >
                {["ACTIVE", "INACTIVE"]?.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <div className="flex gap-x-2 py-2">
            <label className="form-control w-full max-w-xs justify-between">
              <div>
                Manufacturing Date{" "}
                <span className="font-bold underline">(month/day/year)</span>:
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register("manufacturing_date")}
              />
            </label>
            <label className="form-control w-full max-w-xs justify-between">
              <div>
                Expiry Date{" "}
                <span className="font-bold underline">(month/day/year)</span>:
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register("expiry_date")}
              />
            </label>
          </div>
          <div>
            <button className="btn btn-outline">Save</button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
