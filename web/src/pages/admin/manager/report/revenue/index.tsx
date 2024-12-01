
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
  Rectangle,
} from 'recharts';
import { revenueData, revenueYear, revenueYear2024 } from "./dummy_revenue_data";
import { FilterModal } from "./modal";
const ReportRevenue = () => {

  return (
    <div className="h-[100%] w-full mt-28 bg-slate-100 px-14 py-10 ">
      <div className="flex flex-row items-center justify-between">
        <div>
          <span className="text-2xl text-[#0099CF] font-bold">Revenue</span>
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
      <div className="flex mt-7 space-x-4 px-5 ">
        <div className="card w-96 shadow-xl bg-gray-200">
          <div className="card-body text-[#0099CF]">
            <h2 className="card-title justify-center text-2xl -mt-3">Customers</h2>
            <div className="flex flex-row mt-1 ">
              {/* Thêm wrapper tròn cho ảnh */}
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#0099CF] rounded-full">
                <img src="/src/shared/assets/images/rating.png" className="w-12 h-12 z-10" />
              </div>
              <div className="flex flex-col ml-7">
                <p>
                  <span className="text-lg font-bold">Total: </span>30
                </p>
                <p className="mt-2 font-semibold">
                  Today
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-xl bg-gray-200">
          <div className="card-body text-[#0099CF]">
            <h2 className="card-title justify-center text-2xl -mt-3">Appointments</h2>
            <div className="flex flex-row mt-1 ">
              {/* Thêm wrapper tròn cho ảnh */}
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#0099CF] rounded-full">
                <img src="/src/shared/assets/images/appointment.png" className="w-12 h-12 z-10" />
              </div>
              <div className="flex flex-col ml-7">
                <p>
                  <span className="text-lg font-bold">Total: </span>30
                </p>
                <p className="mt-2 font-semibold">
                  Today
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-96 shadow-xl bg-gray-200">
          <div className="card-body text-[#0099CF]">
            <h2 className="card-title justify-center text-2xl -mt-3">Invoices</h2>
            <div className="flex flex-row mt-1 ">
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#0099CF] rounded-full">
                <img src="/src/shared/assets/images/invoice.png" className="w-12 h-12 z-10" />
              </div>
              <div className="flex flex-col ml-7">
                <p>
                  <span className="text-lg font-bold">Total: </span>30
                </p>
                <p className="mt-2 font-semibold">
                  Today
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card w-[450px] shadow-xl bg-gray-200">
          <div className="card-body text-[#0099CF]">
            <h2 className="card-title justify-center text-2xl -mt-3">Revenue</h2>
            <div className="flex flex-row mt-1 ">
              <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#0099CF] rounded-full">
                <img src="/src/shared/assets/images/revenue.png" className="w-12 h-12 z-10" />
              </div>
              <div className="flex flex-col ml-7">
                <p>
                  <span className="text-lg font-bold">Total: </span>26,000,000,000
                </p>
                <p className="mt-2 font-semibold">
                  Today
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full px-5 h-96">
        <div className="flex w-full space-x-5 h-full">
          <div className="w-full bg-white px-7 py-7 rounded-lg">
            <span className=" flex justify-center font-bold text-lg">Revenue of Oct - 24</span>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={revenueData}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                barSize={20}
              >
                <XAxis dataKey="DAY_INVOICE" scale="point" padding={{ left: 10, right: 10 }} />
                <YAxis />
                <Tooltip />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="Total" fill="#8884d8" background={{ fill: '#eee' }} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full px-5 h-96">
        <div className="flex w-full space-x-5 h-full">
          <div className="w-full bg-white px-7 py-7 rounded-lg">
            <span className=" flex justify-center font-bold text-lg">Revenue of Oct - 24</span>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={revenueYear2024}
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
                <Bar dataKey="2024" fill="#3830CF" activeBar={<Rectangle fill="#3830CF" stroke="purple" />} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="mt-10 w-full px-5 h-96">
        <div className="flex w-full space-x-5 h-full">
          <div className="w-full bg-white px-7 py-7 rounded-lg">
            <span className=" flex justify-center font-bold text-lg">Revenue of yeart 2023 - 2024</span>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                width={500}
                height={300}
                data={revenueYear}
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
      <FilterModal />
    </div>
  )
}

export default ReportRevenue
