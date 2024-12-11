import { RouteObject } from "react-router-dom";
import Resription from "."
import { ProtectedRoute } from "../../../routers/protected";

const { page, rolesAccess } = Resription

export const ReceptionistRouter: RouteObject =
{
    path: "receptionist",
    element: <ProtectedRoute element={page as unknown as JSX.Element} rolesAccess={rolesAccess} />
}