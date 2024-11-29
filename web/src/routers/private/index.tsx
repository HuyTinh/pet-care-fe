import { RouteObject } from "react-router-dom";
import { RootLayout } from "../../shared/ui/root-layout";
import { ReceptionistRouter } from "../../pages/admin/receptionist/router";
import { AdminAuthRouter } from "../../pages/admin/auth/router";
import { DoctorRouter } from "../../pages/admin/doctor/router";
import { WarehouseRouter } from "../../pages/admin/warehouse/router";
import { ManagerRouter } from "../../pages/admin/manager/router";

// Admin routes for protected pages
export const PrivateRoutes: RouteObject = {
    path: "/admin",
    element: <RootLayout />, // Admin root layout
    children: [
        AdminAuthRouter,
        ReceptionistRouter,
        DoctorRouter,
        WarehouseRouter,
        ManagerRouter,
    ], // Admin authentication page
};