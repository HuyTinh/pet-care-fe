import { useForm } from "react-hook-form";


export const PrescriptionModal = () => {
    const {
        register,
        // reset
    } = useForm<any>({});
    return (
        <dialog id="prescription_modal" className="modal backdrop:!hidden">
            <div className="modal-box w-full max-w-4xl border-2 border-black">
                <div className="text-center text-3xl font-bold">Prescription <span className="!text-[#0099CF]">#10</span></div>
                {/* <div className="ml-5 mt-5 gap-x-10 ">
                    <div className="flex gap-x-10 justify-center">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                            <span className="label-text font-bold">Pet name:</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-md"
                                {...register("name")}
                            />

                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text font-bold">Weight:</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-md"
                                {...register("weight")}
                            />
                        </label>
                    </div>
                    <div className="flex gap-x-10 justify-center">
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text font-bold">Age:</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-md"
                                {...register("age", {
                                    required: "Name is empty!",
                                })}
                            />
                        </label>
                        <label className="form-control w-full max-w-md">
                            <div className="label">
                                <span className="label-text font-bold">Species:</span>
                            </div>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="input input-bordered w-full max-w-md"
                                {...register("species")}
                            />
                        </label>
                    </div>
                </div> */}
            </div>
        </dialog>
    );
};
