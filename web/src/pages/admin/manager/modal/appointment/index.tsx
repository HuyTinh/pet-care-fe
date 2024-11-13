export const AppointmentModal = () => {

    return (
        <dialog id="appointment_modal" className="modal backdrop:!hidden">
            <div className="modal-box w-full max-w-4xl border-2 border-black">
                <div className="text-center text-3xl font-bold">Appointment <span className="!text-[#0099CF]">#10</span></div>
                <div className="mt-4 flex flex-col items-end">
                    <div >
                        <span className="text-lg font-bold text-[#0099CF]">Full name: </span>
                        <span className="text-base font-medium">Nguyen Van A</span>
                    </div>
                    <div className="mt-3">
                        <span className="text-lg font-bold text-[#0099CF]">Phone number: </span>
                        <span className="text-base font-medium">0987654123</span>
                    </div>
                </div>
                <div className="mt-5">
                    <span className="text-xl font-bold text-[#0099CF]">Pets</span>
                    <div className="overflow-x-auto mt-3">
                        <table className="table border-2">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Hour</th>
                                    <th>Species</th>
                                    <th>Age</th>
                                    <th>Weight</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="bg-base-200">
                                    <th>1</th>
                                    <td>Cy Ganderton</td>
                                    <td>Quality Control Specialist</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Hart Hagerty</td>
                                    <td>Desktop Support Technician</td>
                                    <td>Purple</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Brice Swyre</td>
                                    <td>Tax Accountant</td>
                                    <td>Red</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                    <td>Blue</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </dialog>
    );
};
