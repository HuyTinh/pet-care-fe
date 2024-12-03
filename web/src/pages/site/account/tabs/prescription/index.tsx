import { useSelector } from "react-redux";
import { RootState } from "../../../../../store/store";
import { AnimatePresence, motion } from "framer-motion";
import { FcCalendar } from "react-icons/fc";
import { useEffect, useState } from "react";
import { EditAppointmentModal } from "./edit-appointment-modal";
import { IAppointment } from "../../../../../@types/appoiment.type";
import { useFilterPrescriptionsQuery } from "../../../../admin/doctor/prescription.service";
import { displayCustomDate } from "../../../../../shared/helped/date";

export const PrescriptionTab = () => {
  const userId = useSelector((state: RootState) => state.authentication.userId);
  const [selectedAppointment, setSelectedAppointment] = useState<IAppointment>(
    {} as IAppointment,
  );
  const [appointmentStatus, setAppointmentStatus] = useState<string[]>(["PENDING_PAYMENT", "CANCELLED", "APPROVED"]);
  const [prescriptions, setPrescriptions] = useState<IAppointment[]>([]);
  const [pageNumber, setPageNumber] = useState<number>(0)

  const { data: prescriptionsResponse, isFetching } =
    useFilterPrescriptionsQuery({
      statues: appointmentStatus,
      page: pageNumber,
      accountId: userId as any
    }, {
      skip: !userId,
    });


  useEffect(() => {
    if (prescriptionsResponse?.data) {
      setPrescriptions(prescriptionsResponse.data.content)
    }
  }, [prescriptionsResponse])


  return (
    <AnimatePresence initial={false}>
      <p>Chào</p>
      <div className="w-full space-y-2" key={"1"}>
        <div className="flex justify-between">
          <select
            className="select select-bordered select-sm"
            onChange={(e) => {
              let strVal = [...e.target.value.split(",")]
              setAppointmentStatus(strVal)
            }}
            defaultValue={["PENDING_PAYMENT", "CANCELLED", "APPROVED"]}
          >
            <option value={["PENDING_PAYMENT", "CANCELLED", "APPROVED"]}>All</option>
            <option value={["PENDING_PAYMENT"]}>Pending</option>
            <option value={["CANCELLED"]}>Cancel</option>
            <option value={["APPROVED"]}>Approved</option>
          </select>
          < div className="join" >
            <button className="join-item btn btn-sm" onClick={() => {
              if (pageNumber - 1 >= 0) {
                setPageNumber(pageNumber - 1)
              }
            }
            }>«</button>
            <button className="join-item btn btn-sm"  >Page {pageNumber + 1}</button>
            <button className="join-item btn btn-sm" onClick={() => {
              // if (pageNumber + 1 < filterAppointmentData?.data?.total_pages) {
              //   setPageNumber(pageNumber + 1)
              // }
            }}>»</button>
          </ div>
        </div>
        <div>
          <div className="relative h-[32rem] overflow-auto rounded-lg border border-black">
            {!isFetching &&
              !(prescriptions as any[])?.length && (
                <div className="absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center">
                  <FcCalendar size={64} className="mb-10" />
                  <div>You don't have any appoiment</div>
                </div>
              )}
            {isFetching && (
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
                    src="/src/shared/assets/images/loading.gif"
                    className="object-cover"
                    alt=""
                  />
                </div>
                <div>Watting for few minute...</div>
              </motion.div>
            )}
            <table className="table table-pin-rows table-pin-cols table-md">
              <thead className="text-lg">
                <tr className="">
                  <th></th>
                  <td>Details</td>
                  <td>Date</td>
                  <td>status</td>
                  <th></th>
                </tr>
              </thead>
              {!isFetching && (
                <tbody>
                  {(prescriptions as any[])?.map(
                    (val, index) => (
                      <motion.tr
                        initial={{
                          opacity: 0,
                        }}
                        animate={{ opacity: 1 }}
                        exit={{
                          opacity: 0,
                        }}
                        transition={{ type: "spring", stiffness: 100 }}
                        key={index}
                      >
                        <th>#{val.id}</th>
                        <td className="space-y-5">
                          <div className="collapse bg-base-200">
                            <input type="checkbox" />
                            <div className="collapse-title text-center text-lg font-medium">
                              Pets ({val.appointment.pets?.length})
                            </div>
                            <div className="collapse-content">
                              {(val.appointment.pets as any[])?.map((pe, subIndex) => (
                                <div key={subIndex}>
                                  <div className="font-bold">
                                    - Name: {pe.name}
                                  </div>
                                  <div className="space-y-2">
                                    <div className="flex justify-between">
                                      <div>Species: {pe.species}</div>|
                                      <div>Weight: {pe.weight}</div>|
                                      <div>Age: {pe.age}</div>
                                    </div>
                                    <div>
                                      <span className="font-bold underline bg-red-300 p-1 rounded-md text-white">Diagnosis: {val.details[subIndex].diagnosis}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="underline">
                            {displayCustomDate(new Date(val.created_at))}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`rounded-lg ${val.status === "PENDING_PAYMENT" && "bg-yellow-300"} ${val.status === "APPROVED" && "bg-green-300"} ${val.status === "CANCELLED" && "bg-red-300"} p-2`}
                          >
                            {val.status.replace("_", " ")}
                          </span>
                        </td>
                        <td>
                          <div className="flex flex-col gap-y-2">
                            <button className="btn btn-sm">View</button>
                          </div>
                        </td>
                      </motion.tr>
                    ),
                  )}
                </tbody>
              )}
            </table>
          </div>
        </div>
      </div>
      <EditAppointmentModal selectedAppointment={selectedAppointment} />
    </AnimatePresence>
  );
};
