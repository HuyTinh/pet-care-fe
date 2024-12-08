
import { FaFilter } from "react-icons/fa";
import {
    Tooltip,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
} from 'recharts';
import { FilterModal } from "./modal";
import { appointmentDatePie } from "./dummy_appointment_data";
import _ from "lodash"
import LineChartReportApointment from "./chart/line";
import BarChartReportApointment from "./chart/bar";


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

const ReportAppointment = () => {
    return (
        <div className="h-[100%] w-full mt-28 bg-slate-100 px-14 py-10 ">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <span className="text-2xl text-[#0099CF] font-bold">Appointment Report</span>
                </div>
                <div>
                    <button
                        className="btn btn-info flex items-center gap-2 rounded-md"
                        onClick={() =>
                            (
                                document.getElementById("filter_modal") as any
                            ).showModal()
                        }
                    >
                        <FaFilter color="white" />
                        <span className="font-semibold text-white">Filter</span>
                    </button>
                </div>
            </div>
            <LineChartReportApointment />
            <div className="mt-7 w-full px-5 h-96">
                <div className="flex flex-row w-full space-x-5 h-full">
                    <BarChartReportApointment />
                    <div className="bg-white rounded-lg px-10">
                        <span className=" flex justify-center font-bold text-base mt-5">Appointment of Month 10 - Year 2023</span>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart >
                                <Pie
                                    data={appointmentDatePie}
                                    cx="50%"
                                    cy="40%"
                                    labelLine={false}
                                    label={renderCustomizedLabel}
                                    outerRadius={125}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {appointmentDatePie.map((_, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <FilterModal />
        </div>
    )
}

export default ReportAppointment 