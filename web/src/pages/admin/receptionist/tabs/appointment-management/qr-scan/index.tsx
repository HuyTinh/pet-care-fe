import { useEffect, useState } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";

import { useGetAppointmentByIdQuery } from "../../../appointment.service";

export const QRScanModal = ({
  qrModalVisible,
  setQrModalVisible,
  setSelectedAppointment,
}: {
  qrModalVisible: boolean;
  setQrModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedAppointment: React.Dispatch<React.SetStateAction<any>>;
}) => {
  const [appointmentId, setAppointmentId] = useState<any>();

  const { data: appointmentResponse } = useGetAppointmentByIdQuery(
    { appointmentId: appointmentId },
    {
      skip: !appointmentId,
    },
  );

  useEffect(() => {
    if (appointmentResponse) {
      setSelectedAppointment(appointmentResponse.data);
      (document.getElementById("edit_appointment_modal") as any).showModal();
    }
  }, [appointmentResponse]);

  return (
    <dialog
      id="qr_scan_appointment_modal"
      className="modal backdrop:!hidden"
      onClose={() => setQrModalVisible(false)}
    >
      <div className="modal-box w-full">
        <div className="pb-5 text-center text-3xl font-bold">
          Scan Appointment Info
        </div>
        <div className="m-auto h-80 w-80">
          {
            <Scanner
              allowMultiple
              paused={!qrModalVisible}
              onScan={(result: any) => {
                if (result[0].rawValue) {
                  (
                    document.getElementById("qr_scan_appointment_modal") as any
                  ).close();
                  setQrModalVisible(false);
                  if (appointmentId === result[0].rawValue) {
                    // setAppointmentId(result[0].rawValue);
                    (
                      document.getElementById("edit_appointment_modal") as any
                    ).showModal();
                  } else {
                    setAppointmentId(result[0].rawValue);
                  }
                }
              }}
            />
          }
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
