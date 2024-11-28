import { RouteObject } from "react-router-dom";
import { RootLayout } from "../../shared/ui/root-layout";
import { WareHousePage } from "../../pages/admin/warehouse";
import { ManagerLayout } from "../../pages/admin/manager/layout";
import { HomeManager } from "../../pages/admin/manager/home";
import { Customeranager } from "../../pages/admin/manager/customer/custommer";
import { EmployeesManager } from "../../pages/admin/manager/employees/listDashboard";
import Appointment from "../../pages/admin/manager/appointment";
import { Services } from "../../pages/admin/manager/services";
import ReportAppointment from "../../pages/admin/manager/report/appointment";
import ReportService from "../../pages/admin/manager/report/service";
import ReportRevenue from "../../pages/admin/manager/report/revenue";
import { ReceptionistRouter } from "../../pages/admin/receptionist/router";
import { AdminAuthRouter } from "../../pages/admin/auth/router";
import { DoctorRouter } from "../../pages/admin/doctor/router";
import { ProtectedRoute } from "../protected";

// Admin routes for protected pages
export const PrivateRoutes: RouteObject = {
    path: "/admin",
    element: <RootLayout />, // Admin root layout
    children: [
        AdminAuthRouter,
        ReceptionistRouter,
        DoctorRouter,
        {
            path: "warehouse",
            element: (
                <ProtectedRoute
                    element={<WareHousePage />} // Warehouse page (protected)
                    rolesAccess={["WAREHOUSE_MANAGER"]} // Only allowed for warehouse managers
                />
            ),
        },
        {
            path: "manager",
            element: (
                <ProtectedRoute
                    element={<ManagerLayout />} // Manager layout (protected)
                    rolesAccess={["MANAGER"]} // Only allowed for managers
                />
            ),
            children: [
                { index: true, element: <HomeManager /> }, // Manager home page
                { path: "customer", element: <Customeranager /> }, // Manager customer page
                { path: "employee", element: <EmployeesManager /> }, // Manager emloyee page
                { path: "appointment", element: <Appointment /> }, // Manager appointment 
                { path: "serivces", element: <Services /> }, // Manager services page
                { path: "report/appointment", element: <ReportAppointment /> }, // Appointment report
                { path: "report/service", element: <ReportService /> }, // Service report
                { path: "report/revenue", element: <ReportRevenue /> }, // Revenue report
            ],
        },
    ], // Admin authentication page
};