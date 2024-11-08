import { useForm } from "react-hook-form";
import { TbFilterX } from "react-icons/tb";

export const FilterModal = () => {
    const {
        register,
        // reset
    } = useForm<any>({});
    return (
        <dialog id="filter_modal" className="modal backdrop:!hidden">
            <div className="modal-box w-full max-w-4xl border-2 border-black">
                <form>
                    <div className="text-center text-3xl font-bold">Filter</div>
                    <div className="ml-5 mt-5 gap-x-10 ">
                        <div className="flex gap-x-10">
                            <label className="form-control w-full max-w-md justify-between">
                                <div className="label">
                                    <span className="label-text font-bold">Month:</span>
                                </div>
                                <select
                                    className="select select-bordered"
                                    {...register("month")}
                                >
                                    {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]?.map((val, index) => (
                                        <option key={index} value={val}>
                                            {val}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label className="form-control w-full max-w-md justify-between">
                                <div>
                                    <span className="label-text font-bold">Year</span>{" "}
                                </div>
                                <select
                                    className="select select-bordered"
                                    {...register("year")}
                                >
                                    {["2023", "2024"]?.map((val, index) => (
                                        <option key={index} value={val}>
                                            {val}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
                        <div className="flex gap-x-10">
                            <label className="form-control w-full max-w-md justify-between">
                                <div className="label">
                                    <span className="label-text font-bold">First year:</span>
                                </div>
                                <select
                                    className="select select-bordered"
                                    {...register("first_year")}
                                >
                                    {["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"]?.map((val, index) => (
                                        <option key={index} value={val}>
                                            {val}
                                        </option>
                                    ))}
                                </select>
                            </label>
                            <label className="form-control w-full max-w-md justify-between">
                                <div>
                                    <span className="label-text font-bold">Year second</span>{" "}
                                </div>
                                <select
                                    className="select select-bordered"
                                    {...register("first_second")}
                                >
                                    {["2023", "2024"]?.map((val, index) => (
                                        <option key={index} value={val}>
                                            {val}
                                        </option>
                                    ))}
                                </select>
                            </label>
                        </div>
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
                    </div>
                    <div className="mt-5 flex justify-center space-x-4">
                        <button
                            className="btn btn-outline"
                        >
                            <TbFilterX />
                        </button>
                        <button type="submit" className="btn btn-info font-bold text-white">
                            Apply
                        </button>

                    </div>
                </form>

            </div>

        </dialog>
    );
};
