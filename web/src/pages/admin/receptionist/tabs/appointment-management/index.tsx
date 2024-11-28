import { useState, useEffect } from "react";
import { useFilterAppointmentsQuery } from "../../appointment.service";
import { IAppointment } from "../../../../../@types/appoiment.type";
import { usePdfGenerator } from "../../../../../shared/hooks/pdf-generator";

import WebSocketManager from "../../../../../config/web-socket-manager";
import { IoQrCodeOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { FcCalendar } from "react-icons/fc";
import { motion } from 'framer-motion'
import { CreateAppointmentModal, EditAppointmentModal, FilterAppointmentModal, QRScanModal, ViewAppointmentModal } from "./modal";
import { ManageAppointmentTable, UpcomingAppointmentTable } from "./tabs";

export const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [filterAppointmentConditions, setFilterAppointmentConditions] = useState<any>({});

  const [qrModalVisible, setQrModalVisible] = useState<boolean>(false);
  const [sessionId, _setSessionId] = useState(new Date().getTime());
  const stompClient = WebSocketManager.getInstance().getClient();
  const [pageNumber, setPageNumber] = useState<number>(0)
  const { generatePDF } = usePdfGenerator();

  const onFilterAppointmentSubmit = (data: any) => {
    setFilterAppointmentConditions(data); // Cập nhật điều kiện lọc
  };

  const {
    data: filterAppointmentData,
    isFetching: isFetchingFilterAppointmentData,
  } = useFilterAppointmentsQuery({
    startDate: filterAppointmentConditions['start_date'],
    endDate: filterAppointmentConditions['end_date'],
    page: pageNumber
  });

  const [selectedAppointment, setSelectedAppointment] = useState<IAppointment>(
    {} as IAppointment,
  );

  useEffect(() => {
    if (stompClient) {
      stompClient.onConnect = () => {
        console.log("Connected to WebSocket");
        // Gửi yêu cầu kết nối
        stompClient.publish({ destination: "/app/connect" });
        stompClient.subscribe("/topic/updateAppointment", (message) => {
          const receiveData = JSON.parse(message.body);

          setAppointments((prev) => {
            const arr = [...prev];

            return arr.map((ap) => {
              if (ap.id == receiveData.appointmentId) {
                return {
                  ...ap,
                  status: receiveData.status,
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

            generatePDF(Number(message.body));

            setAppointments((prev) => prev.map(val => {
              if (val.id == message.body) {
                return {
                  ...val,
                  status: "CHECKED_IN"
                }
              }
              return val;
            }));

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

  useEffect(() => {
    setAppointments(filterAppointmentData?.data.content);
  }, [filterAppointmentData?.data]);

  const sendMessage = (appointmentId: string, status: string) => {
    if (stompClient) {
      stompClient.publish({
        destination: "/app/sendMessage",
        body: JSON.stringify({
          sessionId,
          appointmentId,
          status,
        }),
      });
    }
  };
  return (
    <>
      <div className="flex gap-x-2 p-2">
        <div className="flex-1">
          <label className="input input-sm input-bordered flex items-center gap-2">
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
          <div className="flex space-x-2">
            <button
              className="btn btn-sm btn-info flex items-center gap-2 rounded-md"
              onClick={() =>
                (
                  document.getElementById("filter_appointment_modal") as any
                ).showModal()
              }
            >
              <FaFilter color="white" />
              <span className="font-semibold text-white">Filter</span>
            </button>
          </div>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => {
              (
                document.getElementById(
                  "create_appointment_modal",
                ) as any
              ).showModal();
              setSelectedAppointment({
                account_id: "",
                appointment_date: "",
                appointment_time: "",
                email: "",
                first_name: "",
                id: "",
                last_name: "",
                pets: [],
                phone_number: "",
                status: "CHECKED_IN",
                services: []
              })
            }}
          >
            <FaPlus />
          </button>
          <button
            className="btn btn-outline btn-sm"
            onClick={() => {
              setQrModalVisible(true);
              (
                document.getElementById("qr_scan_appointment_modal") as any
              ).showModal();
            }}
          >
            <IoQrCodeOutline />
          </button>
          < div className="join" >
            <button className="join-item btn btn-sm" onClick={() => {
              if (pageNumber - 1 >= 0) {
                setPageNumber(pageNumber - 1)
              }
            }
            }>«</button>
            <button className="join-item btn btn-sm">Page {pageNumber + 1}</button>
            <button className="join-item btn btn-sm" onClick={() => {
              if (pageNumber + 1 < filterAppointmentData?.data?.total_pages) {
                setPageNumber(pageNumber + 1)
              }
            }}>»</button>
          </ div>
        </div>
      </div >
      <div className="flex-1 p-2">
        <div className="relative h-[38rem] overflow-auto rounded-xl border">

          {!isFetchingFilterAppointmentData &&
            !(appointments as any[])?.length && (
              <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center">
                <FcCalendar size={64} className="mb-10" />
                <div>You don't have any appointment</div>
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
          {!isFetchingFilterAppointmentData && <ManageAppointmentTable appointments={appointments} sendMessage={sendMessage} setSelectedAppointment={setSelectedAppointment} />}

          <div className="hidden">
            <UpcomingAppointmentTable setSelectedAppointment={setSelectedAppointment} />
          </div>
        </div>
        <ViewAppointmentModal appointment={selectedAppointment} />
        <EditAppointmentModal appointment={selectedAppointment} />
        <CreateAppointmentModal />
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
