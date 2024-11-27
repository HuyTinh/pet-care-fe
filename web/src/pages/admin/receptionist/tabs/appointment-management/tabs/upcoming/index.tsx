import { memo, useEffect, useState } from 'react'
import { IAppointment } from '../../../../../../../@types/appoiment.type';
import { useGetUpcomingAppointmentsQuery } from '../../../../appointment.service';
import { displayCustomDate } from '../../../../../../../shared/helped/date';
import { FcCalendar } from 'react-icons/fc';
import { motion } from 'framer-motion'
import { FaEye } from "react-icons/fa";



type UpcomingAppointmentTableProps = {
    setSelectedAppointment: React.Dispatch<React.SetStateAction<IAppointment>>,
}

export const UpcomingAppointmentTable = memo(
    ({ setSelectedAppointment }: UpcomingAppointmentTableProps) => {
        const [appointments, setAppointments] = useState<IAppointment[]>([]);

        const {
            data: upcomingAppointmentData,
            isFetching: isFetchingUpcomingAppointmentData,
        } = useGetUpcomingAppointmentsQuery();


        useEffect(() => {
            setAppointments(upcomingAppointmentData?.data.content);
        }, [upcomingAppointmentData?.data]);


        return (
            <div>
                {!isFetchingUpcomingAppointmentData &&
                    !(appointments as any[])?.length && (
                        <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center">
                            <FcCalendar size={64} className="mb-10" />
                            <div>You don't have any appointment</div>
                        </div>
                    )}
                {isFetchingUpcomingAppointmentData && (
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
                <table className="table ">
                    {/* head */}
                    <thead className="sticky top-0 bg-white">
                        <tr>
                            <th></th>
                            <th>Customer</th>
                            <th>Pets</th>
                            <th>Appointment Date</th>
                            <th>Status</th>
                            {/* <th>Action</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {!isFetchingUpcomingAppointmentData &&
                            (appointments as IAppointment[])?.map((ap, index) => (
                                <motion.tr
                                    key={index}
                                    className={`${["CHECKED_IN", "CANCELLED"].includes(ap.status) && "rounded-lg bg-zinc-300 p-1"}`}
                                >
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
                                        <div>
                                            <span>Phone: </span>
                                            <span className="font-bold underline">{ap.phone_number}</span>
                                        </div>

                                    </td>
                                    <td>
                                        {
                                            ap.pets?.map((val, index) =>
                                                <div className="flex gap-x-2" key={index}>
                                                    <span>#{index + 1}</span>
                                                    <div >
                                                        <span>Name: </span>
                                                        <span className="font-bold underline">
                                                            {val.name}
                                                        </span>
                                                    </div>
                                                    |
                                                    <div>
                                                        <span>Species: </span>
                                                        <span className="font-bold underline">
                                                            {val.species}
                                                        </span>
                                                    </div>
                                                </div>)
                                        }

                                    </td>
                                    <td>
                                        <div className="truncate">
                                            <span className="underline font-bold">
                                                {displayCustomDate(new Date(ap.appointment_date))}, <span>
                                                    {ap.appointment_time.substring(0, 5)}h
                                                </span>
                                            </span>
                                        </div>
                                    </td>
                                    <td>
                                        <span
                                            className={`rounded-lg p-1 ${ap.status === "SCHEDULED" ? "bg-yellow-300" : ap.status === "CANCELLED" ? "bg-red-300" : "bg-green-300"}`}
                                        >
                                            {ap.status}
                                        </span>
                                    </td>
                                    <td className="space-x-2">
                                        <button
                                            className="btn btn-outline btn-sm btn-neutral" onClick={() => {
                                                (
                                                    document.getElementById(
                                                        "view_appointment_modal",
                                                    ) as any
                                                ).showModal();
                                                setSelectedAppointment(ap as any);
                                            }}
                                        >
                                            <FaEye size={20} />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                    </tbody>
                </table>
            </div>
        )
    }
)
