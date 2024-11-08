"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FcCalendar } from "react-icons/fc";
import { FaFilter } from "react-icons/fa";
import { useGetAllMedicinesQuery } from "../../medicine.service";
import { IMedicine } from "../../../../../types/medicine.type";
import { EditMedicineModal } from "./edit-medicine-modal";
import { AddMedicineModal } from "./add-medicine-modal";
import { FilterMedicineModal } from "./filter-medicine-modal";
import { displayCustomDate } from "../../../../../utils/date";
import { toCurrency } from "../../../../../utils/number-format";
import { TbFilterX } from "react-icons/tb";

export default function MedicinesManagement() {
  const [selectedMedicine, setSelectedMedicine] = useState<IMedicine | null>(
    null,
  );
  const [filterConditions, setFilterConditions] = useState<{
    manufacturingDate?: string;
    expiryDate?: string;
    status?: string;
    minPrice?: number;
    maxPrice?: number;
  }>({});
  const handleClearFilters = () => {
    setFilterConditions({}); // Đặt lại tất cả các tiêu chí lọc
  };
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [pageSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("id");
  const [sortOrder, setSortOrder] = useState<string>("asc");
  const [selectedType, setSelectedType] = useState<string>("MEDICINE");

  const { data: medicineData, isFetching: isFetchingMedicineData } =
    useGetAllMedicinesQuery({
      pageNumber: currentPage,
      pageSize,
      searchTerm,
      ...filterConditions,
      sortBy,
      sortOrder,
      types: selectedType,
    });

  const onFilterSubmit = (data: any) => {
    setFilterConditions(data);
    setCurrentPage(0); // Reset to first page when applying new filters
  };

  const handleSort = (field: string) => {
    if (field === sortBy) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("asc");
    }
  };

  const totalPages = medicineData?.data.total_pages || 0;

  const getPageNumbers = () => {
    let start = Math.max(1, Math.min(currentPage + 1 - 1, totalPages - 2));
    let end = Math.min(start + 2, totalPages);
    start = Math.max(1, end - 2);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  };

  const pageNumbers = getPageNumbers();

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
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(0); // Reset to first page when searching
              }}
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
          <div className="ml-3">
            <select
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                setFilterConditions({});
                setCurrentPage(0);
              }}
              className="select select-bordered"
            >
              <option value="MEDICINE">Medicine</option>
              <option value="SURGICAL_INSTRUMENTS">Surgical Instruments</option>
              <option value="CONSUMABLES">Consumables</option>
              <option value="TREATMENT_TOOLS">Treatment Tools</option>
            </select>
          </div>
        </div>
        <div className="flex items-center gap-2">
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
          <button className="btn btn-outline" onClick={handleClearFilters}>
            <TbFilterX />
          </button>
          {totalPages > 0 && (
            <div className="mt-4 flex justify-center">
              <ul className="join">
                <li>
                  <button
                    onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                    disabled={currentPage === 0}
                    className="btn join-item btn-sm"
                  >
                    «
                  </button>
                </li>

                {pageNumbers.map((number) => (
                  <li key={number}>
                    <button
                      onClick={() => setCurrentPage(number - 1)}
                      className={`btn join-item btn-sm ${
                        currentPage === number - 1 ? "btn-active" : ""
                      }`}
                    >
                      {number}
                    </button>
                  </li>
                ))}

                <li>
                  <button
                    onClick={() =>
                      setCurrentPage(Math.min(totalPages - 1, currentPage + 1))
                    }
                    disabled={currentPage === totalPages - 1}
                    className="btn join-item btn-sm"
                  >
                    »
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 p-2">
        <div className="relative h-[36rem] overflow-auto rounded-xl border">
          {!isFetchingMedicineData &&
            medicineData?.data.content.length === 0 && (
              <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center">
                <FcCalendar size={64} className="mb-10" />
                <div>No medicines found</div>
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
              <div>Loading medicines...</div>
            </motion.div>
          )}
          <table className="table">
            <thead className="sticky top-0 bg-white">
              <tr className="text-lg">
                <th></th>
                <th
                  className="cursor-pointer"
                  onClick={() => handleSort("name")}
                >
                  <span>Name</span>
                  <button>
                    <img
                      src="/src/assets/images/sort.png"
                      className="h-[12px] w-[12px]"
                    />
                  </button>
                </th>
                <th
                  className="cursor-pointer"
                  onClick={() => handleSort("quantity")}
                >
                  <span>Quantity</span>
                  <button>
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
                <th
                  className="cursor-pointer"
                  onClick={() => handleSort("price")}
                >
                  <span>Price</span>
                  <button>
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
                medicineData?.data.content.map(
                  (me: IMedicine, index: number) => (
                    <motion.tr key={index}>
                      <th>#{me.id}</th>
                      <td>
                        <div className="flex items-center gap-3">
                          <img
                            className="h-12 w-12"
                            src={me.image_url}
                            alt={me.name}
                          />
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
                            setSelectedMedicine(me);
                          }}
                        >
                          <span className="text-white">Edit</span>
                        </button>
                      </td>
                    </motion.tr>
                  ),
                )}
            </tbody>
          </table>
          {/* Pagination Controls */}
        </div>
        <EditMedicineModal medicine={selectedMedicine!} />
        <AddMedicineModal />
        <FilterMedicineModal onFilterSubmit={onFilterSubmit} />
      </div>
    </>
  );
}
