import { FaPlus, FaEdit } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import Swal from 'sweetalert2';
import { ServiceCreateModal } from "./modal/create";
import { ServiceEditModal } from "./modal/edit";
export const ServicesManage = () => {
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
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                });
            }
        });
    }
    return (
        <div className="h-[100%] w-full mt-28 bg-slate-100 px-14 py-10 ">
            <div >
                <span className="text-2xl text-[#0099CF] font-bold">
                    List Services
                </span>
            </div>
            <div className="mt-10 flex justify-between">
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
                                "service_create_modal",
                            ) as any
                        ).showModal();
                    }}
                >
                    <span className="font-semibold text-white">Create</span>
                    <FaPlus color="white" />
                </button>
            </div>
            <div className="mt-5">
                <div className="overflow-x-auto mt-3 ">
                    <div className="overflow-x-auto">
                        <table className="table border border-zinc-800 ">
                            {/* head */}
                            <thead>
                                <tr className="text-xl font-bold">
                                    <th>#</th>
                                    <th>Service name</th>
                                    <th>Price</th>
                                    <th>Service Type</th>
                                </tr>
                            </thead>
                            <tbody className="text-base">
                                {/* row 1 */}
                                <tr>
                                    <th>1</th>
                                    <td>Full Grooming</td>
                                    <td>80.000 VNĐ</td>
                                    <td>Grooming</td>
                                    <td className="cursor-pointer"><FaEdit color="#0099CF"
                                        onClick={() => {
                                            (
                                                document.getElementById(
                                                    "service_edit_modal",
                                                ) as any
                                            ).showModal();
                                        }}
                                    /></td>
                                    <td className="cursor-pointer"><RiDeleteBin5Fill color="#FF0202" onClick={hanldDelete} /></td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>1</th>
                                    <td>Full Grooming</td>
                                    <td>80.000 VNĐ</td>
                                    <td>Grooming</td>
                                    <td className="cursor-pointer"><FaEdit color="#0099CF" /></td>
                                    <td className="cursor-pointer"><RiDeleteBin5Fill color="#FF0202" /></td>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <td>Full Grooming</td>
                                    <td>80.000 VNĐ</td>
                                    <td>Grooming</td>
                                    <td className="cursor-pointer"><FaEdit color="#0099CF" /></td>
                                    <td className="cursor-pointer"><RiDeleteBin5Fill color="#FF0202" /></td>
                                </tr>
                                <tr>
                                    <th>1</th>
                                    <td>Full Grooming</td>
                                    <td>80.000 VNĐ</td>
                                    <td>Grooming</td>
                                    <td className="cursor-pointer"><FaEdit color="#0099CF" /></td>
                                    <td className="cursor-pointer"><RiDeleteBin5Fill color="#FF0202" /></td>
                                </tr>
                            </tbody>
                            <ServiceCreateModal />
                            <ServiceEditModal />
                        </table>
                    </div>
                </div>
            </div>
            <div className="mt-5 grid">
                <div className="join justify-end">
                    <button className="join-item btn">«</button>
                    <button className="join-item btn">1</button>
                    <button className="join-item btn">2</button>
                    <button className="join-item btn">3</button>
                    <button className="join-item btn">»</button>
                </div>
            </div>

        </div>
    )
}
