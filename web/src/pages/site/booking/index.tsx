import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { displayInputDate, displayPlusDate } from "../../../utils/date";
import Select from "react-select";
import { useForm } from "react-hook-form";
import { FcApproval } from "react-icons/fc";
import {
  useCreateAppointmentMutation,
  useGetSpeciesQuery,
} from "../../admin/receptionist/appointment.service";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useGetCustomerProfileQuery } from "../customer.service";
import { AnimateSection } from "../../../components/animate-section";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { time } from "../../../constant/time";

export const BookingPage = () => {
  const [step, setStep] = useState(1);
  const { register, getValues, setValue, reset } = useForm<any>({
    mode: "onSubmit",
  });
  const { data: specieData } = useGetSpeciesQuery();

  const [createAppointment, { isError }] = useCreateAppointmentMutation();
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

  if (isError) {
    toast.error("Check again your info!", {
      position: "top-right",
    });
  }
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
                    options={time}
                    className="flex *:flex-1"
                    placeholder="Select time"
                    onChange={(singleValue) =>
                      setValue("time", singleValue?.time)
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
                                first_name: customerProfileData.data.first_name,
                                last_name: customerProfileData.data.last_name,
                                phone_number:
                                  customerProfileData.data.phone_number,
                                email: customerProfileData.data.email,
                                account_id: customerProfileData.data.account_id,
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
                          {...register("first_name", {
                            required: "First name is empty!",
                          })}
                        />
                      </label>
                      <label className="input input-bordered flex w-72 items-center gap-2">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Last name"
                          {...register("last_name", {
                            required: "Last name is empty!",
                          })}
                        />
                      </label>
                    </div>
                    <div className="flex gap-x-5">
                      <label className="input input-bordered flex w-72 items-center gap-2">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Email"
                          {...register("email", {
                            required: "Email is empty!",
                          })}
                        />
                      </label>
                      <label className="input input-bordered flex w-72 items-center gap-2">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Phone number"
                          {...register("phone_number", {
                            required: "Phone number is empty!",
                          })}
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
                          {...register("pets.name", {
                            required: "Age is empty!",
                          })}
                        />
                      </label>
                      <label className="input input-bordered flex w-72 items-center gap-2">
                        <input
                          type="text"
                          className="grow"
                          placeholder="Age"
                          {...register("pets.age", {
                            required: "Age is empty!",
                          })}
                        />
                      </label>
                    </div>
                    <div className="flex gap-x-5">
                      <label className="input input-bordered flex w-72 items-center gap-2">
                        <input
                          type="text"
                          className="grow"
                          placeholder="weight"
                          {...register("pets.weight", {
                            required: "Weight is empty!",
                          })}
                        />
                      </label>
                      <select
                        className="select select-bordered w-72"
                        {...register("pets.species", {
                          required: "Spieces is empty!",
                        })}
                        defaultValue={""}
                      >
                        <option value={""}>Species?</option>
                        {(specieData?.data as any[]).map((val, index) => (
                          <option key={index} value={val.name}>
                            {val.name}
                          </option>
                        ))}
                      </select>
                      {/* <input
                          type="text"
                          className="grow"
                          placeholder="Species"
                          {...register("pets.species", {
                            required: "Spieces is empty!",
                          })}
                        /> */}
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
              type={`${step === 2 ? "button" : "submit"}`}
              onClick={() => {
                if (step < 3) {
                  if (step == 1) {
                    if (!(getValues("date") && getValues("time"))) {
                      return toast.error("Check again your service!", {
                        position: "top-right",
                      });
                    }
                  }
                  if (step === 2) {
                    if (
                      !(
                        getValues("first_name") &&
                        getValues("last_name") &&
                        getValues("email") &&
                        getValues("phone_number") &&
                        getValues("email") &&
                        getValues("pets.name") &&
                        getValues("pets.age") &&
                        getValues("pets.weight") &&
                        getValues("pets.species")
                      )
                    ) {
                      return toast.error("Check again your infor!", {
                        position: "top-right",
                      });
                    }
                  }
                  setStep(step + 1);
                }
                if (step === 2) {
                  createAppointment({
                    first_name: getValues("first_name"),
                    last_name: getValues("last_name"),
                    email: getValues("email"),
                    phone_number: getValues("phone_number"),
                    account_id: userId,
                    status: "SCHEDULED",
                    appointment_date: displayInputDate(
                      new Date(getValues("date")),
                    ),
                    appointment_time: getValues("time"),
                    pets: [getValues("pets")],
                    services: ["Diagnosis"],
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
