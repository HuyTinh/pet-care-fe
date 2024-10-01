import { MdCancel } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { IHospitalService } from "../../../../../../types/hospital-service.type";
import { useGetHospitalServiceQuery } from "../../../appointment.service";

type ServicesPickerProps = {
  services: IHospitalService[];
  setServices: React.Dispatch<React.SetStateAction<IHospitalService[]>>;
};

export const ServicePicker = ({
  services,
  setServices,
}: ServicesPickerProps) => {
  const { reset } = useForm<IHospitalService>();

  const { data: hospitalServicesData, isFetching: _ } =
    useGetHospitalServiceQuery();
  const [expand, setExpand] = useState(false);
  const addServices = (data: IHospitalService) => {
    setServices((prevState) => [...prevState, data]);
    reset({});
  };

  return (
    <motion.div className="space-y-5 py-2">
      <form action="" className="">
        <div className="flex w-full rounded-lg border p-2">
          <div className="flex flex-1 flex-col">
            <span className="pb-2">Services:</span>
            <div className="flex flex-1 flex-wrap items-center gap-2 gap-x-2">
              {!services?.length ? (
                <button className="btn btn-sm rounded-badge" type="button">
                  Inbox
                  <div
                    className="avatar"
                    onClick={() => {
                      console.log(12);
                    }}
                  >
                    <MdCancel />
                  </div>
                </button>
              ) : (
                services.map((p, index) => (
                  <span
                    className="flex items-center space-x-1 rounded-badge bg-slate-300 px-1"
                    key={index}
                    onClick={() => {
                      reset(p);
                    }}
                  >
                    <span>{p.name}</span>
                    <div
                      className="avatar cursor-pointer hover:text-slate-400"
                      onClick={(e) => {
                        e.stopPropagation();
                        setServices((prevState) =>
                          prevState.filter((s) => s.name !== p.name),
                        );
                      }}
                    >
                      <MdCancel />
                    </div>
                  </span>
                ))
              )}
            </div>
          </div>
          <div className="flex items-start">
            <button
              className="btn btn-sm rounded-badge"
              type="button"
              onClick={() => setExpand(!expand)}
            >
              <motion.div
                animate={{
                  rotate: expand ? 180 : 0,
                }}
              >
                <FaAngleDown />
              </motion.div>
            </button>
          </div>
        </div>
        <motion.div
          className="h-0 space-y-5 overflow-hidden pt-1"
          animate={{
            height: expand ? "auto" : "0",
          }}
        >
          <div className="flex justify-between gap-x-5 p-2">
            <select
              className="select select-bordered w-full"
              onChange={(e) =>
                addServices(
                  (hospitalServicesData?.result as IHospitalService[])[
                    e.target.value as any
                  ],
                )
              }
            >
              <option disabled selected>
                Choose Service
              </option>
              {(hospitalServicesData?.result as IHospitalService[])
                ?.filter(
                  (hs) =>
                    !services
                      ?.map((hsm) => {
                        return hsm.name;
                      })
                      .includes(hs.name),
                )
                .map((hs, index) => (
                  <option key={index} value={index}>
                    {hs.name}
                  </option>
                ))}
            </select>
            {/* <label className="input input-bordered flex flex-1 items-center gap-2">
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
                placeholder="Name"
                {...register("name")}
              />
            </label>
          </div>
          <div className="flex justify-between gap-x-5 px-2">
            <div className="space-x-5">
              <button
                className="btn"
                type="button"
                onClick={() => addServices(getValues())}
              >
                Add
              </button>
              <button className="btn" type="reset">
                Clear
              </button>
            </div> */}
          </div>
        </motion.div>
      </form>
    </motion.div>
  );
};
