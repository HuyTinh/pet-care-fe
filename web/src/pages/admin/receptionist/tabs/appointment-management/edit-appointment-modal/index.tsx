import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ServicePicker } from "./service-picker";
import { IHospitalService } from "../../../../../../types/hospital-service.type";

type EditAppointmentModalProps = {
  appointment: any;
};

export const EditAppointmentModal = ({
  appointment,
}: EditAppointmentModalProps) => {
  const { register, reset } = useForm<any>({});

  const [services, setServices] = useState<IHospitalService[]>([]);

  useEffect(() => {
    if (appointment) {
      setServices(appointment.services);
    }
  }, [appointment]);

  // const onSubmit: SubmitHandler<any> = (data) => console.log(data);

  useEffect(() => {
    reset(appointment);
  }, [appointment]);

  return (
    <dialog id="edit_appointment_modal" className="modal">
      <div className="modal-box w-full max-w-xl">
        <div className="text-center text-3xl font-bold">Appointment</div>
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
              {...register("customer.email")}
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
        {/* <Select
          isMulti
          name="colors"
          options={(hospitalServicesData?.result as IHospitalService[])?.map(
            (hs) => {
              return {
                value: hs.name,
                label: hs.name,
              };
            },
          )}
          className="basic-multi-select absolute z-50"
          classNamePrefix="select"
        /> */}
        <ServicePicker services={services} setServices={setServices} />
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
