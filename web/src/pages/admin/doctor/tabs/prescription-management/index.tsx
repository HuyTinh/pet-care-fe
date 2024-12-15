import { useState } from "react";
import { IAppointment } from "../../../../../@types/appoiment.type";
import { EditPrescriptionModal, FilterAppointmentModal, FilterPrescriptionModal, MakePrescriptionModal, QRScanModal, ViewPrescriptionModal } from "./components/modal";
import { AppointmentTable, PrescriptionTable } from "./components/table";

export const PrescriptionManagement = () => {
  const [filterPrescriptionConditions, setFilterPrescriptionConditions] = useState<any>({});
  const [filterAppointmentConditions, setFilterAppointmentConditions] = useState<any>({});
  // const [appointments, setAppointments] = useState<IAppointment[]>([]);

  const onFilterPrescriptionSubmit = (data: any) => {
    setFilterPrescriptionConditions(data); // Cập nhật điều kiện lọc
  };

  const onFilterAppointmentSubmit = (data: any) => {
    setFilterAppointmentConditions(data); // Cập nhật điều kiện lọc
  };


  const [selectedAppointment, setSelectedAppointment] = useState<IAppointment>(
    {} as IAppointment,
  );

  const [selectedPrescription, setSelectedPrescription] = useState<any>()
  const [qrModalVisible, setQrModalVisible] = useState<boolean>(false);


  return (
    <>
      <div className="flex gap-x-2 p-2">
        <div className="flex-1">
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
              <PrescriptionTable filterPrescriptionConditions={filterPrescriptionConditions} setSelectedPrescription={setSelectedPrescription} />
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
