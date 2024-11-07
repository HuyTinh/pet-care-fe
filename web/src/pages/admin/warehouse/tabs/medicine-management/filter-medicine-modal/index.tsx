import { useForm } from "react-hook-form";

interface FilterMedicineModalProps {
  onFilterSubmit: (filters: any) => void; // Truyền prop onFilterSubmit
}

export const FilterMedicineModal = ({
  onFilterSubmit,
}: FilterMedicineModalProps) => {
  const { register, handleSubmit } = useForm<any>();

  const onSubmit = (data: any) => {
    onFilterSubmit(data); // Gọi hàm onFilterSubmit và truyền dữ liệu lọc
    console.log("fillter data :", data);
    (document.getElementById("filter_medicine_modal") as any).close(); // Đóng modal sau khi apply
  };

  return (
    <dialog id="filter_medicine_modal" className="modal backdrop:!hidden">
      <div className="modal-box w-full max-w-2xl border-2 border-black">
        <div className="text-center text-3xl">Filter Medicine</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-5">
            <label className="label-text text-base font-bold">
              Filter by product expiry date:
            </label>
          </div>
          <div className="flex gap-x-10 p-4 py-3">
            <label className="form-control w-full max-w-md justify-between">
              <div>
                <span className="label-text font-semibold">
                  Manufacture Date:
                </span>
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register("manufacturingDate")}
              />
            </label>
            <label className="form-control w-full max-w-md justify-between">
              <div>
                <span className="label-text font-semibold">Expiry Date:</span>
              </div>
              <input
                type="date"
                className="input input-bordered w-full"
                {...register("expiryDate")}
              />
            </label>
          </div>

          <div className="mt-3">
            <label className="label-text text-base font-bold">
              Filter by product status:
            </label>
          </div>
          <div className="flex gap-x-10 p-4 py-3">
            <label className="form-control w-full max-w-md justify-between">
              <div className="flex items-center">
                <input
                  id="active"
                  type="radio"
                  className="radio-info radio"
                  value="ACTIVE"
                  {...register("status")}
                />
                <label className="ml-5" htmlFor="active">
                  ACTIVE
                </label>
              </div>
            </label>
            <label className="form-control w-full max-w-md justify-between">
              <div className="flex items-center">
                <input
                  id="inactive"
                  type="radio"
                  value="INACTIVE"
                  className="radio-info radio"
                  {...register("status")}
                />
                <label className="ml-5" htmlFor="inactive">
                  INACTIVE
                </label>
              </div>
            </label>
          </div>

          <div className="mt-3">
            <label className="label-text text-base font-bold">
              Filter by product price:
            </label>
          </div>
          <div className="flex gap-x-10 p-4 py-3">
            <label className="form-control w-full max-w-md justify-between">
              <div>
                <span className="label-text font-semibold">Min price:</span>
              </div>
              <input
                {...register("minPrice")}
                type="number"
                className="input input-bordered w-full"
                placeholder="Type here"
                min={0}
              />
            </label>
            <label className="form-control w-full max-w-md justify-between">
              <div>
                <span className="label-text font-semibold">Max price:</span>
              </div>
              <input
                {...register("maxPrice")}
                type="number"
                className="input input-bordered w-full"
                placeholder="Type here"
                min={0}
              />
            </label>
          </div>

          <div className="mt-5 flex justify-center">
            <button type="submit" className="btn btn-info font-bold text-white">
              Apply
            </button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
