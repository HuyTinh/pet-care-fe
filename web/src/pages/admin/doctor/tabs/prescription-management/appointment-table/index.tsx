import { useEffect, useState } from "react";
import { displayCustomDate } from "../../../../../../utils/date";
import { useFilterAppointmentsQuery } from "../../../prescription.service";
import { IAppointment } from "../../../../../../types/appoiment.type";
import { SiGoogledocs } from "react-icons/si";
import { motion } from "framer-motion"
import { FcCalendar } from "react-icons/fc";


type FilterDate = {
    value: string,
    label: string,
}

type AppointmentTableProps = {
    startDate: FilterDate,
    endDate: FilterDate,
    setSelectedAppointment: React.Dispatch<React.SetStateAction<IAppointment>>
}

export const AppointmentTable = ({ startDate, endDate, setSelectedAppointment }: AppointmentTableProps) => {

    const [appointments, setAppointments] = useState<IAppointment[]>([]);
    const {
        data: filterAppointmentData,
        isFetching: isFetchingFilterAppointmentData,
    } = useFilterAppointmentsQuery({
        startDate: startDate?.value,
        endDate: endDate?.value,
        statues: ["CHECKED_IN"],
    });

    useEffect(() => {
        setAppointments(filterAppointmentData?.data);
        return () => { };
    }, [filterAppointmentData?.data]);
    return (
        <div className="h-[32rem] overflow-auto">
            <table className="table h-full">
                {/* head */}
                <thead className="sticky top-0 bg-white">
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
                        !(appointments as any) ?
                        <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center bg-red-400">
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
                            src="/src/assets/images/loading.gif"
                            className="object-cover"
                            alt=""
                        />
                    </div>
                    <div>Watting for few minute...</div>
                </motion.div>
            )}
        </div>
    )
}
