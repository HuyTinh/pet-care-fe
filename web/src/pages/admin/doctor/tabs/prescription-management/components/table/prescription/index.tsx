import { memo, useEffect, useState } from "react";
import { motion } from "framer-motion"
import { FcCalendar } from "react-icons/fc";
import { FaEye, FaFilter } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";
import { useFilterPrescriptionsQuery } from "../../../../../prescription.service";


type PrescriptionTableProps = {
    filterPrescriptionConditions: any
    setSelectedPrescription: React.Dispatch<React.SetStateAction<any>>
}

export const PrescriptionTable = memo(({ filterPrescriptionConditions, setSelectedPrescription }: PrescriptionTableProps) => {
    const [pageNumber, setPageNumber] = useState<number>(0)
    const [prescriptions, setPrescriptions] = useState<any[]>([]);
    const {
        data: filterPrescriptionsData,
        isFetching: isFetchingFilterPrescriptionsData,
    } = useFilterPrescriptionsQuery({ page: pageNumber, startDate: filterPrescriptionConditions['start_date'], endDate: filterPrescriptionConditions['end_date'] });

    useEffect(() => {
        setPrescriptions(filterPrescriptionsData?.data?.content);

        return () => { };
    }, [filterPrescriptionsData?.data]);


    return (
        <div className="space-y-3">
            <div className="flex">
                <div className="flex gap-x-2 flex-1">
                    <label className="input input-sm input-bordered flex items-center gap-2">
                        <input type="text" className="grow" placeholder="Search" />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4 opacity-70"
                        >
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </label>

                    <div className="flex space-x-2">
                        <button
                            className="btn btn-sm btn-info flex items-center gap-2 rounded-md"
                            onClick={() =>
                                (
                                    document.getElementById("filter_prescription_modal") as any
                                ).showModal()
                            }
                        >
                            <FaFilter color="white" />
                            <span className="font-semibold text-white">Filter</span>
                        </button>
                    </div>
                </div>
                <div className="join">
                    <button className="join-item btn btn-sm" onClick={() => {
                        if (pageNumber - 1 >= 0) {
                            setPageNumber(pageNumber - 1)
                        }
                    }
                    }>«</button>
                    <button className="join-item btn btn-sm">Page {pageNumber + 1}</button>
                    <button className="join-item btn btn-sm" onClick={() => {
                        if (pageNumber + 1 < filterPrescriptionsData?.data?.total_pages) {
                            setPageNumber(pageNumber + 1)
                        }
                    }}>»</button>
                </div>
            </div>
            <div className="h-[32rem] overflow-auto relative">
                <table className="table h-full border rounded-lg">
                    {/* head */}
                    <thead className="sticky top-0 bg-white">
                        <tr>
                            <th></th>
                            <th>Appointment</th>
                            <th>Services</th>
                            <th>Status</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            !isFetchingFilterPrescriptionsData &&
                            ((prescriptions as any)?.length <= 0) &&
                            <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center">
                                <FcCalendar size={64} className="mb-10" />
                                <div>You don't have any prescription</div>
                            </div>
                        }
                        {
                            !isFetchingFilterPrescriptionsData && (
                                (prescriptions as any[])?.map((pre, index) => (
                                    <motion.tr key={index}>
                                        <th>#{pre.id}</th>
                                        <td>
                                            <div>
                                                <span>Name: </span>
                                                <span className="font-bold underline">
                                                    {pre.appointment?.first_name + " " + pre.appointment?.last_name}
                                                </span>
                                            </div>
                                            <div>
                                                <span>Email: </span>
                                                <span className="font-bold underline">{pre.appointment?.email}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="truncate ">
                                                {
                                                    pre.appointment?.services.map((val: any, index: any) => <div key={index}>- <div className="underline font-bold inline">{val.name}</div></div>)
                                                }
                                            </div>
                                        </td>
                                        <td>
                                            <span
                                                className={`${pre.status === "APPROVED" && "rounded-lg bg-green-300 p-1"}`}
                                            >
                                                {pre.status}
                                            </span>
                                        </td>
                                        <td className="space-x-2 text-center">
                                            <button className="btn btn-info btn-outline" onClick={() => {
                                                (document.getElementById("view_prescription_modal") as any).showModal()

                                                setSelectedPrescription(pre);
                                            }}>
                                                <FaEye size={24} />
                                            </button>
                                            <button className="btn btn-neutral btn-outline" onClick={() => {
                                                (
                                                    document.getElementById(
                                                        "edit_prescription_modal",
                                                    ) as any
                                                ).showModal();
                                                setSelectedPrescription(pre);
                                            }}>
                                                <MdOutlineModeEdit size={24} />
                                            </button>
                                        </td>
                                    </motion.tr>
                                ))
                            )
                        }
                    </tbody>
                </table>
                {isFetchingFilterPrescriptionsData && (
                    <motion.div
                        animate={{ opacity: 1 }}
                        exit={{
                            opacity: 0,
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 100,
                        }}
                        className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center"
                    >
                        <div className="w-64">
                            <img
                                src="/src/shared/assets/images/loading.gif"
                                className="object-cover"
                                alt=""
                            />
                        </div>
                        <div>Watting for few minute...</div>
                    </motion.div>
                )}
            </div>
        </div>
    )
})
