import { RouteObject } from "react-router-dom";
import Warehouse from "."
import { ProtectedRoute } from "../../../routers/protected";


const { page, rolesAccess } = Warehouse

export const WarehouseRouter: RouteObject =
{
    path: "warehouse",
    element: <ProtectedRoute element={page as unknown as JSX.Element} rolesAccess={rolesAccess} />
}