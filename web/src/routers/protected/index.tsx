import { memo, useEffect } from "react";
import { RootState } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// ProtectedRoute component ensures that only users with valid roles can access the route
export const ProtectedRoute: React.FC<{
    element: JSX.Element; // The element to be rendered if authorized
    rolesAccess: string[]; // List of roles allowed to access the route
}> = memo(({ element, rolesAccess }) => {
    const { isAuth, role } = useSelector(
        (state: RootState) => state.authentication, // Getting authentication status and role from Redux
    );
    const navigate = useNavigate(); // Hook to navigate to different pages

    useEffect(() => {
        if (!isAuth) {
            navigate("/admin"); // Redirect to login if not authenticated
        } else if (!rolesAccess.includes(role!)) {
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
    }, [isAuth, role, rolesAccess, navigate]);

    return rolesAccess.includes(role!) ? element : null; // Render element if role is allowed
})