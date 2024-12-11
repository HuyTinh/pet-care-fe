import { useState } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell,
    Rectangle
} from 'recharts';
import { dataBarMonthly, dataBarYearly, dataMedicine, dataPie } from './dummy_medicine_data';

interface LabelProps {
    cx: number;
    cy: number;
    midAngle: number;
    innerRadius: number;
    outerRadius: number;
    percent: number;
    index?: number;
}

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
}: LabelProps) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos((-midAngle * Math.PI) / 180);
    const y = cy + radius * Math.sin((-midAngle * Math.PI) / 180);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};


const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export const AppointmentDashboard = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null); // Sử dụng useState để quản lý trạng thái

    const onPieEnter = (_: any, index: number) => {
        setActiveIndex(index); // Cập nhật chỉ số của phần được hover
    };

    const onPieLeave = () => {
        setActiveIndex(null); // Xóa chỉ số khi rời khỏi phần
    };

    const [showPopup, setShowPopup] = useState(false);

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const activeData = activeIndex !== null ? dataPie[activeIndex] : null;
    return (
        <div className="p-4 bg-gray-100 space-y-6">
            <div className='flex justify-between'>
                <h1 className="text-2xl font-semibold text-blue-600">Appointment</h1>
                <button
                    className="flex items-center bg-blue-300 p-4 rounded-lg shadow h-[10px]"
                    onClick={togglePopup}
                >
                    Filter
                </button>
            </div>
            {showPopup && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[300px]">
                        <h2 className="text-lg font-semibold mb-4">Select Month and Year</h2>
                        <div className="space-y-4">
                            <div className='flex justify-between'>
                                <div>
                                    <label className="block font-medium mb-2">Month</label>
                                    <select className="w-full p-2 border rounded">
                                        <option value="1">January</option>
                                        <option value="2">February</option>
                                        <option value="3">March</option>
                                        <option value="4">April</option>
                                        <option value="5">May</option>
                                        <option value="6">Jun</option>
                                        <option value="7">July</option>
                                        <option value="8">August</option>
                                        <option value="9">September</option>
                                        <option value="10">October</option>
                                        <option value="11">November</option>
                                        <option value="12">December</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-medium mb-2">Year</label>
                                    <select className="w-full p-2 border rounded">
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                    </select>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <div>
                                    <label className="block font-medium mb-2">First Year</label>
                                    <select className="w-full p-2 border rounded">
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block font-medium mb-2">Second Year</label>
                                    <select className="w-full p-2 border rounded">
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                    </select>
                                </div>
                            </div>


                            <div className="flex justify-end space-x-2 mt-4">
                                <button
                                    className="px-4 py-2 bg-gray-300 rounded"
                                    onClick={togglePopup}
                                >
                                    Cancel
                                </button>
                                <button
                                    className="px-4 py-2 bg-blue-500 text-white rounded"
                                    onClick={togglePopup}
                                >
                                    Apply
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <div className='flex justify-between'>
                <div className="bg-white p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold text-center">Top 10 medicine of Dec - 2024 </h2>
                    <BarChart width={800} height={400} data={dataBarMonthly}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Quantity" fill="#00008B" activeBar={<Rectangle fill="yellow" stroke="purple" />} />

                    </BarChart>
                </div>

                <div style={{ textAlign: "center" }}>
                    <h3>Top 10 Revenue Service of Oct - 2023</h3>
                    {/* <ResponsiveContainer width="100%    " height={400}> */}
                    <PieChart width={500} height={400}>
                        <Pie
                            data={dataPie}
                            dataKey="Apoquel"
                            cx="50%"
                            cy="50%"
                            outerRadius={200}
                            fill="#8884d8"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            onMouseEnter={onPieEnter} // Sự kiện hover vào
                            onMouseLeave={onPieLeave}
                        >
                            {dataPie.map((_, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                    {/* </ResponsiveContainer> */}
                    {activeData && (
                        <div
                            style={{
                                marginTop: 10,
                                fontSize: "16px",
                                fontFamily: "medium",
                                color: COLORS[activeIndex || 1 % COLORS.length],
                            }}
                        >
                            <span
                                style={{
                                    width: 16,
                                    height: 16,
                                    backgroundColor: COLORS[activeIndex || 1 % COLORS.length],
                                    display: "inline-block",
                                    marginRight: 8,
                                }}
                            ></span>
                            {`  ${activeData.name}
          
          `}
                        </div>
                    )}
                </div>
            </div>

            <div className="bg-white p-10 rounded-lg shadow">
                {/* <ResponsiveContainer width={"100%"} height={400}> */}
                <h2 className="text-lg font-semibold text-center">Top 10 Revenue Medicine of Oct - 2023</h2>
                <BarChart height={300} data={dataMedicine} margin={{
                    top: 5,
                    right: 30,
                    left: 40,
                    bottom: 5,
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Total" fill="#FF6347" />
                </BarChart>
                {/* </ResponsiveContainer> */}
            </div>
            <div className="bg-white p-10 rounded-lg shadow">
                {/* <ResponsiveContainer width={"100%"} height={400}> */}
                <h2 className="text-lg font-semibold text-center">Appointment of year 2023 & 2024</h2>
                <BarChart height={300} data={dataBarYearly} margin={{
                    top: 5,
                    right: 30,
                    left: 40,
                    bottom: 5,
                }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="2023" fill="#FF6347" />
                    <Bar dataKey="2024" fill="#00008B" />
                </BarChart>
                {/* </ResponsiveContainer> */}
            </div>
        </div>
    );
};


