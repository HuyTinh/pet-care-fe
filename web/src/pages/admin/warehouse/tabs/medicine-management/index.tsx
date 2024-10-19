import { displayCustomDate } from "../../../../../utils/date";
import { FcCalendar } from "react-icons/fc";
import { motion } from "framer-motion";
import { useGetAllMedicinesQuery } from "../../medicine.service";
import { useEffect, useState } from "react";
import { IMedicine } from "../../../../../types/medicine.type";
import { EditMedicineModal } from "./edit-medicine-modal";
import { toCurrency } from "../../../../../utils/number-format";

export const MedicinesManagement = () => {
  const [medicines, setMedicines] = useState<IMedicine[]>();
  const [selectedMedicine, setSelectedMedicine] = useState<any>();
  const { data: medicineData, isFetching: isFetchingMedicineData } =
    useGetAllMedicinesQuery();
  useEffect(() => {
    if ((medicineData as any)?.data) {
      setMedicines((medicineData as any)?.data);
    }
  }, [medicineData]);
  const [isSortedByName, setIsSortedByName] = useState(false);

  const hanldSortByName = () => {
   
  }
  return (
    <>
      <div className="flex justify-between gap-x-2 p-2">
        <div className="flex items-center w-full max-w-md">
          <label className="input input-bordered flex items-center gap-2 w-full">
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
        <div className="flex items-center gap-2">
          <div>
            <img
              src="/src/assets/images/supply.png"
              className="w-[45px] h-[45px]"
              alt=""
            />
          </div>
          <div>
            <button className="btn btn-info flex items-center gap-2">
              <img
                src="/src/assets/images/add.png"
                alt=""
              />
              <span className="font-semibold text-white">Add item</span>
            </button>
          </div>
          <div>
            <button
              className="btn btn-info rounded-md flex items-center gap-2"
              onClick={() => {
                (
                  document.getElementById(
                    "filter_medicine_modal",
                  ) as any
                ).showModal();
              }}
            >
              <img
                src="/src/assets/images/filter.png"
                alt=""
              />
              <span className="font-semibold text-black">Filter</span>
            </button>
          </div>
        </div>
      </div >
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
              <tr className="text-lg ">
                <th></th>
                <th>
                  <span>Name</span>{" "}
                  <button onClick={hanldSortByName}>
                    <img
                      src="/src/assets/images/sort.png"
                      className="w-[12px] h-[12px]"
                    />
                  </button>
                </th>
                <th>
                  <span>Quantity</span>{" "}
                  <button>
                    <img
                      src="/src/assets/images/sort.png"
                      className="w-[12px] h-[12px]"
                    />
                  </button>
                </th>
                <th>Manufaturer</th>
                <th>Manufature Date</th>
                <th>Date import</th>
                <th>Status</th>
                <th>
                  <span>Price</span>{" "}
                  <button>
                    <img
                      src="/src/assets/images/sort.png"
                      className="w-[12px] h-[12px]"
                    />
                  </button>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {!isFetchingMedicineData &&
                (medicines as IMedicine[])?.map((me, index) => (
                  <motion.tr key={index}>
                    <th>#{me.id}</th>

                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={`src/assets/images/${me.image}`}
                              alt="Avatar Tailwind CSS Component" />
                          </div>
                        </div>
                        <div>
                          <div className=" text-base font-bold">{me.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="text-base font-bold">{me.quantity}</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="text-base font-bold">{me.manufactures}</span>
                      </div>
                    </td>
                    {/* <td>
                      {displayCustomDate(new Date(me.manufacturing_date))}
                      <br />
                      <span className="badge badge-ghost badge-sm">{displayCustomDate(new Date(me.expiry_date))}</span>
                    </td>
                     */}
                    <td className="text-center">
                      <div className="flex truncate flex-col">
                        <span className="font-bold underline">
                          {displayCustomDate(new Date(me.manufacturing_date))}
                        </span>
                        <div className="flex justify-center items-center">
                          <span className="font-bold justify-center">
                            to
                          </span>
                        </div>
                        <span className="font-bold underline">
                          {displayCustomDate(new Date(me.expiry_date))}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="font-bold">{displayCustomDate(new Date(me.date_import))}</span>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`rounded-lg p-1 ${me.status === "ACTIVE" ? "bg-green-300" : "bg-red-300"}`}
                      >
                        {me.status}
                      </span>
                    </td>
                    <td>
                      <div className="truncate">
                        <span className="font-bold underline">
                          <span className="text-base font-bold">{toCurrency(me.price)} VNĐ</span>
                        </span>
                      </div>
                    </td>
                    <td className="space-x-2">
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => {
                          (
                            document.getElementById(
                              "edit_medicine_modal",
                            ) as any
                          ).showModal();
                          setSelectedMedicine(me as IMedicine);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </motion.tr>
                ))}
            </tbody>
          </table>
        </div>
        <EditMedicineModal medicine={selectedMedicine} />
      </div >
    </>
  );
};
