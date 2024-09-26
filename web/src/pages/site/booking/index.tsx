import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { displayInputDate, displayPlusDate } from "../../../utils/Date";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { FcApproval } from "react-icons/fc";
import {
  useGetHospitalServiceQuery,
  useCreateAppointmentMutation,
} from "../../admin/receptionist/appointment.service";
import { IHospitalService } from "../../../types/hospital-service.type";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useGetCustomerProfileQuery } from "../customer.service";
import { AnimateSection } from "../../../components/animate-section";
import { motion } from "framer-motion";

export const BookingPage = () => {
  const [step, setStep] = useState(1);
  const { register, getValues, setValue, reset } = useForm<any>();
  const { data: hospitalServicesData, isFetching: _ } =
    useGetHospitalServiceQuery();

  const [createAppointment] = useCreateAppointmentMutation();
  const isAuth = useSelector((state: RootState) => state.authentication.isAuth);
  const userId = useSelector((state: RootState) => state.authentication.userId);
  const { data: customerProfileData } = useGetCustomerProfileQuery(
    {
      userId,
    },
    { skip: !userId },
  );

  const bookingAgain = () => {
    setStep(1);
    reset({ first_name: "", last_name: "", phone_number: "", email: "" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div
          className="h-[42rem] w-full bg-cover"
          style={{
            backgroundImage: "url(/src/assets/images/booking_banner.jpg)",
          }}
        ></div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-24 space-y-5 text-3xl text-white">
          <AnimateSection>
            <div className="text-center text-5xl font-bold">Booking</div>
          </AnimateSection>
          <AnimateSection>
            <div className="text-xl">
              Your Time, Your Schedule – Book with Ease!
            </div>
          </AnimateSection>
        </div>
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
                onChange={(value) => setValue("date", value?.toString())}
              />
            )}
            {step === 2 && (
              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Customer:</span>
                    {isAuth && userId && (
                      <label>
                        <input
                          type="checkbox"
                          className="grow"
                          onChange={(e) => {
                            if (e.target.checked) {
                              reset({
                                ...getValues(),
                                first_name:
                                  customerProfileData.result.first_name,
                                last_name: customerProfileData.result.last_name,
                                phone_number:
                                  customerProfileData.result.phone_number,
                                email: customerProfileData.result.email,
                                account_id:
                                  customerProfileData.result.account_id,
                              });
                            } else {
                              reset({
                                ...getValues(),
                                first_name: "",
                                last_name: "",
                                phone_number: "",
                                email: "",
                              });
                            }
                          }}
                        />
                        Use your infor
                      </label>
                    )}
                  </div>
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
                          placeholder="weight"
                          {...register("pets.weight")}
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
          {step === 3 && (
            <div className="flex flex-1 flex-col items-center">
              <div className="flex w-1/3 flex-col items-center gap-y-2">
                <FcApproval size={98} />
                <div className="text-xl font-bold">
                  Booking Appointment Successful
                </div>
                <div className="my-5 text-center">
                  Please arrive at the scheduled time you have booked. If there
                  are any issues, we will contact you as soon as possible. Thank
                  you for using our services.
                </div>
                <div>
                  <button
                    className="btn btn-neutral"
                    onClick={() => bookingAgain()}
                  >
                    Booking Again
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {step !== 3 && (
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
                    account_id: userId,
                    appointment: {
                      status: "SCHEDULED",
                      appointment_date: new Date(
                        displayInputDate(new Date(getValues("date"))) +
                          " " +
                          getValues("time"),
                      ).toISOString(),
                      pets: [getValues("pets")],
                      services: [getValues("service")],
                    },
                  });
                }
              }}
            >
              next
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
};
