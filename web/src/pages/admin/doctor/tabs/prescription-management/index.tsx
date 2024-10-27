import { useState, useEffect } from "react";
import { IAppointment } from "../../../../../types/appoiment.type";
import {
  displayInputDate,
} from "../../../../../utils/date";
import { EditPrescriptionModal } from "./edit-prescription-modal";
import { QRScanModal } from "./qr-scan";
import { useFilterAppointmentsQuery } from "../../prescription.service";
import { PrescriptionTable } from "./prescription-table";
import { AppointmentTable } from "./appointment-table";
import { MakePrescriptionModal } from "./make-prescription-modal";
import { ViewPrescriptionModal } from "./view-prescription-modal";
import { FilterPrescriptionModal } from "./filter-prescription-modal";
import { FilterAppointmentModal } from "./filter-appointment-modal";

export const PrescriptionManagement = () => {
  const initialDate = `${displayInputDate(new Date())}`;
  const [filterPrescriptionConditions, setFilterPrescriptionConditions] = useState<any>({});
  const [filterAppointmentConditions, setFilterAppointmentConditions] = useState<any>({});
  const [_appointments, setAppointments] = useState<IAppointment[]>([]);
  const [startDate, setStartDate] = useState<any>({
    value: initialDate,
    label: initialDate,
  });

  const onFilterPrescriptionSubmit = (data: any) => {
    setFilterPrescriptionConditions(data); // Cập nhật điều kiện lọc
  };

  const onFilterAppointmentSubmit = (data: any) => {
    setFilterAppointmentConditions(data); // Cập nhật điều kiện lọc
  };


  const [endDate, setEndDate] = useState<any>({
    value: initialDate,
    label: initialDate,
  });

  const {
    data: filterAppointmentData,
    isFetching: _isFetchingFilterAppointmentData,
  } = useFilterAppointmentsQuery({
    startDate: filterAppointmentConditions["start_date"],
    endDate: filterAppointmentConditions["end_date"],
    statues: ["CHECKED_IN"],
  });

  console.log(filterAppointmentData);

  const [selectedAppointment, setSelectedAppointment] = useState<IAppointment>(
    {} as IAppointment,
  );

  const [selectedPrescription, setSelectedPrescription] = useState<any>()
  const [qrModalVisible, setQrModalVisible] = useState<boolean>(false);
  // useEffect(() => {
  //   setAppointments(filterAppointmentData?.data);
  //   console.log(123456);

  //   return () => { };
  // }, [filterAppointmentConditions]);

  return (
    <>
      <div className="flex gap-x-2 p-2">
        <div className="flex-1">
          {/* <Select
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
          /> */}

        </div>
      </div>
      <div className="flex-1 p-2">
        <div className="relative  rounded-xl">
          <div role="tablist" className="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Appointment" defaultChecked />
            <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <AppointmentTable filterAppointmentConditions={filterAppointmentConditions} setSelectedAppointment={setSelectedAppointment} />
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
        <FilterPrescriptionModal onFilterSubmit={onFilterPrescriptionSubmit} />
        <FilterAppointmentModal onFilterSubmit={onFilterAppointmentSubmit} />
        <QRScanModal
          qrModalVisible={qrModalVisible}
          setQrModalVisible={setQrModalVisible}
          setSelectedAppointment={setSelectedAppointment}
        />
      </div>
    </>
  );
};
