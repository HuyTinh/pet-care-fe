import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
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
import { MdOutlineErrorOutline } from "react-icons/md";
import { useUpdateAppointmentMutation } from "../../../../receptionist/appointment.service";

type EditAppointmentModalProps = {
  appointment: IAppointment;
};

export const EditAppointmentModal = ({
  appointment,
}: EditAppointmentModalProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<any>({
    mode: "all",
  });

  const [pets, setPets] = useState<IPet[]>([]);

  const [services, setServices] = useState<IHospitalService[]>([]);

  const [updateAppointment] = useUpdateAppointmentMutation();

  const onSubmit: SubmitHandler<any> = (data) =>
    updateAppointment({
      appointmentId: appointment.id,
      updateAppointment: {
        ...data,
        pets: pets,
        services: services,
      },
    }).then(() => {
      toast.success("Change appointment info successful", {
        position: "top-right",
      });
    });

  useEffect(() => {
    if (appointment) {
      setServices(appointment?.services || []);
      setPets(appointment?.pets || []);
      reset(appointment);
    }
  }, [appointment]);

  return (
    <dialog id="edit_appointment_modal" className="modal backdrop:!hidden">
      <div className="modal-box w-full max-w-xl border-2 border-black">
        <div className="text-center text-3xl font-bold">
          Change Appointment Info
        </div>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center gap-x-5">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">First name:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("first_name", {
                  required: "First name is empty!",
                })}
              />
              {errors?.first_name && (
                <span className="badge badge-error mt-2 gap-2 text-white">
                  <MdOutlineErrorOutline />
                  {(errors?.first_name as any).message}
                </span>
              )}
            </label>
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Last name:</span>
              </div>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
                {...register("last_name", {
                  required: "Last name is empty!",
                })}
              />
              {errors.last_name && (
                <span className="badge badge-error mt-2 gap-2 text-white">
                  <MdOutlineErrorOutline />
                  {(errors.last_name as any)?.message}
                </span>
              )}
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
                readOnly
                {...register("email")}
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
                {...register("phone_number", {
                  required: "Phone number is empty!",
                })}
              />
              {errors?.phone_number && (
                <span className="badge badge-error mt-2 gap-2 text-white">
                  <MdOutlineErrorOutline />
                  {(errors.phone_number as any)?.message}
                </span>
              )}
            </label>
          </div>
          <div className="flex gap-x-2 py-2">
            <label className="flex-1 space-y-2">
              <div>
                Date{" "}
                <span className="font-bold underline">(month/day/year)</span>:
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
            <label className="space-y-2">
              <div>Status:</div>
              <select
                className="select select-bordered"
                {...register("status")}
              >
                {["CHECKED_IN", "CANCELLED", "SCHEDULED"]?.map((val, index) => (
                  <option key={index} value={val}>
                    {val}
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
            <button className="btn btn-outline">Save</button>
          </div>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
