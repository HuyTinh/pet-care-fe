import { displayCustomDate } from "../../../../../utils/date";
import { FcCalendar } from "react-icons/fc";
import { motion } from "framer-motion";
import { useGetAllMedicinesQuery } from "../../medicine.service";
import { useEffect, useState } from "react";
import { IMedicine } from "../../../../../types/medicine.type";

export const MedicinesManagement = () => {
  const [medicines, setMedicines] = useState<IMedicine[]>();
  const { data: medicineData, isFetching: isFetchingMedicineData } =
    useGetAllMedicinesQuery();

  useEffect(() => {
    if (medicineData?.data) {
      setMedicines(medicineData.data);
    }
  }, [medicineData]);

  return (
    <>
      <div className="flex gap-x-2 p-2">
        <div className="flex-1">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
        </div>
      </div>
      <div className="flex-1 p-2">
        <div className="relative h-[36rem] overflow-auto rounded-xl border">
          {!isFetchingMedicineData && !(medicines as IMedicine[])?.length && (
            <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center">
              <FcCalendar size={64} className="mb-10" />
              <div>You don't have any appoiment</div>
            </div>
          )}
          {isFetchingMedicineData && (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
              }}
              transition={{
                type: "spring",
                stiffness: 100,
              }}
              className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center"
            >
              <div className="w-64">
                <img
                  src="/src/assets/images/loading.gif"
                  className="object-cover"
                  alt=""
                />
              </div>
              <div>Watting for few minute...</div>
            </motion.div>
          )}
          <table className="table">
            {/* head */}
            <thead className="sticky top-0 bg-white">
              <tr className="text-lg">
                <th></th>
                <th>Details</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!isFetchingMedicineData &&
                (medicines as IMedicine[])?.map((me, index) => (
                  <motion.tr key={index}>
                    <th>#{me.id}</th>
                    <td>
                      <div>
                        <span>Name: </span>
                        <span className="text-lg font-bold">{me.name}</span>
                      </div>
                      <div className="truncate">
                        <span>Manufacturing Date: </span>
                        <span className="font-bold underline">
                          {displayCustomDate(new Date(me.manufacturing_date))}
                        </span>
                      </div>
                      <div className="truncate">
                        <span>Expiry Date: </span>
                        <span className="font-bold underline">
                          {displayCustomDate(new Date(me.expiry_date))}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`rounded-lg p-1 ${me.status === "ACTIVE" ? "bg-green-300" : "bg-red-300"}`}
                      >
                        {me.status}
                      </span>
                    </td>
                    <td className="space-x-2">
                      <button className="btn btn-info btn-sm">Edit</button>
                    </td>
                  </motion.tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* <EditAppointmentModal appointment={selectedAppointment} /> */}
      </div>
    </>
  );
};
