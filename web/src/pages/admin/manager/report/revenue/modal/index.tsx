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
