import { displayCustomDate } from "../../../../../utils/date";
import { FcCalendar } from "react-icons/fc";
import { motion } from "framer-motion";
import { useGetAllMedicinesQuery } from "../../medicine.service";
import { useEffect, useState } from "react";
import { IMedicine } from "../../../../../types/medicine.type";
import { EditMedicineModal } from "./edit-medicine-modal";
import { toCurrency } from "../../../../../utils/number-format";
import { AddMedicineModal } from "./add-medicine-modal";
import { FilterMedicineModal } from "./filter-medicine-modal";
import { FaFilter } from "react-icons/fa";

export const MedicinesManagement = () => {
  const [medicines, setMedicines] = useState<IMedicine[]>([]);
  const [selectedMedicine, setSelectedMedicine] = useState<IMedicine | null>(
    null,
  );
  const { data: medicineData, isFetching: isFetchingMedicineData } =
    useGetAllMedicinesQuery();
  const [filterConditions, setFilterConditions] = useState<any>({});
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [sortField, setSortField] = useState<string>("id");
  const [sortOrder, setSortOrder] = useState<string>("asc");

  const filteredMedicines = medicines
    .filter((medicine) => {
      const matchesManufacturingDate =
        !filterConditions.manufacturing_date ||
        new Date(medicine.manufacturing_date) >=
        new Date(filterConditions.manufacturing_date);

      const matchesExpiryDate =
        !filterConditions.expiry_date ||
        new Date(medicine.expiry_date) <=
        new Date(filterConditions.expiry_date);

      const matchesStatus =
        !filterConditions.status ||
        medicine.status === filterConditions.status.toUpperCase();

      const matchesPrice =
        (!filterConditions.min_price ||
          medicine.price >= filterConditions.min_price) &&
        (!filterConditions.max_price ||
          medicine.price <= filterConditions.max_price);

      return (
        matchesManufacturingDate &&
        matchesExpiryDate &&
        matchesStatus &&
        matchesPrice
      );
    })
    .filter(
      (medicine) =>
        medicine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        medicine.manufacture?.name
          .toLowerCase()
          .includes(searchTerm.toLowerCase()),
    )
    .sort((a, b) => {
      const aValue =
        sortField === "price" ? a.price : a[sortField as keyof IMedicine];
      const bValue =
        sortField === "price" ? b.price : b[sortField as keyof IMedicine];
      if (sortOrder === "asc") {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    })
    .slice(currentPage * pageSize, currentPage * pageSize + pageSize);

  const onFilterSubmit = (data: any) => {
    setFilterConditions(data); // Cập nhật điều kiện lọc
  };
  useEffect(() => {
    if (medicineData?.data) {
      setMedicines(medicineData.data);
    }
  }, [medicineData]);

  return (
    <>
      <div className="flex justify-between gap-x-2 p-2">
        <div className="flex w-full max-w-md items-center">
          <label className="input input-bordered flex w-full items-center gap-2">
            <input
              type="text"
              className="grow"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
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
          <img src="/src/assets/images/supply.png" className="w-12 h-12 cursor-pointer" onClick={() => setFilterConditions(medicineData)} />
          <button
            className="btn btn-info flex items-center gap-2"
            onClick={() =>
              (document.getElementById("add_medicine_modal") as any).showModal()
            }
          >
            <img src="/src/assets/images/add.png" alt="" />
            <span className="font-semibold text-white">Add item</span>
          </button>
          <button
            className="btn btn-info flex items-center gap-2 rounded-md"
            onClick={() =>
              (
                document.getElementById("filter_medicine_modal") as any
              ).showModal()
            }
          >
            <FaFilter color="white" />
            <span className="font-semibold text-white">Filter</span>
          </button>
        </div>
      </div>
      <div className="flex-1 p-2">
        <div className="relative h-[36rem] overflow-auto rounded-xl border">
          {!isFetchingMedicineData && medicines.length === 0 && (
            <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center">
              <FcCalendar size={64} className="mb-10" />
              <div>You don't have any appointments</div>
            </div>
          )}
          {isFetchingMedicineData && (
            <motion.div
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center"
            >
              <div className="w-64">
                <img
                  src="/src/assets/images/loading.gif"
                  className="object-cover"
                  alt=""
                />
              </div>
              <div>Waiting for a few minutes...</div>
            </motion.div>
          )}
          <table className="table">
            <thead className="sticky top-0 bg-white">
              <tr className="text-lg">
                <th></th>
                <th className="cursor-pointer"
                  onClick={() => {
                    setSortField("name");
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  }}
                >
                  <span
                  >
                    Name
                  </span>
                  <button
                  >
                    <img
                      src="/src/assets/images/sort.png"
                      className="h-[12px] w-[12px]"
                    />
                  </button>
                </th>
                <th className="cursor-pointer"
                  onClick={() => {
                    setSortField("quantity");
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  }}
                >
                  <span
                  >
                    Quantity
                  </span>
                  <button
                  >
                    <img
                      src="/src/assets/images/sort.png"
                      className="h-[12px] w-[12px]"
                    />
                  </button>
                </th>
                <th>Manufacturer</th>
                <th>Manufacture Date</th>
                <th>Date Import</th>
                <th>Status</th>
                <th className="cursor-pointer"
                  onClick={() => {
                    setSortField("price");
                    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
                  }}
                >
                  <span
                  >
                    Price
                  </span>
                  <button
                  >
                    <img
                      src="/src/assets/images/sort.png"
                      className="h-[12px] w-[12px]"
                    />
                  </button>
                </th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {!isFetchingMedicineData &&
                filteredMedicines.map((me, index) => (
                  <motion.tr key={index}>
                    <th>#{me.id}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <img className="h-12 w-12" src={me.image_url} alt={me.name} />
                        <div>
                          <div className="text-base font-bold">{me.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="text-base font-bold">
                          {me.quantity}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="text-base font-bold">
                          {me.manufacture?.name}
                        </span>
                      </div>
                    </td>
                    <td className="text-center">
                      <div className="flex flex-col truncate">
                        <span className="font-bold underline">
                          {displayCustomDate(new Date(me.manufacturing_date))}
                        </span>
                        <div className="flex items-center justify-center">
                          <span className="justify-center font-bold">to</span>
                        </div>
                        <span className="font-bold underline">
                          {displayCustomDate(new Date(me.expiry_date))}
                        </span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <span className="font-bold">
                          {displayCustomDate(new Date(me.date_import))}
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
                    <td>
                      <div className="truncate">
                        <span className="font-bold underline">
                          <span className="text-base font-bold">
                            {toCurrency(me.price)} VNĐ
                          </span>
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
                        <span className="text-white">Edit</span>
                      </button>
                    </td>
                  </motion.tr>
                ))}
            </tbody>
          </table>
          {/* Pagination Controls */}
          <div className="flex items-center justify-between p-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
              disabled={currentPage === 0}
              className="btn btn-info"
            >
              <span className="text-white">Previous</span>
            </button>
            <span>
              Page {currentPage + 1} of {Math.ceil(medicines.length / pageSize)}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => prev + 1)}
              disabled={
                currentPage >= Math.ceil(medicines.length / pageSize) - 1
              }
              className="btn btn-info"
            >
              <span className="text-white">Next</span>
            </button>
          </div>
        </div>
        <EditMedicineModal medicine={selectedMedicine!} />
        <AddMedicineModal />
        <FilterMedicineModal onFilterSubmit={onFilterSubmit} />
      </div>
    </>
  );
};
