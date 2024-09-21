import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { displayInputDate, displayPlusDate } from "../../../utils/Date";
import Select from "react-select";
import { useForm } from "react-hook-form";

import {
  useGetHospitalServiceQuery,
  useCreateAppointmentMutation,
} from "../../admin/receptionist/appointment.service";
import { IHospitalService } from "../../../types/hospital-service.type";
import { useState } from "react";

export const BookingPage = () => {
  // console.log(new Date("2024-09-09 08:00:00"));
  const [step, setStep] = useState(1);
  const { register, getValues, setValue } = useForm<any>();
  const { data: hospitalServicesData, isFetching: _ } =
    useGetHospitalServiceQuery();

  const [createAppointment] = useCreateAppointmentMutation();

  return (
    <div>
      <div>
        <img
          src="https://blogs.cdc.gov/wp-content/uploads/sites/6/2020/05/golden_retiver_cat_cropped.jpg"
          className="w-full"
          alt=""
        />
      </div>
      <div className="space-y-5 p-10">
        <div className="flex justify-center">
          <ul className="steps">
            <li className={`step ${step >= 1 ? "step-info" : "step"}`}>
              Service
            </li>
            <li className={`step ${step >= 2 ? "step-info" : "step"}`}>
              Customer Information
            </li>
            <li className={`step ${step >= 3 ? "step-info" : "step"}`}>
              Approved
            </li>
          </ul>
        </div>
        <div className="flex justify-evenly">
          <div className="flex h-80">
            {step < 3 && (
              <div className="relative rounded-xl border">
                <img
                  src="https://i.ytimg.com/vi/XZvVWPFVlgg/maxresdefault.jpg"
                  className="h-full rounded-xl object-cover"
                  alt=""
                />
                <div className="absolute bottom-0 flex w-full flex-row justify-center gap-x-5 rounded-xl bg-black/75 p-2">
                  <Select
                    isDisabled={step !== 1}
                    placeholder="Select service"
                    options={(
                      hospitalServicesData?.result as IHospitalService[]
                    )?.map((hs) => {
                      return {
                        value: hs.name,
                        label: hs.name,
                      };
                    })}
                    onChange={(singleValue) =>
                      setValue("service", singleValue?.value)
                    }
                    className="flex-1 text-sm"
                  />
                  <Select
                    isDisabled={step !== 1}
                    options={[
                      {
                        value: "08:00:00",
                        label: "8h",
                      },
                      {
                        value: "09:00:00",
                        label: "9h",
                      },
                      {
                        value: "10:00:00",
                        label: "10h",
                      },
                    ]}
                    className="w-36 text-sm"
                    placeholder="Select time"
                    onChange={(singleValue) =>
                      setValue("time", singleValue?.value)
                    }
                  />
                </div>
              </div>
            )}
          </div>
          <div className="">
            {step === 1 && (
              <Calendar
                minDate={new Date()}
                maxDate={displayPlusDate(new Date(), 90)}
                className="w-[46rem] overflow-hidden rounded-xl"
                onChange={(value, event) => setValue("date", value?.toString())}
              />
            )}
            {step === 2 && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <span>Customer:</span>
                  <div className="space-y-5">
                    <div className="flex gap-x-5">
                      <label className="input input-bordered flex w-72 items-center gap-2">
                        <input
                          type="text"
                          className="grow"
                          placeholder="First name"
                          {...register("first_name")}
                        />
                      </label>
                      <label className="input input-bordered flex w-72 items-center gap-2">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Last name"
                          {...register("last_name")}
                        />
                      </label>
                    </div>
                    <div className="flex gap-x-5">
                      <label className="input input-bordered flex w-72 items-center gap-2">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Email"
                          {...register("email")}
                        />
                      </label>
                      <label className="input input-bordered flex w-72 items-center gap-2">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Phone number"
                          {...register("phone_number")}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <span>Pet:</span>
                  <div className="space-y-5">
                    <div className="flex gap-x-5">
                      <label className="input input-bordered flex w-72 items-center gap-2">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Pet name"
                          {...register("pets.name")}
                        />
                      </label>
                      <label className="input input-bordered flex w-72 items-center gap-2">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Age"
                          {...register("pets.age")}
                        />
                      </label>
                    </div>
                    <div className="flex gap-x-5">
                      <label className="input input-bordered flex w-72 items-center gap-2">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Weigth"
                          {...register("pets.weigth")}
                        />
                      </label>
                      <label className="input input-bordered flex w-72 items-center gap-2">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Species"
                          {...register("pets.species")}
                        />
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end pe-10">
          <button
            className="btn"
            onClick={() => {
              if (step < 3) {
                setStep(step + 1);
              }
              if (step === 2) {
                createAppointment({
                  first_name: getValues("first_name"),
                  last_name: getValues("last_name"),
                  email: getValues("email"),
                  phone_number: getValues("phone_number"),
                  pets: [getValues("pets")],
                  address: "110/46 HCM",
                  appointment: {
                    status: "SCHEDULED",
                    appointment_date: new Date(
                      displayInputDate(new Date(getValues("date"))) +
                        " " +
                        getValues("time"),
                    ).toISOString(),
                    services: [getValues("service")],
                  },
                });
              }
            }}
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
};
