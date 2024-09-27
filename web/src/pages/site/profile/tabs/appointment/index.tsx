import { useSelector } from "react-redux";
import { useGetAppointmentByCustomerIdQuery } from "../../../../admin/receptionist/appointment.service";
import { RootState } from "../../../../../store/store";
import { displayCustomDate } from "../../../../../utils/Date";
import { AnimatePresence, motion } from "framer-motion";
import { FcCalendar } from "react-icons/fc";
import { useState } from "react";

export const AppointmentTab = () => {
  const userId = useSelector((state: RootState) => state.authentication.userId);
  const [appointmentStatus, setAppointmentStatus] = useState("SCHEDULED");

  const { data: appoimentsHistoryResponse, isFetching } =
    useGetAppointmentByCustomerIdQuery(
      {
        userId,
        params: {
          status: appointmentStatus,
        },
      },
      { skip: !userId },
    );

  return (
    <AnimatePresence initial={false}>
      <div className="w-full space-y-2">
        <select
          className="select select-bordered select-md"
          onChange={(e) => setAppointmentStatus(e.target.value)}
        >
          <option selected value={"SCHEDULED"}>
            Up comming
          </option>
          <option value={"APPROVED"}>Old appointment</option>
        </select>
        <div>
          <div className="relative h-[32rem] overflow-auto rounded-lg border border-black">
            {!isFetching &&
              !(appoimentsHistoryResponse?.result as any[])?.length && (
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
                    src="/src/assets/images/loading.gif"
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
                  {(appoimentsHistoryResponse?.result as any[])?.map(
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
                              Pets ({val.pets?.length})
                            </div>
                            <div className="collapse-content">
                              {(val.pets as any[])?.map((pe, subIndex) => (
                                <div key={subIndex}>
                                  <div className="font-bold">
                                    - Name: {pe.name}
                                  </div>
                                  <div className="flex justify-between">
                                    <div>Species: {pe.species}</div>|
                                    <div>Weight: {pe.weight}</div>|
                                    <div>Age: {pe.age}</div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div className="collapse bg-base-200">
                            <input type="checkbox" />
                            <div className="collapse-title text-center text-lg font-medium">
                              Services ({val.services?.length})
                            </div>
                            <div className="collapse-content">
                              {(val.services as any[])?.map((se, subIndex) => (
                                <div key={subIndex}>- {se.name}</div>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="underline">
                            {displayCustomDate(new Date(val.appointment_date))}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`rounded-lg ${val.status === "SCHEDULED" && "bg-yellow-300"} ${val.status === "APPROVED" && "bg-green-300"} p-2`}
                          >
                            {val.status}
                          </span>
                        </td>
                        <td>
                          {val.status !== "APPROVED" ? (
                            <div className="flex flex-col gap-y-2">
                              <button className="btn btn-sm">Edit</button>
                              <button className="btn btn-sm">Cancel</button>
                            </div>
                          ) : (
                            <div className="flex flex-col gap-y-2">
                              <button className="btn btn-sm">Detail</button>
                            </div>
                          )}
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
    </AnimatePresence>
  );
};
