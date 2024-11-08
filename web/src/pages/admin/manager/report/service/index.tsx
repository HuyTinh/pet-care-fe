
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
const Report_service = () => {
    const serviceDataCeil = [
        {
            name: 'Vaccin - Cat',
            service1: 60,
            service2: 50,
            service3: 40,
            service4: 30,
        },
        {
            name: 'Detal Cleaning',
            service1: 30,
            service2: 20,
            service3: 40,

        },
        {
            name: 'Skin Parasite',
            service1: 10,
            service2: 21,
            service3: 10,

        },

    ];
    const appointmentDatePie = [
        { name: 'Group A', value: 400 },
        { name: 'Group B', value: 300 },
        { name: 'Group C', value: 300 },
        { name: 'Group D', value: 200 },
        { name: 'Group E', value: 200 },
        { name: 'Group F', value: 200 },
        { name: 'Group G', value: 200 },
    ];
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
    const serviceTotal = [
        {
            name: 'Vaccin - Cat',
            Total1: 60,
            Total2: 50,
            Total3: 40,
        },
        {
            name: 'Detal Cleaning',
            Total1: 30,
            Total2: 20,
            Total3: 40,
        },
        {
            name: 'Skin Parasite',
            Total1: 10,
            Total2: 21,
            Total3: 10,
        },
    ];
    const serviceYear = [
        {
            name: 'Jan',
            2023: 4000,
            2024: 2400,
        },
        {
            name: 'Feb',
            2023: 3221,
            2024: 1400,
        },
        {
            name: 'Mar',
            2023: 5201,
            2024: 1379,
        },
        {
            name: 'Apr',
            2023: 2980,
            2024: 2100,
        },
        {
            name: 'May',
            2023: 2131,
            2024: 3923,
        },
        {
            name: 'Jun',
            2023: 1234,
            2024: 5432,
        },
        {
            name: 'Aug',
            2023: 2468,
            2024: 6421,
        },
        {
            name: 'Sep',
            2023: 2245,
            2024: 1921,
        },
        {
            name: 'Oct',
            2023: 1979,
            2024: 1269,
        },
        {
            name: 'Nov',
            2023: 2004,
            2024: 3104,

        },
        {
            name: 'Dec',
            2023: 2504,
            2024: 3204,
        },
    ];



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