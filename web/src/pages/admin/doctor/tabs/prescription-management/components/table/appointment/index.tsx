import { memo, useEffect, useState } from "react";
import { displayCustomDate } from "../../../../../../../../shared/helped/date";
import { useFilterAppointmentsQuery } from "../../../../../prescription.service";
import { IAppointment } from "../../../../../../../../@types/appoiment.type";
import { SiGoogledocs } from "react-icons/si";
import { motion } from "framer-motion"
import { FcCalendar } from "react-icons/fc";
import { FaFilter } from "react-icons/fa";

type AppointmentTableProps = {
    filterAppointmentConditions: any
    setSelectedAppointment: React.Dispatch<React.SetStateAction<IAppointment>>
}

export const AppointmentTable = memo(({ filterAppointmentConditions, setSelectedAppointment }: AppointmentTableProps) => {

    const [pageNumber, setPageNumber] = useState<number>(0)
    const [appointments, setAppointments] = useState<IAppointment[]>([]);
    const {
        data: filterAppointmentData,
        isFetching: isFetchingFilterAppointmentData,
    } = useFilterAppointmentsQuery({
        startDate: filterAppointmentConditions['start_date'],
        endDate: filterAppointmentConditions['end_date'],
        statues: ["CHECKED_IN"],
    });

    useEffect(() => {
        setAppointments(filterAppointmentData?.data.content);
        return () => { };
    }, [filterAppointmentData?.data]);
    return (
        <div className="space-y-3">
            <div className="flex gap-x-2">
                <div className="flex gap-x-2 flex-1">
                    <label className="input input-sm input-bordered flex items-center gap-2 flex-1">
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
                                    document.getElementById("filter_appointment_modal") as any
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
                        if (pageNumber + 1 < filterAppointmentData?.data?.total_pages) {
                            setPageNumber(pageNumber + 1)
                        }
                    }}>»</button>
                </div>
            </div>
            <div className="h-[32rem] border rounded-lg overflow-auto relative">
                <table className="table border rounded-lg">
                    {/* head */}
                    <thead className="sticky top-0 bg-white ">
                        <tr>
                            <th></th>
                            <th>Customer</th>
                            <th>Appointment Date</th>
                            <th>Status</th>
                            <th className="text-center">Make Prescription</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isFetchingFilterAppointmentData &&
                            ((appointments as any)?.length <= 0) ?
                            <div className="absolute top-0 z-50 flex h-[30rem] w-full flex-col items-center justify-center">
                                <FcCalendar size={64} className="mb-10" />
                                <div>You don't have any appointment</div>
                            </div> :
                            (appointments as IAppointment[])?.map((ap, index) => (
                                <motion.tr key={index}>
                                    <th>#{ap.id}</th>
                                    <td>
                                        <div>
                                            <span>Name: </span>
                                            <span className="font-bold underline">
                                                {ap.first_name + " " + ap.last_name}
                                            </span>
                                        </div>
                                        <div>
                                            <span>Email: </span>
                                            <span className="font-bold underline">{ap.email}</span>
                                        </div>
                                    </td>
                                    <td>
                                        <div className="truncate">
                                            <span className="font-bold underline">
                                                {displayCustomDate(new Date(ap.appointment_date))},{" "}
                                                {ap.appointment_time.substring(0, 5) + "h"}
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span
                                            className={`${(ap as any).status === "CHECKED_IN" && "rounded-lg bg-blue-300 p-1"}`}
                                        >
                                            {(ap as any).status}
                                        </span>
                                    </td>
                                    <td className="space-x-2 text-center">
                                        <button
                                            className="btn btn-info btn-outline"
                                            onClick={() => {
                                                (
                                                    document.getElementById(
                                                        "make_prescription_modal",
                                                    ) as any
                                                ).showModal();
                                                setSelectedAppointment(ap as any);
                                            }}
                                        >
                                            <SiGoogledocs size={24} />
                                        </button>

                                    </td>
                                </motion.tr>
                            ))}
                    </tbody>
                </table>
                {isFetchingFilterAppointmentData && (
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
