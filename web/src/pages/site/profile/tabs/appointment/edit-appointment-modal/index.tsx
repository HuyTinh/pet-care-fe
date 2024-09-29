import { IAppointment } from "../../../../../../types/appoiment.type";
import { time } from "../../../../../../constant/time";
import {
  displayInputDate,
  displayPlusDate,
} from "../../../../../../utils/date";
import { SubmitHandler, useForm } from "react-hook-form";

export const EditAppointmentModal = ({
  selectedAppointment,
}: {
  selectedAppointment: IAppointment;
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = (data) => console.log(data);
  const closeEditAppointmentModal = () => {
    (document.getElementById("edit_appointment_modal") as any).close();
  };

  return (
    <div>
      <dialog id="edit_appointment_modal" className="modal backdrop:!hidden">
        <div className="modal-box flex max-w-md flex-col p-0">
          <div className="relative p-5">
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
                  />
                </label>
                <label className="space-y-2">
                  <div>Time:</div>
                  <select
                    className="select select-bordered"
                    {...register("apo")}
                  >
                    {time.map((val, index) => (
                      <option key={index} value={val.value}>
                        {val.label}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <div></div>
            </div>
          </div>
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
