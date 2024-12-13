import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts"
import { useEffect, useState } from "react"
import { useGetAppointmentsReportByDateToDateQuery } from "../../../../../../report/report.service"
import { displayInputDate } from "../../../../../../../../../shared/helped/date";
import { SubmitHandler, useForm } from "react-hook-form";

function toReportAppointmentData(val: any) {
    return {
        name: val.date,
        "Total": val.total_appointment,
        "Scheduled": val.number_of_scheduled,
        "Approved": val.number_of_approved,
        "Cancelled": val.number_of_cancelled,
        "No Show": val.number_of_no_show
    }
}

const CustomTooltip = ({ active, payload, label }: TooltipProps<any, any>) => {
    if (active && payload && payload.length) {

        return (
            <div
                className="custom-tooltip"
                style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '5px',
                }}
            >
                <p className="label">{`Date: ${label}`}</p>
                {payload.map((entry, index) => (
                    <>
                        <p
                            key={`item-${index}`}
                            style={{
                                color: entry.color, // Sử dụng màu của cột/dòng
                                margin: 0,
                            }}
                        >
                            {`${entry.name}: ${entry.value}`}
                        </p>
                    </>
                ))}
                <p>{"Total: " + payload[0].payload.Total}</p>
            </div>
        );
    }

    return null;
};

function getStartOfMonth() {
    const now = new Date(); // Get the current date
    return new Date(now.getFullYear(), now.getMonth(), 1); // Create a new Date object for the 1st day of the current month
}

const BarChartReportApointmentByDateToDate = () => {
    const {
        register,
        handleSubmit,
        // reset
    } = useForm<any>({});
    const [filterData, setFilterData] = useState({
        startDate: displayInputDate(getStartOfMonth()),
        endDate: displayInputDate(new Date())
    })
    const onSubmit: SubmitHandler<any> = ((data) => {
        setFilterData(data);
    })
    const [appointmentReportByDateToDateData, setAppointmentReportByDateToDateData] = useState()
    const { data: appointmentsReportByDateToDateResponse } = useGetAppointmentsReportByDateToDateQuery(filterData)

    useEffect(() => {
        if (appointmentsReportByDateToDateResponse?.data) {
            setAppointmentReportByDateToDateData(appointmentsReportByDateToDateResponse?.data.map((val: any) => toReportAppointmentData(val)))
        }
    }, [appointmentsReportByDateToDateResponse])

    return (
        <div className="flex-1 bg-white pb-16 pt-5 rounded-lg space-y-2">
            <div className="flex gap-x-2 justify-center">
                <span className=" flex justify-center font-bold text-lg">Appointment Report - from</span>
                <form onSubmit={handleSubmit(onSubmit)} className="flex gap-x-2">
                    <label className="form-control">
                        <input type="date" placeholder="Type here" defaultValue={filterData.startDate} className="input input-bordered input-sm" {...register("startDate")} />
                    </label>
                    <span className=" flex justify-center font-bold text-lg">to</span>
                    <label className="form-control">
                        <input type="date" placeholder="Type here" defaultValue={filterData.endDate} max={displayInputDate(new Date)} className="input input-bordered input-sm" {...register("endDate")} />
                    </label>
                    <div>
                        <button className="btn btn-info text-white btn-sm">
                            Filter
                        </button>
                    </div>
                </form>

            </div>
            <ResponsiveContainer width="100%" height="100%" >
                <BarChart
                    width={500}
                    height={300}
                    data={appointmentReportByDateToDateData}
                    margin={{ bottom: 50 }}
                >
                    {/* <Legend /> */}
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" angle={-25} textAnchor="end" fontSize={14} />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend layout="horizontal" verticalAlign="top" align="center" />
                    <Bar dataKey="Scheduled" stackId="appointment" fill="#e6e600" />
                    <Bar dataKey="Approved" stackId="appointment" fill="#82ca9d" />
                    <Bar dataKey="Cancelled" stackId="appointment" fill="#fc2b2b    " />
                    <Bar dataKey="No Show" stackId="appointment" fill="#878787" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartReportApointmentByDateToDate