import { useForm } from "react-hook-form";


export const PrescriptionModal = () => {
    const {
        // register,
        // reset
    } = useForm<any>({});
    return (
        <dialog id="prescription_modal" className="modal backdrop:!hidden">
            <div className="modal-box w-full max-w-4xl border-2 border-black">
                <div className="text-center text-3xl font-bold">Prescription <span className="!text-[#0099CF]">#10</span></div>
                <div className="mt-5 pl-10">
                    <div>
                        <span className="text-lg font-bold text-[#0099CF]">Full name: </span>
                        <span className="text-base font-medium">Nguyen Van A</span>
                    </div>
                    <div className="mt-3">
                        <span className="text-lg font-bold text-[#0099CF]">Phone number: </span>
                        <span className="text-base font-medium">0987654123</span>
                    </div>
                    <div className="mt-3">
                        <span className="text-lg font-bold text-[#0099CF]">Pets: </span>
                        <span className="text-base font-medium">Vuaa</span>
                    </div>
                    <div className="mt-3">
                        <span className="text-lg font-bold text-[#0099CF]">Diagnose: </span>
                        <span className="text-base font-medium">Viêm màng túi</span>
                    </div>
                </div>
                <div className="mt-5">
                    <span className="text-xl text-[#0099CF] font-bold">Medicines and note</span>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Medicine</th>
                                    <th className="flex justify-end">Caculation unit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>1</td>
                                    <td>
                                        Apoquel
                                        <br />
                                        <span className="badge badge-ghost badge-sm">One day two pill</span>
                                    </td>
                                    <th className="flex justify-end">
                                        <button className="btn btn-ghost btn-xs " disabled><span className="text-[#0099CF]">6 pill</span></button>
                                    </th>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>
                                        Revolution
                                        <br />
                                        <span className="badge badge-ghost badge-sm">One day two pill</span>
                                    </td>
                                    <th className="flex justify-end">
                                        <button className="btn btn-ghost btn-xs " disabled><span className="text-[#0099CF]">3 tablet</span></button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-14">
                    <div className="flex flex-col items-end">
                        <span className="text-lg">
                            October 20, 2023
                        </span>
                    </div>
                    <div className="mt-9 flex justify-end mr-10">
                        <span className="text-lg text-[#0099CF]" >
                            Dr. Bao
                        </span>
                    </div>
                </div>
            </div>
        </dialog>
    );
};
