import { useState } from "react";
import QrReader from "react-qr-scanner";
import { useGetAppointmentByIdQuery } from "../../../appointment.service";

export const QRScanModal = ({
  qrScanOpen,
  setSelectAppointment,
}: {
  qrScanOpen: Boolean;
  setSelectAppointment?: React.Dispatch<React.SetStateAction<undefined>>;
}) => {
  const [result, setResult] = useState<number>();
  // const { data: getAppointmentById } = useGetAppointmentByIdQuery(
  //   { appointmentId: result },
  //   {
  //     skip: !result,
  //   },
  // );

  console.log(qrScanOpen);

  return (
    <dialog id="qr_scan_appointment_modal" className="modal backdrop:!hidden">
      <div className="modal-box w-full max-w-xl">
        <div className="text-center text-3xl font-bold">
          Scan Appointment Info
        </div>
        <div className="flex justify-center">
          {qrScanOpen && (
            <QrReader
              delay={1000}
              style={{
                height: 240,
                width: 320,
              }}
              onError={(err: any) => {
                console.error(err);
              }}
              onScan={(data: any) => {
                if (data) {
                  setResult(data);
                  // setSelectAppointment;
                }
              }}
            />
          )}
          {/* <p>{result}</p> */}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
