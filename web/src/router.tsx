import {
  createBrowserRouter,
  RouteObject,
  useNavigate,
} from "react-router-dom";
import { RootLayout } from "./components/root-layout";
import { ReceptionistPage } from "./pages/admin/receptionist";
import { DoctorPage } from "./pages/admin/doctor";
import { ClientLayout } from "./pages/site";
import { HomePage } from "./pages/site/home";
import { BookingPage } from "./pages/site/booking";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { ProfilePage } from "./pages/site/account";
import { ContactPage } from "./pages/site/contact";
import { AppointmentTab } from "./pages/site/account/tabs/appointment";
import { ProfileTab } from "./pages/site/account/tabs/profile";
import { ServicePage } from "./pages/site/service";
import { AllService } from "./pages/site/service/all-service";
import { DiagnosticsService } from "./pages/site/service/diagnostics";
import { useCookies } from "react-cookie";
import { Blog } from "./pages/site/blog/blog";
import { useEffect } from "react";
import { WareHousePage } from "./pages/admin/warehouse";
import { AdminAuthPage } from "./pages/admin/auth";

const ProtectedRoute: React.FC<{
  element: JSX.Element;
  allowedRoles: string[];
}> = ({ element, allowedRoles }) => {
  const { isAuth, role } = useSelector(
    (state: RootState) => state.authentication,
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/admin"); // Điều hướng tới trang đăng nhập nếu chưa đăng nhập
    } else if (!allowedRoles.includes(role!)) {
      // Điều hướng tới trang đúng với vai trò của họ nếu vai trò không hợp lệ
      switch (role) {
        case "DOCTOR":
          navigate("/doctor");
          break;
        case "RECEPTIONIST":
          navigate("/receptionist");
          break;
        case "WAREHOUSE_MANAGER":
          navigate("/warehouse");
          break;
        default:
          navigate("/admin"); // Điều hướng về trang admin nếu không có vai trò hợp lệ
      }
    }
  }, [isAuth, role, allowedRoles, navigate]);

  return allowedRoles.includes(role!) ? element : null;
};

const userRoutes: RouteObject = {
  path: "/",
  element: <ClientLayout />,
  children: [
    { index: true, element: <HomePage /> },
    {
      path: "account",
      element: <ProfilePage />,
      children: [
        { index: true, element: <ProfileTab /> },
        { path: "appointment", element: <AppointmentTab /> },
      ],
    },
    { path: "booking", element: <BookingPage /> },
    { path: "blog", element: <Blog /> },
    {
      path: "service",
      element: <ServicePage />,
      children: [
        { index: true, element: <AllService /> },
        { path: "diagnostics", element: <DiagnosticsService /> },
      ],
    },
    { path: "contact", element: <ContactPage /> },
  ],
};

const adminRoutes: RouteObject[] = [
  {
    path: "/receptionist",
    element: (
      <ProtectedRoute
        element={<ReceptionistPage />}
        allowedRoles={["RECEPTIONIST"]}
      />
    ),
  },
  {
    path: "/doctor",
    element: (
      <ProtectedRoute element={<DoctorPage />} allowedRoles={["DOCTOR"]} />
    ),
  },
  {
    path: "/warehouse",
    element: (
      <ProtectedRoute
        element={<WareHousePage />}
        allowedRoles={["WAREHOUSE_MANAGER"]}
      />
    ),
  },
];

const defaultRoute: RouteObject = {
  path: "/admin",
  element: <RootLayout />,
  children: [{ index: true, element: <AdminAuthPage /> }],
};

export const RouterHooks = () => {
  const { isAuth, userId } = useSelector(
    (state: RootState) => state.authentication,
  );
  const [cookies, setCookies] = useCookies<any>();

  useEffect(() => {
    if (userId && cookies[`email-notification-${userId}`] === undefined) {
      setCookies(`email-notification-${userId}`, true);
    }
  }, [userId, cookies, setCookies]);

  const router = createBrowserRouter([
    defaultRoute,
    userRoutes,
    ...adminRoutes,
  ]);

  return { router };
};
