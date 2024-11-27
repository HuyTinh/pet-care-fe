import { IAppointment } from '../../../../../../../@types/appoiment.type';
import { LiaEditSolid } from 'react-icons/lia';
import { displayCustomDate } from '../../../../../../../shared/helped/date';
import { motion } from 'framer-motion'
import { CiCalendar } from 'react-icons/ci';
import { MdOutlineCancel } from 'react-icons/md';
import { memo } from 'react';


type ManageAppointmentTableProps = {
    sendMessage: (appointmentId: string, status: string) => void,
    appointments: IAppointment[],
    setSelectedAppointment: React.Dispatch<React.SetStateAction<IAppointment>>,
}

export const ManageAppointmentTable = memo(({ sendMessage, appointments, setSelectedAppointment }: ManageAppointmentTableProps) => {
    return (
        <div>
            <table className="table ">
                {/* head */}
                <thead className="sticky top-0 bg-white">
                    <tr>
                        <th></th>
                        <th>Customer</th>
                        <th>Pets</th>
                        <th>Appointment Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {(appointments as IAppointment[])?.map((ap, index) => (
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
                                {ap.status === "SCHEDULED" && (
                                    <button
                                        className="btn btn-outline btn-sm btn-neutral"
                                        onClick={() => sendMessage(ap.id, "CHECKED_IN")}
                                    >
                                        <CiCalendar size={20} />
                                    </button>
                                )}
                                {ap.status === "CHECKED_IN" && (
                                    <button
                                        className="btn btn-outline btn-sm btn-neutral btn-error"
                                        onClick={() => sendMessage(ap.id, "CANCELLED")}
                                    >
                                        <MdOutlineCancel size={20} />
                                    </button>
                                )}
                                <button
                                    className="btn btn-outline btn-sm btn-neutral" onClick={() => {
                                        (
                                            document.getElementById(
                                                "edit_appointment_modal",
                                            ) as any
                                        ).showModal();
                                        setSelectedAppointment(ap as any);
                                    }}
                                >
                                    <LiaEditSolid size={20} />
                                </button>
                            </td>
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
})
