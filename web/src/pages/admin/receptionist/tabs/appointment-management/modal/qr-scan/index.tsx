import { memo } from "react";
import { Scanner } from "@yudiel/react-qr-scanner";


export const QRScanModal = memo(({
  qrModalVisible,
  setQrModalVisible,
  sendMessage,
}: {
  qrModalVisible: boolean;
  sendMessage: (appointmentId: string, status: string) => void;
  setQrModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedAppointment: React.Dispatch<React.SetStateAction<any>>;
}) => {

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
                  sendMessage(result[0].rawValue, "CHECKED_IN")
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
});
