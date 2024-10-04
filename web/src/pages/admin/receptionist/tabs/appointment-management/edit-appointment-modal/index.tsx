import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IHospitalService } from "../../../../../../types/hospital-service.type";
import { IPet } from "../../../../../../types/pet.type";
import { IAppointment } from "../../../../../../types/appoiment.type";
import { ServicePicker } from "../../../../../../components/service-picker";
import { PetPicker } from "../../../../../../components/pet-picker";
import { time } from "../../../../../../constant/time";
import {
  displayInputDate,
  displayPlusDate,
} from "../../../../../../utils/date";
import { toast } from "react-toastify";

type EditAppointmentModalProps = {
  appointment: IAppointment;
};

export const EditAppointmentModal = ({
  appointment,
}: EditAppointmentModalProps) => {
  const { register, reset } = useForm<any>({});

  const [pets, setPets] = useState<IPet[]>([]);

  const [services, setServices] = useState<IHospitalService[]>([]);

  const updateAppointment = () => {
    toast.success("Change appointment info successful", {
      position: "top-right",
    });
  };

  useEffect(() => {
    if (appointment) {
      setServices(appointment?.services || []);
      setPets(appointment?.pets || []);
      reset(appointment);
    }
  }, [appointment]);

  return (
    <dialog id="edit_appointment_modal" className="modal backdrop:!hidden">
      <div className="modal-box w-full max-w-xl">
        <div className="text-center text-3xl font-bold">
          Change Appointment Info
        </div>
        <div className="flex justify-center gap-x-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">First name:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("customer.first_name")}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Last name:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("customer.last_name")}
            />
          </label>
        </div>
        <div className="flex justify-center gap-x-5">
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Email:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("customer.email", { disabled: true })}
            />
          </label>
          <label className="form-control w-full max-w-xs">
            <div className="label">
              <span className="label-text">Phone number:</span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
              {...register("customer.phone_number")}
            />
          </label>
        </div>
        <div className="flex gap-x-2 py-2">
          <label className="flex-1 space-y-2">
            <div>
              Date <span className="font-bold underline">(month/day/year)</span>
              :
            </div>
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
        <div className="space-y-2 py-2">
          <PetPicker pets={pets} setPets={setPets} />
          <ServicePicker services={services} setServices={setServices} />
        </div>
        <div>
          <button
            className="btn btn-outline"
            onClick={() => updateAppointment()}
          >
            Save
          </button>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
