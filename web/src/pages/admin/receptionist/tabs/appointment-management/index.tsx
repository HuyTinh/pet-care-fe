import { useState, useEffect } from "react";
import {
  // useGenerateApointmentPDFMutation,
  useGetAppointmentsQuery,
} from "../../appointment.service";
import { IAppointment } from "../../../../../types/appoiment.type";
import { displayCustomDate } from "../../../../../utils/date";
import { usePdfGenerator } from "../../../../../hooks/pdf-generator";
import { FcCalendar } from "react-icons/fc";
import { motion } from "framer-motion";
import { EditAppointmentModal } from "./edit-appointment-modal";
import WebSocketManager from "../../../../../config/web-socket-manager";
import { QRScanModal } from "./qr-scan";

export const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [selectedAppointment, setSelectedAppointment] = useState<IAppointment>(
    {} as IAppointment,
  );
  const [qrModalVisible, setQrModalVisible] = useState<boolean>(false);
  const [sessionId, _] = useState(new Date().getTime());
  const stompClient = WebSocketManager.getInstance().getClient();
  const { data: appointmentsData, isFetching: isFetchAppointmentsData } =
    useGetAppointmentsQuery();
  const { generatePDF } = usePdfGenerator();
  useEffect(() => {
    setAppointments(appointmentsData?.data);
    return () => {};
  }, [appointmentsData?.data]);

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
      <div className="h-1/6">
        <button
          className="btn btn-outline"
          onClick={() => {
            setQrModalVisible(true);
            (
              document.getElementById("qr_scan_appointment_modal") as any
            ).showModal();
          }}
        >
          QR Scanner
        </button>

        {/* <button
                className="btn"
                onClick={() =>
                  (document.getElementById("my_modal_2") as any).showModal()
                }
              >
                open modal
              </button> */}
        {/* <PetCareModal size={"3xl"}>
                <AppoimentManageForm />
              </PetCareModal> */}
      </div>
      <div className="flex-1 p-2">
        <div className="relative h-[36rem] overflow-auto rounded-xl border">
          {!isFetchAppointmentsData && !(appointments as any[])?.length && (
            <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center">
              <FcCalendar size={64} className="mb-10" />
              <div>You don't have any appoiment</div>
            </div>
          )}
          {isFetchAppointmentsData && (
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
              {!isFetchAppointmentsData &&
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
                          {ap.customer.first_name + " " + ap.customer.last_name}
                        </span>
                      </div>
                      <div>
                        <span>Email: </span>
                        <span className="font-bold">{ap.customer.email}</span>
                      </div>
                      <div className="truncate">
                        <span>Date: </span>
                        <span className="underline">
                          {displayCustomDate(new Date(ap.appointment_date))}
                        </span>
                      </div>
                      <div className="truncate">
                        <span>Time: </span>
                        <span className="underline">{ap.appointment_time}</span>
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
