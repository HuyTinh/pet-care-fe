import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts"
import { useEffect, useState } from "react";
import { useGetPrescriptionsReportByYearQuery } from "../../../../report.service";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#FF0404", "#F662DD", "#0099CF"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

function toReportPrescriptionData(val: any) {

    return {
        name: getMonthName(val.month.split("-")[0]),
        "value": val.total_prescriptions,
    }
}

function getMonthName(monthNumber: number) {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', {
        month: 'long',
    });
}

const PieChartReportPrescription = () => {
    const [selectedYear, setSelectedYear] = useState<number>(new Date().getFullYear())

    const [prescriptionReportByYearData, setPrescriptionReportByYearData] = useState()
    const { data: prescriptionsReportByYearResponse } = useGetPrescriptionsReportByYearQuery({ year: selectedYear })

    useEffect(() => {
        if (prescriptionsReportByYearResponse?.data) {
            setPrescriptionReportByYearData(prescriptionsReportByYearResponse?.data.map((val: any) => toReportPrescriptionData(val)))
        }
    }, [prescriptionsReportByYearResponse])


    return (
        <div className="bg-white rounded-lg px-10">
            <div className="flex justify-center items-center mt-5 gap-x-2">
                <span className=" flex justify-center font-bold text-base">Monthly Total Prescription </span>
                <select className="select select-bordered select-sm"
                    onChange={(e: any) => setSelectedYear(e.target.value)}
                >
                    {
                        [...Array(4)].map((_, index) =>
                            <option value={new Date().getFullYear() - index}>{new Date().getFullYear() - index}</option>)
                    }
                </select>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={prescriptionReportByYearData}
                        cx="50%"
                        cy="40%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={125}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {(prescriptionReportByYearData as any)?.map((_: any, index: any) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PieChartReportPrescription