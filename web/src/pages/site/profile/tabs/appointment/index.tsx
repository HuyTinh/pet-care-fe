import { useSelector } from "react-redux";
import { useGetAppointmentByCustomerIdQuery } from "../../../../admin/receptionist/appointment.service";
import { RootState } from "../../../../../store/store";
import { displayCustomDate } from "../../../../../utils/Date";

export const AppointmentTab = () => {
  const userId = useSelector((state: RootState) => state.authentication.userId);
  const { data: appoimentsHistoryResponse } =
    useGetAppointmentByCustomerIdQuery(
      {
        userId,
      },
      { skip: !userId },
    );

  return (
    <div className="w-full">
      <div>
        <div className="h-[32rem] overflow-auto rounded-lg border border-black">
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
            <tbody>
              {(appoimentsHistoryResponse?.result as any[])?.map(
                (val, index) => (
                  <tr key={index}>
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
                              <div className="font-bold">- Name: {pe.name}</div>
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
                      <div className="flex flex-col gap-y-2">
                        <button className="btn btn-sm">Edit</button>
                        <button className="btn btn-sm">Cancel</button>
                      </div>
                    </td>
                  </tr>
                ),
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
