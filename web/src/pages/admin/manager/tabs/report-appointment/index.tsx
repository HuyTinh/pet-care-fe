
import _ from "lodash"
import LineChartReportApointment from "./components/chart/line";
import PieChartReportApointment from "./components/chart/pie";
import BarChartReportApointmentByYear from "./components/chart/bar/by-year";
import BarChartReportApointmentByDateToDate from "./components/chart/bar/by-date-to-date";

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
                    <BarChartReportApointmentByYear />
                    <PieChartReportApointment />
                </div>
            </div>
            <div className="mt-7 w-full px-5 h-96">
                <div className="flex flex-row w-full space-x-5 h-full">
                    <BarChartReportApointmentByDateToDate />
                </div>
            </div>
        </div>
    )
}

export default ReportAppointment 