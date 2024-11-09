
import { FaFilter } from "react-icons/fa";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Rectangle,
    AreaChart,
    Area,
} from 'recharts';
import { FilterModal } from "./modal";
import { serviceDataCeil, serviceTotal, serviceYear } from "./dummy_service_data";
import { appointmentDatePie } from "../appointment/dummy_appointment_data";
const Report_service = () => {
    
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#FF0404", "#F662DD", "#0099CF"];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
   


    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            return (
                <div className="p-4 bg-slate-900 flex flex-col gap-4 rounded-md">
                    <p className="text-medium text-lg text-white">{label}</p>
                    <p className="text-sm text-blue-400">
                        Service:
                        <span className="ml-2">{payload[0].value}</span>
                    </p>
                </div>
            );
        }
    };

    return (
        <div className="h-[100%] w-full mt-28 bg-slate-100 px-14 py-10 ">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <span className="text-2xl text-[#0099CF] font-bold">Service Report</span>
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
            <div className="mt-7 w-full px-5 h-96">
                <div className="flex flex-row w-full space-x-5 h-full">
                    <div className="w-1/2 bg-white px-7 py-7 rounded-lg">
                        <span className=" flex justify-center font-bold text-lg">Top 10 Services of Oct - 2023</span>
                        <ResponsiveContainer width="100%" height="100%" >
                            <BarChart
                                width={500}
                                height={300}
                                data={serviceDataCeil}
                                margin={{
                                    right: 30,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                                <Tooltip content={<CustomTooltip />} />
                                <Bar yAxisId="left" dataKey="service1" fill="#8884d8" />
                                <Bar yAxisId="right" dataKey="service2" fill="#82ca9d" />
                                <Bar yAxisId="right" dataKey="service3" fill="#FF0404" />
                                <Bar yAxisId="right" dataKey="service4" fill="#0099CF" />

                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="w-1/2 bg-white rounded-lg">
                        <span className=" flex justify-center font-bold text-base mt-8">Top 10 Revenue service  of Oct - 2023</span>
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart width={500} height={500}>
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
                                    {appointmentDatePie.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="mt-7 w-full px-5 h-96">
                <div className="flex w-full space-x-5 h-full">
                    <div className="w-full bg-white px-7 py-7 rounded-lg">
                        <span className=" flex justify-center font-bold text-lg">Top 10 Revenue service  of Oct - 2023</span>
                        <ResponsiveContainer width="100%" height="100%" >
                            <BarChart
                                width={500}
                                height={300}
                                data={serviceTotal}
                                margin={{
                                    right: 30,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                                <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                                <Tooltip content={<CustomTooltip />} />
                                <Legend />
                                <Bar yAxisId="left" dataKey="Total1" fill="#8884d8" />
                                <Bar yAxisId="right" dataKey="Total2" fill="#82ca9d" />
                                <Bar yAxisId="right" dataKey="Total3" fill="#0099CF" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="mt-7 w-full px-5 h-96">
                <div className="flex w-full space-x-5 h-full">
                    <div className="w-full bg-white px-7 py-7 rounded-lg">
                        <span className=" flex justify-center font-bold text-lg">Appointment of year 2023 & 2024</span>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={serviceYear}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="2023" fill="#8884d8" activeBar={<Rectangle fill="#8884d8" stroke="blue" />} />
                                <Bar dataKey="2024" fill="#FF0004" activeBar={<Rectangle fill="#FF0004" stroke="purple" />} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <div className="mt-7 w-full px-5 h-96">
                <div className="flex w-full space-x-5 h-full">
                    <div className="w-full bg-white px-7 py-7 rounded-lg">
                        <span className=" flex justify-center font-bold text-lg">Service of year 2023-2024</span>
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                                width={500}
                                height={400}
                                data={serviceYear}
                                margin={{
                                    top: 10,
                                    right: 30,
                                    left: 0,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Area type="monotone" dataKey="2023" stackId="1" stroke="#8884d8" fill="#8884d8" />
                                <Area type="monotone" dataKey="2024" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                            </AreaChart>
                            
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
            <FilterModal />
        </div>
    )
}

export default Report_service