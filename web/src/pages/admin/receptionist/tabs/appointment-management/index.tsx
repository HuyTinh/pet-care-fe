import { useState, useEffect } from "react";
import { useFilterAppointmentsQuery } from "../../appointment.service";
import { IAppointment } from "../../../../../types/appoiment.type";
import {
  displayCustomDate
} from "../../../../../utils/date";
import { usePdfGenerator } from "../../../../../hooks/pdf-generator";
import { FcCalendar } from "react-icons/fc";
import { motion } from "framer-motion";
import { EditAppointmentModal } from "./edit-appointment-modal";
import WebSocketManager from "../../../../../config/web-socket-manager";
import { QRScanModal } from "./qr-scan";
import { IoQrCodeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineCancel } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import { FaFilter } from "react-icons/fa";
import { FilterAppointmentModal } from "./filter-appointment-modal";

export const AppointmentManagement = () => {
  const [appointments, setAppointments] = useState<IAppointment[]>([]);
  const [filterAppointmentConditions, setFilterAppointmentConditions] = useState<any>({});

  const onFilterAppointmentSubmit = (data: any) => {
    setFilterAppointmentConditions(data); // Cập nhật điều kiện lọc
  };

  const {
    data: filterAppointmentData,
    isFetching: isFetchingFilterAppointmentData,
  } = useFilterAppointmentsQuery({
    startDate: filterAppointmentConditions['start_date'],
    endDate: filterAppointmentConditions['end_date'],
  });

  const [selectedAppointment, setSelectedAppointment] = useState<IAppointment>(
    {} as IAppointment,
  );
  const [qrModalVisible, setQrModalVisible] = useState<boolean>(false);
  const [sessionId, setSessionId] = useState(new Date().getTime());
  const stompClient = WebSocketManager.getInstance().getClient();
  const [pageNumber, setPageNumber] = useState<number>(0)
  const { generatePDF } = usePdfGenerator();


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
                  "edit_appointment_modal",
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
        <div className="relative h-[36rem] overflow-auto rounded-xl border">
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
          <table className="table ">
            {/* head */}
            <thead className="sticky top-0 bg-white">
              <tr>
                <th></th>
                <th>Customer</th>
                <th>Pets</th>
                <th>Appointment Date</th>
                <th>Status</th>
                <th>Action</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {!isFetchingFilterAppointmentData &&
                (appointments as IAppointment[])?.map((ap, index) => (
                  <motion.tr
                    key={index}
                    className={`${["CHECKED_IN", "CANCELLED"].includes(ap.status) && "rounded-lg bg-zinc-300 p-1"}`}
                  >
                    <th>#{ap.id}</th>
                    <td>
                      <div>
                        <span>Name: </span>
                        <span className="font-bold underline">
                          {ap.first_name + " " + ap.last_name}
                        </span>
                      </div>
                      <div>
                        <span>Email: </span>
                        <span className="font-bold underline">{ap.email}</span>
                      </div>
                      <div>
                        <span>Phone: </span>
                        <span className="font-bold underline">{ap.phone_number}</span>
                      </div>

                    </td>
                    <td>
                      {
                        ap.pets?.map((val, index) =>
                          <div className="flex gap-x-2" key={index}>
                            <span>#{index + 1}</span>
                            <div >
                              <span>Name: </span>
                              <span className="font-bold underline">
                                {val.name}
                              </span>
                            </div>
                            |
                            <div>
                              <span>Species: </span>
                              <span className="font-bold underline">
                                {val.species}
                              </span>
                            </div>
                          </div>)
                      }

                    </td>
                    <td>
                      <div className="truncate">
                        <span className="underline font-bold">
                          {displayCustomDate(new Date(ap.appointment_date))}, <span>
                            {ap.appointment_time.substring(0, 5)}h
                          </span>
                        </span>
                      </div>
                    </td>
                    <td>
                      <span
                        className={`rounded-lg p-1 ${ap.status === "SCHEDULED" ? "bg-yellow-300" : ap.status === "CANCELLED" ? "bg-red-300" : "bg-green-300"}`}
                      >
                        {ap.status}
                      </span>
                    </td>
                    <td className="space-x-2">
                      {ap.status === "SCHEDULED" && (
                        <button
                          className="btn btn-outline btn-neutral"
                          onClick={() => sendMessage(ap.id, "CHECKED_IN")}
                        >
                          <CiCalendar size={24} />
                        </button>
                      )}
                      {ap.status === "CHECKED_IN" && (
                        <button
                          className="btn btn-outline btn-neutral btn-error"
                          onClick={() => sendMessage(ap.id, "CANCELLED")}
                        >
                          <MdOutlineCancel size={24} />
                        </button>
                      )}

                    </td>
                    <td>
                      <button
                        className="btn btn-outline btn-neutral" onClick={() => {
                          (
                            document.getElementById(
                              "edit_appointment_modal",
                            ) as any
                          ).showModal();
                          setSelectedAppointment(ap as any);
                        }}
                      >
                        <LiaEditSolid size={24} />
                      </button>
                    </td>
                  </motion.tr>
                ))}
            </tbody>
          </table>
        </div>
        <EditAppointmentModal appointment={selectedAppointment} />
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
