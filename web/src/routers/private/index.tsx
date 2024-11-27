import { RouteObject, useNavigate } from "react-router-dom";
import { RootLayout } from "../../shared/ui/root-layout";
import { AdminAuthPage } from "../../pages/admin/auth";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../store/store";
import { DoctorPage } from "../../pages/admin/doctor";
import { WareHousePage } from "../../pages/admin/warehouse";
import { ManagerLayout } from "../../pages/admin/manager/layout";
import { HomeManager } from "../../pages/admin/manager/home";
import { Customeranager } from "../../pages/admin/manager/customer/custommer";
import { EmployeesManager } from "../../pages/admin/manager/employees/listDashboard";
import Appointment from "../../pages/admin/manager/appointment";
import { Services } from "../../pages/admin/manager/services";
import Report_appointment from "../../pages/admin/manager/report/appointment";
import Report_service from "../../pages/admin/manager/report/service";
import Report_revenue from "../../pages/admin/manager/report/revenue";
import { ReceptionistPage } from "../../pages/admin/receptionist";

// ProtectedRoute component ensures that only users with valid roles can access the route
const ProtectedRoute: React.FC<{
    element: JSX.Element; // The element to be rendered if authorized
    allowedRoles: string[]; // List of roles allowed to access the route
}> = ({ element, allowedRoles }) => {
    const { isAuth, role } = useSelector(
        (state: RootState) => state.authentication, // Getting authentication status and role from Redux
    );
    const navigate = useNavigate(); // Hook to navigate to different pages

    useEffect(() => {
        if (!isAuth) {
            navigate("/admin"); // Redirect to login if not authenticated
        } else if (!allowedRoles.includes(role!)) {
            // Redirect based on user role if not authorized
            switch (role) {
                case "DOCTOR":
                    navigate("/admin/doctor");
                    break;
                case "RECEPTIONIST":
                    navigate("/admin/receptionist");
                    break;
                case "WAREHOUSE_MANAGER":
                    navigate("/admin/warehouse");
                    break;
                default:
                    navigate("/admin"); // Default to admin if no valid role
            }
        }
    }, [isAuth, role, allowedRoles, navigate]);

    return allowedRoles.includes(role!) ? element : null; // Render element if role is allowed
};

// Admin routes for protected pages
export const PrivateRoutes: RouteObject = {
    path: "/admin",
    element: <RootLayout />, // Admin root layout
    children: [
        { index: true, element: <AdminAuthPage /> },
        {
            path: "receptionist",
            element: (
                <ProtectedRoute
                    element={<ReceptionistPage />} // Receptionist page (protected)
                    allowedRoles={["RECEPTIONIST"]} // Only allowed for receptionists
                />
            ),
        },
        {
            path: "doctor",
            element: (
                <ProtectedRoute element={<DoctorPage />} allowedRoles={["DOCTOR"]} /> // Doctor page (protected)
            ),
        },
        {
            path: "warehouse",
            element: (
                <ProtectedRoute
                    element={<WareHousePage />} // Warehouse page (protected)
                    allowedRoles={["WAREHOUSE_MANAGER"]} // Only allowed for warehouse managers
                />
            ),
        },
        {
            path: "manager",
            element: (
                <ProtectedRoute
                    element={<ManagerLayout />} // Manager layout (protected)
                    allowedRoles={["MANAGER"]} // Only allowed for managers
                />
            ),
            children: [
                { index: true, element: <HomeManager /> }, // Manager home page
                { path: "customer", element: <Customeranager /> }, // Manager customer page
                { path: "employee", element: <EmployeesManager /> }, // Manager emloyee page
                { path: "appointment", element: <Appointment /> }, // Manager appointment 
                { path: "serivces", element: <Services /> }, // Manager services page
                { path: "report/appointment", element: <Report_appointment /> }, // Appointment report
                { path: "report/service", element: <Report_service /> }, // Service report
                { path: "report/revenue", element: <Report_revenue /> }, // Revenue report
            ],
        },
    ], // Admin authentication page
};