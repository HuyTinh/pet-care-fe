import { FaFilter } from "react-icons/fa";
import AppointmentFilterModal from "./modal/filter/filter";
import Swal from 'sweetalert2';
import CustomPrescription from "./modal/customPrescription";
const AppointmentsManage = () => {
    const hanldDelete = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-info",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You Are you sure you want to delete this service?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            confirmButtonColor: "white",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result: any) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your service has been deleted.",
                    icon: "success"
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Delete failed",
                    icon: "error"
                });
            }
        });
    }
    return (
        <div className="h-[100%] w-full mt-28 bg-slate-100 px-14 py-10 ">
            <div>
                <span className="text-2xl text-[#0099CF] font-bold">
                    List Appointment
                </span>
            </div>
            <div className="mt-7 flex justify-between">
                <div className="w-1/2">
                    <label className="input input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search by Service Name, Service Type" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </label>
                </div>
                <button
                    className="btn btn-info flex items-center gap-2 rounded-md"
                    onClick={() => {
                        (
                            document.getElementById(
                                "appointment_filter_modal",
                            ) as any
                        ).showModal();
                    }}
                >
                    <FaFilter color="white" />
                    <span className="font-semibold text-white">Filter</span>
                </button>
            </div>
            <div className='mt-7 w-full'>
                <span className='text-xl font-bold text-[#0099CF]'>List Appointments Today</span>
                <div className=" bg-white relative max-h-[10%] overflow-auto mt-3 h-[500px] ">
                    <table className="table border border-gray-300 ">
                        {/* head */}
                        <thead className='sticky top-0 bg-white'>
                            <tr className="text-lg">
                                <th>#</th>
                                <th>Appointment Date</th>
                                <th>Hour</th>
                                <th>Customer</th>
                                <th>Pet</th>
                                <th>Prescription</th>
                                <th>Status</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td className="text-base font-bold"> 2024-10-31 </td>
                                <td className="text-base font-bold">9:00:00</td>
                                <td>
                                    <div className="flex flex-col truncate">
                                        <span className="font-bold underline">
                                            Nguyen Van A
                                        </span>
                                        <div className="flex items-center ml-10">
                                            <span className="justify-center font-bold">X</span>
                                        </div>
                                        <span className="font-bold underline">
                                            0123456789
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-base font-bold">Lily</span>
                                    <br />
                                    <div className="-ml-1 mt-1">
                                        <span className="badge badge-accent badge-md">Persian Cat</span>
                                        <span className="badge badge-accent badge-md ml-1">6 months</span>
                                    </div>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            (
                                                document.getElementById("custom_prescription_modal") as any
                                            ).showModal()
                                        }
                                    >
                                        <img className='ml-10' src="/src/shared/assets/images/Rectangle 87.png" />
                                    </button>
                                </td>
                                <td className="text-base font-bold">Warning</td>
                                <td className="cursor-pointer"><img onClick={hanldDelete} className='ml-4' src="/src/shared/assets/images/Rectangle 89.png" /></td>
                            </tr>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td className="text-base font-bold"> 2024-10-31 </td>
                                <td className="text-base font-bold">9:00:00</td>
                                <td>
                                    <div className="flex flex-col truncate">
                                        <span className="font-bold underline">
                                            Nguyen Van A
                                        </span>
                                        <div className="flex items-center ml-10">
                                            <span className="justify-center font-bold">X</span>
                                        </div>
                                        <span className="font-bold underline">
                                            0123456789
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-base font-bold">Lily</span>
                                    <br />
                                    <div className="-ml-1 mt-1">
                                        <span className="badge badge-accent badge-md">Persian Cat</span>
                                        <span className="badge badge-accent badge-md ml-1">6 months</span>
                                    </div>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            (
                                                document.getElementById("appointment_modal") as any
                                            ).showModal()
                                        }
                                    >
                                        <img className='ml-10' src="/src/shared/assets/images/Rectangle 87.png" />
                                    </button>
                                </td>
                                <td className="text-base font-bold">Warning</td>
                                <td className="cursor-pointer"><img className='ml-4' src="/src/shared/assets/images/Rectangle 89.png" /></td>
                            </tr>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td className="text-base font-bold"> 2024-10-31 </td>
                                <td className="text-base font-bold">9:00:00</td>
                                <td>
                                    <div className="flex flex-col truncate">
                                        <span className="font-bold underline">
                                            Nguyen Van A
                                        </span>
                                        <div className="flex items-center ml-10">
                                            <span className="justify-center font-bold">X</span>
                                        </div>
                                        <span className="font-bold underline">
                                            0123456789
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-base font-bold">Lily</span>
                                    <br />
                                    <div className="-ml-1 mt-1">
                                        <span className="badge badge-accent badge-md">Persian Cat</span>
                                        <span className="badge badge-accent badge-md ml-1">6 months</span>
                                    </div>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            (
                                                document.getElementById("appointment_modal") as any
                                            ).showModal()
                                        }
                                    >
                                        <img className='ml-10' src="/src/shared/assets/images/Rectangle 87.png" />
                                    </button>
                                </td>
                                <td className="text-base font-bold">Warning</td>
                                <td className="cursor-pointer"><img className='ml-4' src="/src/shared/assets/images/Rectangle 89.png" /></td>
                            </tr>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td className="text-base font-bold"> 2024-10-31 </td>
                                <td className="text-base font-bold">9:00:00</td>
                                <td>
                                    <div className="flex flex-col truncate">
                                        <span className="font-bold underline">
                                            Nguyen Van A
                                        </span>
                                        <div className="flex items-center ml-10">
                                            <span className="justify-center font-bold">X</span>
                                        </div>
                                        <span className="font-bold underline">
                                            0123456789
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-base font-bold">Lily</span>
                                    <br />
                                    <div className="-ml-1 mt-1">
                                        <span className="badge badge-accent badge-md">Persian Cat</span>
                                        <span className="badge badge-accent badge-md ml-1">6 months</span>
                                    </div>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            (
                                                document.getElementById("appointment_modal") as any
                                            ).showModal()
                                        }
                                    >
                                        <img className='ml-10' src="/src/shared/assets/images/Rectangle 87.png" />
                                    </button>
                                </td>
                                <td className="text-base font-bold">Warning</td>
                                <td className="cursor-pointer"><img className='ml-4' src="/src/shared/assets/images/Rectangle 89.png" /></td>
                            </tr>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td className="text-base font-bold"> 2024-10-31 </td>
                                <td className="text-base font-bold">9:00:00</td>
                                <td>
                                    <div className="flex flex-col truncate">
                                        <span className="font-bold underline">
                                            Nguyen Van A
                                        </span>
                                        <div className="flex items-center ml-10">
                                            <span className="justify-center font-bold">X</span>
                                        </div>
                                        <span className="font-bold underline">
                                            0123456789
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-base font-bold">Lily</span>
                                    <br />
                                    <div className="-ml-1 mt-1">
                                        <span className="badge badge-accent badge-md">Persian Cat</span>
                                        <span className="badge badge-accent badge-md ml-1">6 months</span>
                                    </div>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            (
                                                document.getElementById("appointment_modal") as any
                                            ).showModal()
                                        }
                                    >
                                        <img className='ml-10' src="/src/shared/assets/images/Rectangle 87.png" />
                                    </button>
                                </td>
                                <td className="text-base font-bold">Warning</td>
                                <td className="cursor-pointer"><img className='ml-4' src="/src/shared/assets/images/Rectangle 89.png" /></td>
                            </tr>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td className="text-base font-bold"> 2024-10-31 </td>
                                <td className="text-base font-bold">9:00:00</td>
                                <td>
                                    <div className="flex flex-col truncate">
                                        <span className="font-bold underline">
                                            Nguyen Van A
                                        </span>
                                        <div className="flex items-center ml-10">
                                            <span className="justify-center font-bold">X</span>
                                        </div>
                                        <span className="font-bold underline">
                                            0123456789
                                        </span>
                                    </div>
                                </td>
                                <td>
                                    <span className="text-base font-bold">Lily</span>
                                    <br />
                                    <div className="-ml-1 mt-1">
                                        <span className="badge badge-accent badge-md">Persian Cat</span>
                                        <span className="badge badge-accent badge-md ml-1">6 months</span>
                                    </div>
                                </td>
                                <td>
                                    <button
                                        onClick={() =>
                                            (
                                                document.getElementById("appointment_modal") as any
                                            ).showModal()
                                        }
                                    >
                                        <img className='ml-10' src="/src/shared/assets/images/Rectangle 87.png" />
                                    </button>
                                </td>
                                <td className="text-base font-bold">Warning</td>
                                <td className="cursor-pointer"><img className='ml-4' src="/src/shared/assets/images/Rectangle 89.png" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <AppointmentFilterModal />
            <CustomPrescription />
        </div>
    )
}

export default AppointmentsManage