import { IAppointment } from "../../../../../../types/appoiment.type";
import { time } from "../../../../../../constant/time";
import {
  displayInputDate,
  displayPlusDate,
} from "../../../../../../utils/date";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { PetPicker } from "../../../../../../components/pet-picker";
import { IPet } from "../../../../../../types/pet.type";
import { IHospitalService } from "../../../../../../types/hospital-service.type";
import { ServicePicker } from "../../../../../../components/service-picker";

export const EditAppointmentModal = ({
  selectedAppointment,
}: {
  selectedAppointment: IAppointment;
}) => {
  const [pets, setPets] = useState<IPet[]>([]);
  const [services, setServices] = useState<IHospitalService[]>([]);
  const { register, reset, getValues } = useForm<any>();
  const closeEditAppointmentModal = () => {
    (document.getElementById("edit_appointment_modal") as any).close();
  };

  useEffect(() => {
    reset({
      appointment_date: displayInputDate(
        new Date(selectedAppointment.appointment_date),
      ),
      appointment_time: selectedAppointment.appointment_time,
    });
    setPets((selectedAppointment as any)?.pets);
    setServices((selectedAppointment as any)?.services);
  }, [selectedAppointment]);

  return (
    <div>
      <dialog id="edit_appointment_modal" className="modal backdrop:!hidden">
        <div className="modal-box flex max-w-xl flex-col p-0">
          <form className="relative p-5">
            <div className="text-center text-2xl font-bold">
              Update Appointment
            </div>
            <div className="p-5">
              <div className="flex gap-x-2">
                <label className="flex-1 space-y-2">
                  <div>Date:</div>
                  <input
                    type="date"
                    className="input input-bordered w-full"
                    min={displayInputDate(new Date())}
                    max={displayInputDate(displayPlusDate(new Date(), 60))}
                    {...register("appointment_date")}
                  />
                </label>
                <label className="space-y-2">
                  <div>Time:</div>
                  <select
                    className="select select-bordered"
                    {...register("appointment_time")}
                  >
                    {(time as any[])?.map((val, index) => (
                      <option key={index + 10} value={val.time}>
                        {val.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div>
                <PetPicker pets={pets} setPets={setPets} />
              </div>
              <div>
                <ServicePicker services={services} setServices={setServices} />
              </div>
              <div>
                <button
                  className="btn btn-outline"
                  onClick={() => {
                    console.log({
                      ...getValues(),
                      pets: pets,
                    });
                  }}
                  type="button"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>

        <form method="dialog" className="modal-backdrop">
          <button type="button" onClick={() => closeEditAppointmentModal()}>
            close
          </button>
        </form>
      </dialog>
    </div>
  );
};
