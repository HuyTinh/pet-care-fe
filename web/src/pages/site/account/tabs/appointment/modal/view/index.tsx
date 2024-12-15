import { memo, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IHospitalService } from "../../../../../../../@types/hospital-service.type";
import { IPet } from "../../../../../../../@types/pet.type";
import { IAppointment } from "../../../../../../../@types/appoiment.type";
import {
    displayCustomDate,
} from "../../../../../../../shared/helped/date";
import _ from "lodash"

type ViewAppointmentModalProps = {
    appointment: IAppointment;
};

export const ViewAppointmentModal = memo(({
    appointment,
}: ViewAppointmentModalProps) => {
    const {
        reset,
    } = useForm<any>({
        mode: "all",
        defaultValues: {}
    });

    const [pets, setPets] = useState<IPet[]>([]);

    const [_services, setServices] = useState<IHospitalService[]>([]);

    useEffect(() => {
        setServices((appointment?.services || []) as any);
        setPets(appointment?.pets || []);
        reset(appointment);
    }, [appointment]);

    return (
        <dialog id="view_appointment_modal" className="modal backdrop:!hidden">
            <div className="modal-box w-full max-w-xl border-2 border-black">
                <div className="text-center text-3xl font-bold">
                    View Appointment
                </div>
                <form>
                    <div className="divider divider-start underline font-bold">Customer Info:</div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Name:
                                <span className="ps-1 font-bold underline text-lg">{appointment.first_name + " " + appointment.last_name}</span></span>
                        </div>
                    </label>
                    <div className="label">
                        <span className="label-text">Phone Number: <span className="ps-1 font-bold underline text-lg">{appointment.phone_number}</span></span>
                    </div>
                    <div className="label">
                        <span className="label-text">Email: <span className="ps-1 font-bold underline text-lg">{appointment.email}</span></span>
                    </div>
                    <div className="divider divider-start underline font-bold">Appointment Info:</div>
                    <div className="flex gap-x-2 py-2">
                        <label className="space-y-2">
                            <div>
                                Date: <span className="ps-1 font-bold underline text-lg">{displayCustomDate(new Date(appointment.appointment_date))}</span>
                            </div>
                        </label>
                        |
                        <label className="space-y-2">
                            <div>Time:<span className="ps-1 font-bold underline text-lg">{appointment.appointment_time?.substring(0, 5) + "h"}</span></div>
                        </label>
                        |
                        <label className="space-y-2">
                            <div>Status: <span className={`rounded-lg ${appointment.status === "SCHEDULED" && "bg-yellow-300"} ${appointment.status === "APPROVED" && "bg-green-300"} ${appointment.status === "CANCELLED" && "bg-red-300"} p-2 font-bold underline text-lg`}>{appointment.status}</span></div>
                        </label>
                    </div>
                    <div className="divider divider-start underline font-bold">Pets Info:</div>
                    <div className="overflow-x-auto border rounded-lg">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Weight</th>
                                    <th>Species</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pets.map((val, index) =>
                                    <tr key={index}>
                                        <th>{index + 1}</th>
                                        <th>{val.name}</th>
                                        <td>{val.age}</td>
                                        <td>{val.weight}</td>
                                        <td>{val.species}</td>
                                    </tr>)}
                            </tbody>
                        </table>
                    </div>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog >
    );
});
