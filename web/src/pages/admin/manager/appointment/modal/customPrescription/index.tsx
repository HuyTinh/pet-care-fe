import Prescription from "./prescriptionDetail"

const CustomPrescription = () => {
    return (
        <dialog id="custom_prescription_modal" className="modal backdrop:!hidden">
            <div className="modal-box w-full max-w-4xl border-2 border-black">
                <div className="text-center text-3xl font-bold">Customer Prescription</div>
                <div className="mt-8 flex flex-col ">
                    <div >
                        <span className="text-lg font-bold text-[#0099CF]">Full name: </span>
                        <span className="text-base font-medium">Nguyen Van A</span>
                    </div>
                    <div className="mt-3">
                        <span className="text-lg font-bold text-[#0099CF]">Phone number: </span>
                        <span className="text-base font-medium">0987654123</span>
                    </div>
                    <div className="mt-3">
                        <span className="text-lg font-bold text-[#0099CF]">Email: </span>
                        <span className="text-base font-medium">anv01@gmail.com</span>
                    </div>
                </div>
                <div className="mt-16">
                    <span className="text-xl font-bold text-[#0099CF]">Pets</span>
                    <div className="overflow-x-auto mt-3">
                        <table className="table border-2">
                            {/* head */}
                            <thead>
                                <tr className="text-lg">
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Species</th>
                                    <th>Age</th>
                                    <th>Weight</th>

                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="bg-base-200 text-base font-bold">
                                    <th>1</th>
                                    <td>lily</td>
                                    <td>Persian Cat</td>
                                    <td>6 months</td>
                                    <td>3.5 kg</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="mt-16">
                    <span className="text-xl font-bold text-[#0099CF]">Presciption</span>
                    <div className="overflow-x-auto mt-3">
                        <table className="table border-2">
                            {/* head */}
                            <thead>
                                <tr className="text-lg">
                                    <th>#</th>
                                    <th>Pet Name</th>
                                    <th>Prescription Id</th>
                                    <th>Create Date</th>
                                    <th>Diagnose</th>
                                    <th>Note</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="bg-base-200 text-base font-bold">
                                    <th>1</th>
                                    <td>Lily</td>
                                    <td
                                        onClick={() =>
                                            (
                                                document.getElementById("appointment_prescription_modal") as any
                                            ).showModal()
                                        }
                                    >
                                        <span className="underline text-[#0099CF] cursor-pointer ml-10">10</span>
                                    </td>
                                    <td>2024-10-31</td>
                                    <td>Allergy</td>
                                    <td>....</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <Prescription />
        </dialog>
    )
}

export default CustomPrescription