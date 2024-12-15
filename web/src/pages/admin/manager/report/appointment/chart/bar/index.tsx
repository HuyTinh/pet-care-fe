import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { useGetAppointmentsReportByYearQuery } from "../../../../tabs/report.service"
import { useEffect, useState } from "react"

function toReportAppointmentData(val: any) {
    return {
        name: val.month,
        "Total": val.total_appointment,
        "Scheduled": val.number_of_scheduled,
        "Approved": val.number_of_approved,
        "Cancelled": val.number_of_cancelled,
        "No Show": val.number_of_no_show
    }
}

const BarChartReportApointment = () => {
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

    const [appointmentReportByYearData, setAppointmentReportByYearData] = useState()
    const { data: appointmentsReportByYearResponse } = useGetAppointmentsReportByYearQuery({ year: selectedYear })

    useEffect(() => {
        if (appointmentsReportByYearResponse?.data) {

            setAppointmentReportByYearData(appointmentsReportByYearResponse?.data.map((val: any) => toReportAppointmentData(val)))
        }
    }, [appointmentsReportByYearResponse])

    return (
        <div className="flex-1 bg-white pb-16 pt-5 rounded-lg space-y-2">
            <div className="flex gap-x-2 justify-center">
                <span className=" flex justify-center font-bold text-lg">Appointment Report - Year</span>
                <select className="select select-bordered select-sm"
                    onChange={(e: any) => setSelectedYear(e.target.value)}>
                    <option selected value={new Date().getFullYear()}>{new Date().getFullYear()}</option>
                    {
                        [...Array(4)].map((_, index) =>
                            <option value={new Date().getFullYear() - index - 1}>{new Date().getFullYear() - index - 1}</option>)
                    }
                </select>
            </div>
            <ResponsiveContainer width="100%" height="100%" >
                <BarChart
                    width={500}
                    height={300}
                    data={appointmentReportByYearData}
                    margin={{
                        right: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Scheduled" stackId="appointment" fill="#e6e600" />
                    <Bar dataKey="Approved" stackId="appointment" fill="#82ca9d" />
                    <Bar dataKey="Cancelled" stackId="appointment" fill="#fc2b2b    " />
                    <Bar dataKey="No Show" stackId="appointment" fill="#878787" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartReportApointment