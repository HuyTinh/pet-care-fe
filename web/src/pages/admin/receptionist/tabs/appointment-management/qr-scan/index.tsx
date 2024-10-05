import { memo, useCallback, useEffect, useMemo, useState } from "react";
import QrReader from "react-qr-scanner";
// To use Html5QrcodeScanner (more info below)
import { Html5QrcodeScanner } from "html5-qrcode";

// import { useGetAppointmentByIdQuery } from "../../../appointment.service";

export const QRScanModal = ({
  qrScanOpen,
  setSelectAppointment,
}: {
  qrScanOpen: Boolean;
  setSelectAppointment?: React.Dispatch<React.SetStateAction<undefined>>;
}) => {
  const [result, setResult] = useState<number>();
  const [scannerState, setScannerState] = useState();

  useEffect(() => {
    return () => {
      const scanner = new Html5QrcodeScanner(
        "reader",
        {
          qrbox: {
            width: 250,
            height: 250,
          },
          fps: 5,
        },
        undefined,
      );

      // scanner.clear();
      setScannerState(scanner as any);
      scanner.render(success, error);
      // scanner.clear();
      function success(res: any) {
        scanner.clear();
        setResult(res);
      }
      function error(err: any) {
        console.warn(err);
      }
      // if (!result) {
      //   scanner.clear();
      //   scanner.render(success, error);
      //   function success(res: any) {
      //     scanner.clear();
      //     setResult(res);
      //   }
      //   function error(err: any) {
      //     console.warn(err);
      //   }
      // }
    };
  }, []);

  // useEffect(() => {
  //   setResult(1);
  // }, []);

  // const { data: getAppointmentById } = useGetAppointmentByIdQuery(
  //   { appointmentId: result },
  //   {
  //     skip: !result,
  //   },
  // );

  return (
    <dialog
      id="qr_scan_appointment_modal"
      className="modal backdrop:!hidden"
      onClose={() => (scannerState as any).clear()}
    >
      <div className="modal-box w-full max-w-xl">
        <div className="text-center text-3xl font-bold">
          Scan Appointment Info
        </div>
        <div className="flex justify-center">
          <div id="reader" className="w-[600px]"></div>
          {/* {qrScanOpen && (
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
                console.log(1);
                if (data) {
                  setResult(data);
                  console.log(data);
                  // setSelectAppointment;
                }
              }}
            />
          )} */}
          {/* <p>{result}</p> */}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
