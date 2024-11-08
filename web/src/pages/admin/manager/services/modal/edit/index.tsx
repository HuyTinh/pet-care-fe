import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
export const ServiceEditModal = () => {
    const {
        register,
        // reset
    } = useForm<any>({});

    const handlCreate = () => {
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
                toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
        });
        Toast.fire({
            icon: "success",
            title: "Update is successfully"
        });
    }
    return (
        <dialog id="service_edit_modal" className="modal backdrop:!hidden">
            <div className="modal-box w-full max-w-4xl border-2 border-black">
                <div className="text-center text-3xl font-bold text-[#0099CF]">Service: 
                    <span className="!text-2xl font-semibold"> #PC8</span>
                </div>
                <div className="ml-5 mt-5 gap-x-10 ">
                    <div className="flex gap-x-10 justify-center">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text font-bold ">Service name:</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-md"
                                {...register("service_name")}
                            />

                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text font-bold">Price:</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-md"
                                {...register("price")}
                            />
                        </label>
                    </div>
                    <div className="flex gap-x-10 justify-center mt-5">
                        <label className="form-control w-full max-w-md justify-between">
                            <div className="label">
                                <span className="label-text font-bold">Service type:</span>
                            </div>
                            <select
                                className="select select-bordered"
                                {...register("servicetype")}
                            >
                                {["Vaccination", "Annual Checkup", "Basic Training"]?.map((val, index) => (
                                    <option key={index} value={val}>
                                        {val}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="mt-5 flex justify-end">
                        <button type="submit" className="btn btn-outline font-bold"
                            onClick={handlCreate}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </dialog>
    );
};
