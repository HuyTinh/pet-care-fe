
import { FaFilter } from "react-icons/fa";
import _ from "lodash"
import LineChartReportApointment from "./components/chart/line";
import BarChartReportApointment from "./components/chart/bar";
import PieChartReportApointment from "./components/chart/pie";

const ReportAppointment = () => {
    return (
        <div className="p-10">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <span className="text-2xl text-[#0099CF] font-bold">Appointment Report</span>
                </div>
            </div>
            <LineChartReportApointment />
            <div className="mt-7 w-full px-5 h-96">
                <div className="flex flex-row w-full space-x-5 h-full">
                    <BarChartReportApointment />
                    <PieChartReportApointment />
                </div>
            </div>
            {/* <FilterModal /> */}
        </div>
    )
}

export default ReportAppointment 