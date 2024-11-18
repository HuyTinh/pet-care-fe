import { useForm } from "react-hook-form";
import { TbFilterX } from "react-icons/tb";
const AppointmentFilterModal = () => {
    const {
        register,
        // reset
    } = useForm<any>({});
    return (
        <dialog id="appointment_filter_modal" className="modal backdrop:!hidden">
            <div className="modal-box w-full max-w-4xl border-2 border-black">
                <div className="text-center text-3xl font-bold text-[#0099CF]">Appointment</div>
                <div className="ml-5 mt-5 gap-x-10 ">
                    <div className="flex gap-x-10 mt-2">
                        <label className="form-control w-full max-w-md justify-between">
                            <div>
                                <span className="label-text font-bold">From date</span>{" "}
                                <span className="label-text">(month/day/year)</span>:
                            </div>
                            <input
                                type="date"
                                className="input input-bordered w-full"
                                {...register("from_date",
                                    { required: "Manufacturing Date is empty!" }
                                )}
                            />

                        </label>
                        <label className="form-control w-full max-w-md justify-between">
                            <div>
                                <span className="label-text font-bold">To date</span>{" "}
                                <span className="label-text">(month/day/year)</span>:
                            </div>
                            <input
                                type="date"
                                className="input input-bordered w-full"
                                {...register("to_date",
                                    { required: "Manufacturing Date is empty!" }
                                )}
                            />
                        </label>
                    </div>
                    <div className="flex gap-x-10 px-10 py-3 mt-5">
                        <label className="form-control w-full max-w-md justify-between">
                            <div className="flex items-center">
                                <input
                                    id="today"
                                    type="radio"
                                    className="radio-info radio"
                                    value="Today"
                                    {...register("day")}
                                />
                                <label className="ml-5 font-bold" htmlFor="active">
                                    Today
                                </label>
                            </div>
                        </label>
                        <label className="form-control w-full max-w-md justify-between ml-16">
                            <div className="flex items-center">
                                <input
                                    id="Yesterday"
                                    type="radio"
                                    value="Yesterday"
                                    className="radio-info radio"
                                    {...register("day")}
                                />
                                <label className="ml-5 font-bold" htmlFor="yesterday">
                                    Yesterday
                                </label>
                            </div>
                        </label>
                    </div>
                    <div className="mt-5 flex justify-end">
                        <button className="btn btn-outline ">
                            <TbFilterX />
                        </button>
                        <button type="submit" className="btn btn-outline font-bold ml-3"
                        >
                            Select
                        </button>

                    </div>
                </div>
            </div>
        </dialog>
    )
}

export default AppointmentFilterModal