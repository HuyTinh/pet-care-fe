import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineErrorOutline } from "react-icons/md";
import { IMedicine } from "../../../../../../types/medicine.type";

type EditMedicineModalProps = {
  medicine: IMedicine;
};

export const EditMedicineModal = ({ medicine }: EditMedicineModalProps) => {
  const {
    register,
    // handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm<any>({
    mode: "all",
  });
  console.log("hihi: ", getValues("manufactures"));

  // const onSubmit: SubmitHandler<any> = (data) => { };
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
      <div className="modal-box w-full max-w-3xl border-2 border-black">
        <div className="text-center text-3xl ">
          Change Medicine Info
        </div>
        {/* onSubmit={handleSubmit(onSubmit)} */}
        <form action="" >
          <div className="flex justify-center gap-x-10">
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="font-bold label-text">Name:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-md"
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
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text font-bold">Quantity:</span>
              </div>
              <input
                type="number"
                defaultValue={0}
                step={1}
                className="input input-bordered w-full max-w-md"
                {...register("quantity")}
              />
            </label>
          </div>
          <div className="flex gap-x-10">
            <label className="form-control w-full max-w-md justify-between">
              <div className="label">
                <span className="label-text font-bold">Price:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-md"
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
            <label className="form-control w-full max-w-md justify-between">
              <div className="label">
                <span className="label-text font-bold">Status:</span>
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
          <div className="flex gap-x-10 py-2">
            <label className="form-control w-full max-w-md justify-between">
              <div>
                <span className="font-bold">Manufacture Date</span>{" "}
                <span className="underline ">(month/day/year)</span>:
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register("manufacturing_date")}
              />
            </label>
            <label className="form-control w-full max-w-md justify-between">
              <div>
                <span className="font-bold"> Expiry Date</span>{" "}
                <span className="underline">(month/day/year)</span>:
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register("expiry_date")}
              />
            </label>
          </div>
          <div className="flex justify-center gap-x-10">
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text font-bold">Manufacturer:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-sm"
                {...register("manufactures", {
                  required: "Manufactures is empty!",
                })}
              />
              {/* {getValues("manufactures")?.map((e : any) => e.name)} */}
              {errors?.name && (
                <span className="badge badge-error mt-2 gap-2 text-white">
                  <MdOutlineErrorOutline />
                  {(errors?.name as any).message}
                </span>
              )}
            </label>
            <label className="form-control w-full max-w-md justify-between">
              <div>
              <span className="label-text font-bold">Date Import</span>{" "}
                <span className=" underline">(month/day/year)</span>:
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register("date_import")}
              />
            </label>
          </div>
          <div className="mt-5 flex justify-end">
            <button className="btn btn-outline font-bold">Save</button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};