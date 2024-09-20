import { useState, useEffect } from "react";
import WebSocketManager from "../../../utils/WebSocketManager";
import { SideMenu } from "./side-menu";
import {
  useGetAppointmentsQuery,
  useGetHospitalServiceQuery,
} from "./appointment.service";
import { IAppointment } from "../../../types/appoiment.type";
import { motion } from "framer-motion";
import { displayInputDate } from "../../../utils/Date";
import { usePdfGenerator } from "../../../hooks/PdfGenerator";
import { PCModal } from "../../../components/pc-modal";
import { AppoimentManageForm } from "./tabs/appointment-management/form";

export const ReceptionistPage = () => {
  const [appointment, setAppointment] = useState<IAppointment[]>([]);
  const [sessionId, setSessionId] = useState(new Date().getTime());
  const stompClient = WebSocketManager.getInstance().getClient();
  const { data: appointmentsData, isFetching: isFetchAppointmentsData } =
    useGetAppointmentsQuery();

  const { generatePDF } = usePdfGenerator();
  useEffect(() => {
    setAppointment(appointmentsData?.result);
    return () => {};
  }, [appointmentsData?.result]);

  useEffect(() => {
    if (stompClient) {
      stompClient.onConnect = () => {
        console.log("Connected to WebSocket");

        // Gửi yêu cầu kết nối
        stompClient.publish({ destination: "/app/connect" });

        // Đăng ký nhận tin nhắn từ server
        // stompClient.subscribe("/topic/messages", (message) => {
        //   setMessages(JSON.parse(message.body));
        // });

        stompClient.subscribe("/topic/updateAppointment", (message) => {
          setAppointment((prev) => {
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
          setAppointment((prev) => [...prev, JSON.parse(message.body)]);
        });

        stompClient.subscribe("/topic/exportPDF/" + sessionId, (message) => {
          if (Number(message.body)) {
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
    <div className="h-full bg-blue-400">
      <div className="flex h-full">
        <SideMenu />
        <div className="relative z-20 w-full pb-2 pe-4 pt-4">
          <div className="flex h-full flex-1 flex-col rounded-lg border-2 border-black bg-white">
            <div className="h-1/6">
              <button
                className="btn"
                onClick={() =>
                  (document.getElementById("my_modal_2") as any).showModal()
                }
              >
                open modal
              </button>
              <PCModal>
                <AppoimentManageForm />
              </PCModal>
            </div>
            <div className="flex-1 p-2">
              <div className="h-[36rem] overflow-auto rounded-xl border">
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
                      (appointment as IAppointment[])?.map((ap, index) => (
                        <motion.tr
                          key={index}
                          className={`${ap.status === "CHECKED_IN" && "rounded-lg bg-zinc-400 p-1"}`}
                        >
                          <th>#{ap.id}</th>
                          <td>
                            <div>
                              <span>Customer: </span>
                              {ap.customer.first_name +
                                " " +
                                ap.customer.last_name}
                            </div>
                            <div className="truncate">
                              <span>Date: </span>
                              {displayInputDate(new Date(ap.appointment_date))}
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
                            <button className="btn btn-info btn-sm">
                              Edit
                            </button>
                          </td>
                        </motion.tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
