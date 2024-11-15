// Importing necessary components and hooks for routing and state management
import {
  createBrowserRouter,
  RouteObject,
  useNavigate,
} from "react-router-dom";
import { RootLayout } from "./components/root-layout"; // Root layout for the app
import { ReceptionistPage } from "./pages/admin/receptionist"; // Receptionist page
import { DoctorPage } from "./pages/admin/doctor"; // Doctor page
import { ClientLayout } from "./pages/site"; // Layout for client-side pages
import { HomePage } from "./pages/site/home"; // Homepage for the site
import { BookingPage } from "./pages/site/booking"; // Booking page
import { useSelector } from "react-redux"; // Redux hook to access global state
import { RootState } from "./store/store"; // RootState type for Redux store
import { ProfilePage } from "./pages/site/account"; // Profile page
import { ContactPage } from "./pages/site/contact"; // Contact page
import { AppointmentTab } from "./pages/site/account/tabs/appointment"; // Appointment tab inside profile
import { ProfileTab } from "./pages/site/account/tabs/profile"; // Profile tab inside profile
import { ServicePage } from "./pages/site/service"; // Service page
import { AllService } from "./pages/site/service/all-service"; // All services
import { DiagnosticsService } from "./pages/site/service/diagnostics"; // Diagnostics service
import { useCookies } from "react-cookie"; // Cookie hook to manage cookies
import { Blog } from "./pages/site/blog/blog"; // Blog page
import { useEffect } from "react"; // Effect hook for side effects
import { WareHousePage } from "./pages/admin/warehouse"; // Warehouse page
import { AdminAuthPage } from "./pages/admin/auth"; // Admin authentication page
import { Event } from "./pages/site/blog/event"; // Event page in the blog
import { NewContent } from "./pages/site/blog/newContent" // New content in the blog

// Admin manager layout and related pages
import { ManagerLayout } from "./pages/admin/manager/layout"; // Manager layout
import { HomeManager } from "./pages/admin/manager/home"; // Manager home page
import { Services } from "./pages/admin/manager/services"; // Manager services page
import Report_appointment from "./pages/admin/manager/report/appointment"; // Appointment report
import Report_service from "./pages/admin/manager/report/service"; // Service report
import Report_revenue from "./pages/admin/manager/report/revenue"; // Revenue report

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

// User routes for the client-side (public) pages
const userRoutes: RouteObject = {
  path: "/",
  element: <ClientLayout />, // Layout for the site
  children: [
    { index: true, element: <HomePage /> }, // Homepage
    {
      path: "account",
      element: <ProfilePage />, // Profile page
      children: [
        { index: true, element: <ProfileTab /> }, // Profile tab
        { path: "appointment", element: <AppointmentTab /> }, // Appointment tab
      ],
    },
    { path: "booking", element: <BookingPage /> }, // Booking page
    { path: "blog", element: <Blog /> }, // Blog page
    { path: "event", element: <Event /> }, // Event page in the blog
    { path: "new/:documentId", element: <NewContent /> }, // New content page for specific document
    {
      path: "service",
      element: <ServicePage />, // Service page
      children: [
        { index: true, element: <AllService /> }, // All services
        { path: "diagnostics", element: <DiagnosticsService /> }, // Diagnostics service
      ],
    },
    { path: "contact", element: <ContactPage /> }, // Contact page
  ],
};

// Admin routes for protected pages
// const adminRoutes: RouteObject[] = [
//   {
//     path: "/receptionist",
//     element: (
//       <ProtectedRoute
//         element={<ReceptionistPage />} // Receptionist page (protected)
//         allowedRoles={["RECEPTIONIST"]} // Only allowed for receptionists
//       />
//     ),
//   },
//   {
//     path: "/doctor",
//     element: (
//       <ProtectedRoute element={<DoctorPage />} allowedRoles={["DOCTOR"]} /> // Doctor page (protected)
//     ),
//   },
//   {
//     path: "/warehouse",
//     element: (
//       <ProtectedRoute
//         element={<WareHousePage />} // Warehouse page (protected)
//         allowedRoles={["WAREHOUSE_MANAGER"]} // Only allowed for warehouse managers
//       />
//     ),
//   },
//   {
//     path: "/manager",
//     element: (
//       <ProtectedRoute
//         element={<ManagerLayout />} // Manager layout (protected)
//         allowedRoles={["MANAGER"]} // Only allowed for managers
//       />
//     ),
//     children: [
//       { index: true, element: <HomeManager /> }, // Manager home page
//       { path: "serivces", element: <Services /> }, // Manager services page
//       { path: "report/appointment", element: <Report_appointment /> }, // Appointment report
//       { path: "report/service", element: <Report_service /> }, // Service report
//       { path: "report/revenue", element: <Report_revenue /> }, // Revenue report
//     ],
//   },
// ];

// Default route for admin (auth page)
const defaultRoute: RouteObject = {
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
        { path: "serivces", element: <Services /> }, // Manager services page
        { path: "report/appointment", element: <Report_appointment /> }, // Appointment report
        { path: "report/service", element: <Report_service /> }, // Service report
        { path: "report/revenue", element: <Report_revenue /> }, // Revenue report
      ],
    },
  ], // Admin authentication page
};

// Main router component with user, admin, and default routes
export const RouterHooks = () => {
  const { userId } = useSelector(
    (state: RootState) => state.authentication, // Get user ID from Redux
  );
  const [cookies, setCookies] = useCookies<any>(); // Use cookies for notification settings

  useEffect(() => {
    if (userId && cookies[`email-notification-${userId}`] === undefined) {
      setCookies(`email-notification-${userId}`, true); // Set a cookie for email notifications
    }
  }, [userId, cookies, setCookies]);

  // Create a browser router with all defined routes
  const router = createBrowserRouter([
    defaultRoute,
    userRoutes,
  ]);

  return { router }; // Return the router object
};
