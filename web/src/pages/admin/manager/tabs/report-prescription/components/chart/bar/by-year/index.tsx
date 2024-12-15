import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from "recharts"
import { useEffect, useState } from "react"
import { useGetPrescriptionsReportByYearQuery } from "../../../../../report.service"

function toReportPrescriptionData(val: any) {
    return {
        name: val.month,
        "Total": val.total_prescriptions,
        "Processing": val.number_of_processing,
        "Approved": val.number_of_approved,
        "Cancelled": val.number_of_cancelled
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

const BarChartReportPrescriptionByYear = () => {
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

    const [prescriptionReportByYearData, setPrescriptionReportByYearData] = useState()
    const { data: prescriptionsReportByYearResponse } = useGetPrescriptionsReportByYearQuery({ year: selectedYear })

    useEffect(() => {
        if (prescriptionsReportByYearResponse?.data) {

            setPrescriptionReportByYearData(prescriptionsReportByYearResponse?.data.map((val: any) => toReportPrescriptionData(val)))
        }
    }, [prescriptionsReportByYearResponse])

    return (
        <div className="flex-1 bg-white pb-16 pt-5 rounded-lg space-y-2">
            <div className="flex gap-x-2 justify-center">
                <span className=" flex justify-center font-bold text-lg">Prescription Report - Year</span>
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
                    data={prescriptionReportByYearData}
                    margin={{
                        right: 30,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Bar dataKey="Processing" stackId="prescription" fill="#e6e600" />
                    <Bar dataKey="Approved" stackId="prescription" fill="#82ca9d" />
                    <Bar dataKey="Cancelled" stackId="prescription" fill="#fc2b2b    " />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default BarChartReportPrescriptionByYear