import { useEffect, useState } from "react";
import { displayCustomDate } from "../../../../../../utils/date";
import { useFilterAppointmentsQuery } from "../../../prescription.service";
import { IAppointment } from "../../../../../../types/appoiment.type";
import { SiGoogledocs } from "react-icons/si";
import { motion } from "framer-motion"


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
        <div>
            <table className="table">
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
                                        className={`${ap.status === "CHECKED_IN" && "rounded-lg bg-blue-300 p-1"}`}
                                    >
                                        {ap.status}
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
        </div>
    )
}
