
import { useForm } from "react-hook-form";


export const FilterMedicineModal = () => {
    const {
        register,
        // handleSubmit,
    } = useForm<any>({
    });

    return (
        <dialog id="filter_medicine_modal" className="modal backdrop:!hidden">
            <div className="modal-box w-full max-w-2xl border-2 border-black">
                <div className="text-center text-3xl ">
                    Filter Medicine
                </div>
                {/* onSubmit={handleSubmit(onSubmit)} */}
                <form action="" >
                    <div className="mt-5">
                        <label className="font-bold label-text text-base">
                            Filter by product expiry date:
                        </label>
                    </div>
                    <div className="flex gap-x-10 py-3 p-4">
                        <label className="form-control w-full max-w-md justify-between">
                            <div>
                                <span className="font-semibold label-text">Manufacture Date:</span>{" "}
                            </div>
                            <input
                                type="date"
                                className="input input-bordered w-full"
                                {...register("manufacturing_date")}
                            />
                        </label>
                        <label className="form-control w-full max-w-md justify-between">
                            <div>
                                <span className="font-semibold label-text"> Expiry Date:</span>{" "}
                            </div>
                            <input
                                type="date"
                                className="input input-bordered w-full"
                                {...register("expiry_date")}
                            />
                        </label>
                    </div>
                    <div className="mt-3">
                        <label className="font-bold label-text text-base">
                            Filter by product status:
                        </label>
                    </div>
                    <div className="flex gap-x-10 py-3 p-4">
                        <label className="form-control w-full max-w-md justify-between">
                            <div className="flex items-center">
                                <input type="radio" className="radio radio-info" defaultChecked
                                    {...register("gender")}
                                />
                                <label className="ml-5">ACTIVE</label>
                            </div>

                        </label>
                        <label className="form-control w-full max-w-md justify-between">
                            <div className="flex items-center">
                                <input type="radio" className="radio radio-info"
                                    {...register("gender")}
                                />
                                <label className="ml-5">INACTIVE</label>
                            </div>
                        </label>
                    </div>
                    <div className="mt-3">
                        <label className="font-bold label-text text-base">
                            Filter by product price:
                        </label>
                    </div>
                    <div className="flex gap-x-10 py-3 p-4">
                        <label className="form-control w-full max-w-md justify-between">
                            <div>
                                <span className="font-semibold label-text">Min price:</span>{" "}
                            </div>
                            <input
                                type="number"
                                className="input input-bordered w-full"
                                placeholder="Type here"
                            />
                        </label>
                        <label className="form-control w-full max-w-md justify-between">
                            <div>
                                <span className="font-semibold label-text"> Max price:</span>{" "}
                            </div>
                            <input
                                type="number"
                                className="input input-bordered w-full"
                                placeholder="Type here"
                            />
                        </label>
                    </div>
                    <div className="mt-5 flex justify-center">
                        <button className="btn btn-info font-bold text-white">Apply</button>
                    </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
};
