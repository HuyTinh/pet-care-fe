import { useState, useEffect } from "react";
import { IAppointment } from "../../../../../types/appoiment.type";
import Select from "react-select";
import {
  displayCustomDate,
  displayInputDate,
  getDaysArray,
} from "../../../../../utils/date";
import { FcCalendar } from "react-icons/fc";
import { motion } from "framer-motion";
import { EditPrescriptionModal } from "./edit-prescription-modal";
import { QRScanModal } from "./qr-scan";
import { IoQrCodeOutline } from "react-icons/io5";
import { useFilterAppointmentsQuery } from "../../prescription.service";
import { SiGoogledocs } from "react-icons/si";

export const PrescriptionManagement = () => {
  const initialDate = `${displayInputDate(new Date())}`;
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [startDate, setStartDate] = useState<any>({
    value: initialDate,
    label: initialDate,
  });
  const [endDate, setEndDate] = useState<any>({
    value: initialDate,
    label: initialDate,
  });

  const {
    data: filterAppointmentData,
    isFetching: isFetchingFilterAppointmentData,
  } = useFilterAppointmentsQuery({
    startDate: startDate?.value,
    endDate: endDate?.value,
    statues: ["CHECKED_IN"],
  });

  const [selectedAppointment, setSelectedAppointment] = useState<IAppointment>(
    {} as IAppointment,
  );
  const [qrModalVisible, setQrModalVisible] = useState<boolean>(false);
  useEffect(() => {
    setAppointments(filterAppointmentData?.data);
    return () => { };
  }, [filterAppointmentData?.data]);

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
        <div className="flex space-x-2">
          <Select
            defaultValue={startDate}
            options={getDaysArray(
              `${new Date().getFullYear()}-01-01`,
              `${new Date().getFullYear() + 1}-01-01`,
            ).map((val) => {
              return { value: val, label: val };
            })}
            className="flex w-40 *:!z-[999] *:flex-1"
            onChange={(singleValue) => setStartDate(singleValue)}
          />
          <Select
            defaultValue={endDate}
            options={getDaysArray(
              `${new Date().getFullYear()}-01-01`,
              `${new Date().getFullYear() + 1}-01-01`,
            ).map((val) => {
              return { value: val, label: val };
            })}
            className="flex w-40 *:!z-[999] *:flex-1"
            onChange={(singleValue) => setEndDate(singleValue)}
          />
          <button
            className="btn btn-outline"
            onClick={() => {
              setQrModalVisible(true);
              (
                document.getElementById("qr_scan_appointment_modal") as any
              ).showModal();
            }}
          >
            <IoQrCodeOutline />
          </button>
        </div>
      </div>
      <div className="flex-1 p-2">
        <div className="relative h-[36rem] overflow-auto rounded-xl border">
          {!isFetchingFilterAppointmentData &&
            !(appointments as any[])?.length && (
              <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center">
                <FcCalendar size={64} className="mb-10" />
                <div>You don't have any appoiment</div>
              </div>
            )}
          {isFetchingFilterAppointmentData && (
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
              <tr>
                <th></th>
                <th>Customer</th>
                <th>Appointment Date</th>
                <th>Status</th>
                <th className="text-center">Make Prescription</th>
              </tr>
            </thead>
            <tbody>
              {!isFetchingFilterAppointmentData &&
                (appointments as IAppointment[])?.map((ap, index) => (
                  <motion.tr key={index}>
                    <th>#{ap.id}</th>
                    <td>
                      <div>
                        <span>Name: </span>
                        <span className="font-bold underline">
                          {ap.first_name + " " + ap.last_name}
                        </span>
                      </div>
                      <div>
                        <span>Email: </span>
                        <span className="font-bold underline">{ap.email}</span>
                      </div>
                    </td>
                    <td>
                      <div className="truncate">
                        <span className="font-bold underline">
                          {displayCustomDate(new Date(ap.appointment_date))},{" "}
                          {ap.appointment_time.substring(0, 5) + "h"}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`${ap.status === "CHECKED_IN" && "rounded-lg bg-blue-300 p-1"}`}
                      >
                        {ap.status}
                      </span>
                    </td>
                    <td className="space-x-2 text-center">
                      <button
                        className="btn btn-info btn-outline"
                        onClick={() => {
                          (
                            document.getElementById(
                              "make_prescription_modal",
                            ) as any
                          ).showModal();
                          setSelectedAppointment(ap as any);
                        }}
                      >
                        <SiGoogledocs size={24} />
                      </button>

                    </td>
                  </motion.tr>
                ))}
            </tbody>
          </table>
        </div>
        <EditPrescriptionModal appointment={selectedAppointment} />
        <QRScanModal
          qrModalVisible={qrModalVisible}
          setQrModalVisible={setQrModalVisible}
          setSelectedAppointment={setSelectedAppointment}
        />
      </div>
    </>
  );
};
