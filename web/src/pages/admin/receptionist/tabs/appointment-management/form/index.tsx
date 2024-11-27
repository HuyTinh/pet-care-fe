import { displayInputDate } from "../../../../../../shared/helped/date";
import {
  useGetHospitalServiceQuery,
  useCreateAppointmentMutation,
} from "../../../appointment.service";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
import { IPet } from "../../../../../../@typespet.type";
import { IHospitalService } from "../../../../../../@typeshospital-service.type";
import { PetPicker } from "../../../../../../shared/ui/pet-picker";

export const AppoimentManageForm = () => {
  const {
    data: hospitalServicesData,
    isFetching: isFetchHospitalServicesData,
  } = useGetHospitalServiceQuery();
  const [pets, setPets] = useState<IPet[]>([]);
  const [createAppointment] = useCreateAppointmentMutation();

  const { register, handleSubmit } = useForm<any>();

  const onSubmit: SubmitHandler<any> = (data) =>
    createAppointment({
      ...data,
      appointment: {
        services: data.services,
        appointment_date: displayInputDate(new Date()),
        status: "APPROVED",
      },
      pets: pets,
    });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <div className="flex">
        <div className="space-y-5">
          <div className="flex justify-between gap-x-5">
            <label className="input input-bordered flex flex-1 items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="First name"
                {...register("first_name")}
              />
            </label>
            <label className="input input-bordered flex flex-1 items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Last name"
                {...register("last_name")}
              />
            </label>
          </div>
          <div className="flex justify-between gap-x-5">
            <label className="input input-bordered flex flex-1 items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Phone number"
                {...register("phone_name")}
              />
            </label>
            <label className="input input-bordered flex flex-1 items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Email"
                {...register("email")}
              />
            </label>
          </div>
          <div>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Address</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
                {...register("address")}
              ></textarea>
            </label>
          </div>
        </div>
        <div className="flex-1 space-y-2 ps-5 pt-0">
          <label>Service</label>
          <div className="h-60 overflow-auto rounded-lg border">
            <div className="flex flex-col">
              {!isFetchHospitalServicesData &&
                (hospitalServicesData?.data as IHospitalService[]).map(
                  (hs, index) => (
                    <div className="form-control" key={index}>
                      <label className="label cursor-pointer">
                        <input
                          type="checkbox"
                          value={hs.name}
                          className="checkbox"
                          {...register("services")}
                        />
                        <span className="label-text ps-2">{hs.name}</span>
                      </label>
                    </div>
                  ),
                )}
            </div>
          </div>
        </div>
      </div>
      <PetPicker pets={pets} setPets={setPets} />
      <div>
        <button className="btn">Create</button>
      </div>
    </form>
  );
};
