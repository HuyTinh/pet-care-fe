import { useState, useEffect } from "react";
import { useFilterAppointmentsQuery } from "../../appointment.service";
import { IAppointment } from "../../../../../types/appoiment.type";
import Select from "react-select";
import {
  displayCustomDate,
  displayInputDate,
  getDaysArray,
} from "../../../../../utils/date";
import { usePdfGenerator } from "../../../../../hooks/pdf-generator";
import { FcCalendar } from "react-icons/fc";
import { motion } from "framer-motion";
import { EditAppointmentModal } from "./edit-appointment-modal";
import WebSocketManager from "../../../../../config/web-socket-manager";
import { QRScanModal } from "./qr-scan";
import { IoQrCodeOutline } from "react-icons/io5";

export const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [startDate, setStartDate] = useState<any>({
    value: `${new Date().getFullYear()}-01-01`,
    label: `${new Date().getFullYear()}-01-01`,
  });
  const [endDate, setEndDate] = useState<any>({
    value: `${new Date().getFullYear()}-01-01`,
    label: `${new Date().getFullYear()}-01-01`,
  });

  const {
    data: filterAppointmentData,
    isFetching: isFetchingFilterAppointmentData,
  } = useFilterAppointmentsQuery({
    startDate: startDate?.value,
    endDate: endDate?.value,
  });

  const [selectedAppointment, setSelectedAppointment] = useState<IAppointment>(
    {} as IAppointment,
  );
  const [qrModalVisible, setQrModalVisible] = useState<boolean>(false);
  const [sessionId, _] = useState(new Date().getTime());
  const stompClient = WebSocketManager.getInstance().getClient();
  const { generatePDF } = usePdfGenerator();
  useEffect(() => {
    setAppointments(filterAppointmentData?.data);
    return () => {};
  }, [filterAppointmentData?.data]);

  useEffect(() => {
    if (stompClient) {
      stompClient.onConnect = () => {
        console.log("Connected to WebSocket");
        // Gửi yêu cầu kết nối
        stompClient.publish({ destination: "/app/connect" });
        stompClient.subscribe("/topic/updateAppointment", (message) => {
          setAppointments((prev) => {
            let arr = [...prev];

            return arr.map((ap) => {
              if (ap.id == message.body) {
                return {
                  ...ap,
                  status: "CHECKED_IN",
                };
              }
              return ap;
            }) as IAppointment[];
          });
        });

        stompClient.subscribe("/topic/createAppointment", (message) => {
          setAppointments((prev) => [...prev, JSON.parse(message.body)]);
        });

        stompClient.subscribe("/topic/exportPDF/" + sessionId, (message) => {
          if (Number(message.body)) {
            // genPDF({
            //   appointment_number: 124,
            //   appointment_id: message.body,
            // }).then((res: any) => {
            //   // Create a new link
            //   const anchor = document.createElement("a");

            //   anchor.href = res.data.response;
            //   anchor.download = "baba";
            //   anchor.target = "_blank";
            //   anchor.rel = "noreferrer";

            //   // Append to the DOM
            //   document.body.appendChild(anchor);

            //   // Trigger `click` event
            //   anchor.click();

            //   // Remove element from DOM
            //   document.body.removeChild(anchor);
            // });
            generatePDF(Number(message.body));
          }
        });
      };

      stompClient.onDisconnect = () => {
        console.log("Disconnected from WebSocket");
      };
    }

    return () => {
      // Không gọi deactivate() ở đây
      // stompClient?.deactivate;
    };
  }, [stompClient]);

  const sendMessage = (appointmentId: string) => {
    if (stompClient) {
      stompClient.publish({
        destination: "/app/sendMessage",
        body: JSON.stringify({
          sessionId: sessionId,
          appointmentId: appointmentId,
        }),
      });
    }
  };
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
              <tr className="text-lg">
                <th></th>
                <th>Details</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {!isFetchingFilterAppointmentData &&
                (appointments as IAppointment[])?.map((ap, index) => (
                  <motion.tr
                    key={index}
                    className={`${ap.status === "CHECKED_IN" && "rounded-lg bg-zinc-400 p-1"}`}
                  >
                    <th>#{ap.id}</th>
                    <td>
                      <div>
                        <span>Customer: </span>
                        <span className="font-bold">
                          {ap.first_name + " " + ap.last_name}
                        </span>
                      </div>
                      <div>
                        <span>Email: </span>
                        <span className="font-bold">{ap.email}</span>
                      </div>
                      <div className="truncate">
                        <span>Date: </span>
                        <span className="underline">
                          {displayCustomDate(new Date(ap.appointment_date))}
                        </span>
                      </div>
                      <div className="truncate">
                        <span>Time: </span>
                        <span className="underline">
                          {ap.appointment_time.substring(0, 5)}
                        </span>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`${ap.status === "SCHEDULED" && "rounded-lg bg-yellow-300 p-1"}`}
                      >
                        {ap.status}
                      </span>
                    </td>
                    <td className="space-x-2">
                      {ap.status === "SCHEDULED" && (
                        <button
                          className="btn btn-success btn-sm"
                          onClick={() => sendMessage(ap.id)}
                        >
                          Check in
                        </button>
                      )}
                      {ap.status === "CHECKED_IN" && (
                        <button
                          className="btn btn-error btn-sm"
                          onClick={() => sendMessage(ap.id)}
                        >
                          Cancel
                        </button>
                      )}
                      <button
                        className="btn btn-info btn-sm"
                        onClick={() => {
                          (
                            document.getElementById(
                              "edit_appointment_modal",
                            ) as any
                          ).showModal();
                          setSelectedAppointment(ap as any);
                        }}
                      >
                        Edit
                      </button>
                    </td>
                  </motion.tr>
                ))}
            </tbody>
          </table>
        </div>
        <EditAppointmentModal appointment={selectedAppointment} />
        <QRScanModal
          qrModalVisible={qrModalVisible}
          setQrModalVisible={setQrModalVisible}
          setSelectedAppointment={setSelectedAppointment}
        />
      </div>
    </>
  );
};
