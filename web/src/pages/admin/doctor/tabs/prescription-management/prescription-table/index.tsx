import { useEffect, useState } from "react";
import { useGetAllPresctiptionQuery } from "../../../prescription.service";
import { motion } from "framer-motion"
import { FcCalendar } from "react-icons/fc";
import { FaEye } from "react-icons/fa";
import { MdOutlineModeEdit } from "react-icons/md";


type PrescriptionTableProps = {
    setSelectedPrescription: React.Dispatch<React.SetStateAction<any>>
}

export const PrescriptionTable = ({ setSelectedPrescription }: PrescriptionTableProps) => {

    const [prescriptions, setPrescriptions] = useState<any[]>([]);
    const {
        data: prescriptionsData,
        isFetching: isFetchingPrescriptionsData,
    } = useGetAllPresctiptionQuery();

    useEffect(() => {
        setPrescriptions(prescriptionsData?.data);

        return () => { };
    }, [prescriptionsData?.data]);

    return (
        <div className="h-[32rem] overflow-auto">
            {!isFetchingPrescriptionsData &&
                !(prescriptions as any[])?.length ? (
                <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center">
                    <FcCalendar size={64} className="mb-10" />
                    <div>You don't have any appoiment</div>
                </div>
            ) : <table className="table">
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
                    {!isFetchingPrescriptionsData &&
                        (prescriptions as any[])?.map((pre, index) => (
                            <motion.tr key={index}>
                                <th>#{pre.id}</th>
                                <td>
                                    <div>
                                        <span>Name: </span>
                                        <span className="font-bold underline">
                                            {pre.appointment.first_name + " " + pre.appointment.last_name}
                                        </span>
                                    </div>
                                    <div>
                                        <span>Email: </span>
                                        <span className="font-bold underline">{pre.appointment.email}</span>
                                    </div>
                                </td>
                                <td>
                                    <div className="truncate ">
                                        {
                                            pre.appointment.services.map((val: any, index: any) => <div key={index}>- <div className="underline font-bold inline">{val}</div></div>)
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
                        ))}
                </tbody>
            </table>}
            {isFetchingPrescriptionsData && (
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
