import { useState, useEffect } from "react";
import { IAppointment } from "../../../../../types/appoiment.type";
import Select from "react-select";
import {
  displayInputDate,
  getDaysArray,
} from "../../../../../utils/date";
import { EditPrescriptionModal } from "./edit-prescription-modal";
import { QRScanModal } from "./qr-scan";
import { IoQrCodeOutline } from "react-icons/io5";
import { useFilterAppointmentsQuery } from "../../prescription.service";
import { PrescriptionTable } from "./prescription-table";
import { AppointmentTable } from "./appointment-table";
import { MakePrescriptionModal } from "./make-prescription-modal";
import { ViewPrescriptionModal } from "./view-prescription-modal";

export const PrescriptionManagement = () => {
  const initialDate = `${displayInputDate(new Date())}`;
  const [_appointments, setAppointments] = useState<IAppointment[]>([]);
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
    isFetching: _isFetchingFilterAppointmentData,
  } = useFilterAppointmentsQuery({
    startDate: startDate?.value,
    endDate: endDate?.value,
    statues: ["CHECKED_IN"],
  });

  const [selectedAppointment, setSelectedAppointment] = useState<IAppointment>(
    {} as IAppointment,
  );

  const [selectedPrescription, setSelectedPrescription] = useState<any>()
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
        <div className="relative  rounded-xl">
          <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Appointment" defaultChecked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <AppointmentTable startDate={startDate} endDate={endDate} setSelectedAppointment={setSelectedAppointment} />
            </div>

            <input
              type="radio"
              name="my_tabs_2"
              role="tab"
              className="tab"
              aria-label="Prescription"
            />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <PrescriptionTable setSelectedPrescription={setSelectedPrescription} />
            </div>
          </div>
        </div>
        <MakePrescriptionModal appointment={selectedAppointment} />
        <EditPrescriptionModal prescription={selectedPrescription} />
        <ViewPrescriptionModal prescription={selectedPrescription} />
        <QRScanModal
          qrModalVisible={qrModalVisible}
          setQrModalVisible={setQrModalVisible}
          setSelectedAppointment={setSelectedAppointment}
        />
      </div>
    </>
  );
};
