import { RouteObject } from "react-router-dom";
import Manager from "."
import { ProtectedRoute } from "../../../routers/protected";
import ReportAppointment from "./tabs/report-appointment";
import ReportPrescription from "./tabs/report-prescription";

const { page, rolesAccess } = Manager

export const ManagerRouter: RouteObject =
{
    path: "manager",
    element: <ProtectedRoute element={page as unknown as JSX.Element} rolesAccess={rolesAccess} />,
    children: [
        { index: true, element: <ReportAppointment /> },
        { path: "prescription", element: <ReportPrescription /> }
    ]
    // children: [
    //     { index: true, element: HomeManager as unknown as ReactNode },
    //     { path: "customer", element: CustomersManager as unknown as ReactNode },
    //     { path: "employee", element: EmployeesManager as unknown as ReactNode },
    //     { path: "appointment", element: AppointmentsManage as unknown as ReactNode },
    //     { path: "serivces", element: ServicesManage as unknown as ReactNode },
    //     { path: "report/appointment", element: ReportAppointment as unknown as ReactNode },
    //     { path: "report/service", element: ReportService as unknown as ReactNode },
    //     { path: "report/revenue", element: ReportRevenue as unknown as ReactNode },
    // ]
}