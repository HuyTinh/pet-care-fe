import BarChartReportPrescriptionByDateToDate from "./components/chart/bar/by-date-to-date"
import BarChartReportPrescriptionByYear from "./components/chart/bar/by-year"
import LineChartReportPrescription from "./components/chart/line"
import PieChartReportPrescription from "./components/chart/pie"

const ReportPrescription = () => {
    return (
        <div className="p-10">
            <div className="flex flex-row items-center justify-between">
                <div>
                    <span className="text-2xl text-[#0099CF] font-bold">Prescription Report</span>
                </div>
            </div>
            <LineChartReportPrescription />
            <div className="mt-7 w-full px-5 h-96">
                <div className="flex flex-row w-full space-x-5 h-full">
                    <BarChartReportPrescriptionByYear />
                    <PieChartReportPrescription />
                </div>
            </div>
            <div className="mt-7 w-full px-5 h-96">
                <div className="flex flex-row w-full space-x-5 h-full">
                    <BarChartReportPrescriptionByDateToDate />
                </div>
            </div>
        </div>
    )
}

export default ReportPrescription
