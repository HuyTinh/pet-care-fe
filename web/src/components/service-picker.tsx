import { MdCancel } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { IHospitalService } from "../types/hospital-service.type";
import { useGetHospitalServiceQuery } from "../pages/admin/receptionist/appointment.service";

type ServicePickerProps = {
  services: IHospitalService[];
  setServices: React.Dispatch<React.SetStateAction<IHospitalService[]>>;
};

export const ServicePicker = ({
  services,
  setServices,
}: ServicePickerProps) => {
  const { reset } = useForm<IHospitalService>();

  const { data: hospitalServicesData } = useGetHospitalServiceQuery();

  const [expand, setExpand] = useState(false);
  const addServices = (data: IHospitalService) => {
    console.log(services);
    setServices((prevState) => [...prevState, data]);
  };

  return (
    <motion.div className="overflow-hidden py-2">
      <form action="" className="space-y-5">
        <div className="flex w-full items-center rounded-lg border p-2">
          <div className="flex flex-1 flex-col">
            <span className="pb-2">Services:</span>
            <div className="flex flex-1 flex-wrap items-center gap-2">
              {!services?.length ? (
                <button
                  className="btn btn-sm flex-1 rounded-badge"
                  type="button"
                >
                  Inbox
                  <div
                    className="avatar"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <MdCancel />
                  </div>
                </button>
              ) : (
                services.map((s, index) => (
                  <button
                    className="btn btn-sm rounded-badge"
                    key={index}
                    type="button"
                    onClick={() => {
                      reset(s);
                    }}
                  >
                    {s.name}
                    <div
                      className="avatar"
                      onClick={(e) => {
                        e.stopPropagation();
                        alert(s.name);
                      }}
                    >
                      <MdCancel />
                    </div>
                  </button>
                ))
              )}
            </div>
          </div>
          <div>
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
          className="0 space-y-2 overflow-hidden"
          animate={{
            height: expand ? "auto" : "0",
          }}
        >
          <div className="flex justify-between gap-x-2 px-2">
            <label className="flex flex-1 items-center">
              <select
                className="select select-bordered w-full"
                onChange={(e) => {
                  if (e.target.value !== "") {
                    addServices(hospitalServicesData?.result[e.target.value]);
                  }
                }}
              >
                <option value={""}>Services ?</option>
                {(hospitalServicesData?.result as any[])?.map((val, index) => (
                  <option key={index} value={index}>
                    {val?.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </motion.div>
      </form>
    </motion.div>
  );
};
