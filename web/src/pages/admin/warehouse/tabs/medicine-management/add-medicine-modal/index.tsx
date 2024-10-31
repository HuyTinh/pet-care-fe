
import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineErrorOutline } from "react-icons/md";


export const AddMedicineModal = () => {
  const {
    register,
    // handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<any>({
  });
  const [image, setImage] = useState(null);
  const handleImageChange = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage((reader as any)?.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <dialog id="add_medicine_modal" className="modal backdrop:!hidden">
      <div className="modal-box w-full max-w-3xl border-2 border-black">
        <div className="text-center text-3xl ">
          Add Medicine
        </div>
        {/* onSubmit={handleSubmit(onSubmit)} */}
        <form action="" >
          <div className="flex justify-around gap-x-5 mt-5 ml-5">
            <div className="avatar">
              <div className="w-40 rounded-xl">
                <img src={image || `src/assets/images/${getValues("image")}`} />
              </div>
              <input
                type="file"
                className="absolute inset-0 opacity-0 cursor-pointer"
                onChange={handleImageChange}
              />
            </div>
            <div className="flex flex-col w-2/3">
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
              <div className="flex justify-center gap-x-10 w-[96%]">
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
                    min={0}
                  />
                </label>
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
              </div>
              <label className="form-control w-full max-w-md">
                <div className="label">
                  <span className="label-text font-bold">Manufacturer:</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-md"
                  {...register("manufactures", {
                    required: "Manufactures is empty!",
                  })}
                />
                {errors?.name && (
                  <span className="badge badge-error mt-2 gap-2 text-white">
                    <MdOutlineErrorOutline />
                    {(errors?.name as any).message}
                  </span>
                )}
              </label>
            </div>
          </div>
          <div className="flex gap-x-10">
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
            <label className="form-control w-full max-w-md justify-between">
              <div>
                <span className="label-text font-bold">Date Import</span>{" "}
                <span className="label-text">(month/day/year)</span>:
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register("date_import")}
              />
            </label>
          </div>
          <div className="flex gap-x-10 py-2">
            <label className="form-control w-full max-w-md justify-between">
              <div>
                <span className="font-bold label-text">Manufacture Date</span>{" "}
                <span className="not-italic label-text">(month/day/year)</span>:
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register("manufacturing_date")}
              />
            </label>
            <label className="form-control w-full max-w-md justify-between">
              <div>
                <span className="font-bold label-text"> Expiry Date</span>{" "}
                <span className="label-text">(month/day/year)</span>:
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register("expiry_date")}
              />
            </label>
          </div>
          <div className="flex justify-center gap-x-10">

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
