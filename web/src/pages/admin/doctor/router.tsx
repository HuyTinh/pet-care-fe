import { RouteObject } from "react-router-dom";
import Doctor from "."
import { ProtectedRoute } from "../../../routers/protected";

const { page, rolesAccess } = Doctor

export const DoctorRouter: RouteObject =
{
    path: "doctor",
    element: <ProtectedRoute element={page as unknown as JSX.Element} rolesAccess={rolesAccess} />
}