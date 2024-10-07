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
    setServices((prevState) => [...prevState, data]);
  };

  const removeServices = (indexService: number) => {
    setServices((prevState) => {
      return prevState.filter((val, index) => index !== indexService);
    });
  };

  return (
    <motion.div className="overflow-hidden">
      <form action="">
        <div className="flex w-full items-center rounded-lg border p-2">
          <div className="flex flex-1 flex-col">
            <span className="pb-2">Services:</span>
            <div className="flex flex-1 flex-wrap items-center gap-2">
              {!services?.length ? (
                <span className="flex cursor-default items-center justify-around gap-x-1 rounded-badge bg-base-200 px-2 text-sm font-semibold">
                  Service
                  <div
                    className="avatar"
                    onClick={(e) => {
                      e.stopPropagation();
                    }}
                  >
                    <MdCancel />
                  </div>
                </span>
              ) : (
                services.map((s, index) => (
                  <span
                    className="flex cursor-default items-center justify-around gap-x-1 rounded-badge bg-base-200 px-2 text-sm font-semibold"
                    key={index}
                    onClick={() => {
                      reset(s);
                    }}
                  >
                    <div>{s.name}</div>
                    <div
                      className="avatar cursor-pointer"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeServices(index);
                      }}
                    >
                      <MdCancel />
                    </div>
                  </span>
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
          className="space-y-2 overflow-hidden"
          animate={{
            height: expand ? "auto" : "0",
          }}
        >
          <div className="flex justify-between gap-x-2 px-2 py-1">
            <label className="flex flex-1 items-center">
              <select
                className="select select-bordered w-full"
                onChange={(e) => {
                  if (e.target.value !== "") {
                    addServices(
                      hospitalServicesData?.data?.find(
                        (val: any) => val.name === e.target.value,
                      ),
                    );
                    e.target.value = "";
                  }
                }}
              >
                <option value={""}>Services ?</option>

                {services?.length < 3 &&
                  (hospitalServicesData?.data as any[])
                    ?.filter(
                      (val) =>
                        !services.map((val) => val.name).includes(val.name),
                    )
                    .map((val, index) => (
                      <option key={index} value={val?.name}>
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
