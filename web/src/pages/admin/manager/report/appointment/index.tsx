
import { FaFilter } from "react-icons/fa";
import { FilterModal } from "./modal";
import _ from "lodash"
import LineChartReportApointment from "./chart/line";
import BarChartReportApointment from "./chart/bar";
import PieChartReportApointment from "./chart/pie";

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
                    <PieChartReportApointment />
                </div>
            </div>
            <FilterModal />
        </div>
    )
}

export default ReportAppointment 