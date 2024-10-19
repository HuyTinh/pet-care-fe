import { createBrowserRouter, Navigate } from "react-router-dom";   //
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

// interface ProtectedRouteProps {
//   element: JSX.Element;
//   allowedRoles: string[];
//   isAuth: boolean;
//   role: string;
// }

// Hàm xác thực vai trò
const ProtectedRoute = ({
  element,
  allowedRoles,
  isAuth,
  role,
}: ProtectedRouteProps) => {
  // if (role != null) {

  //   return allowedRoles.includes(role) ? element : <Navigate to="/admin" />;

  // } else {
  //   return <Navigate to="/" />;
  // }
  return true ? <DoctorPage /> : <Navigate to="/admin" />;
};

const userRoutes = {
  path: "/",
  element: <ClientLayout />,
  children: [
    {
      index: true,
      element: <HomePage />,
    },
    {
      path: "account",
      element: <ProfilePage />,
      children: [
        {
          index: true,
          element: <ProfileTab />,
        },
        {
          path: "appointment",
          element: <AppointmentTab />,
        },
      ],
    },
    {
      path: "booking",
      element: <BookingPage />,
    },
    {
      path: "blog",
      element: <Blog />,
    },
    {
      path: "service",
      element: <ServicePage />,
      children: [
        {
          index: true,
          element: <AllService />,
        },
        {
          path: "diagnostics",
          element: <DiagnosticsService />,
        },
      ],
    },
    {
      path: "contact",
      element: <ContactPage />,
    },
  ],
};


const adminRoutes = (role: string | null, isAuth: boolean) => {
  console.log(isAuth)
  return [
    {
      path: "/receptionist",
      element: {
        page: <ReceptionistPage />,
        allowedRoles: ["RECEPTIONIST"]
      }
    },
    {
      path: "/doctor",
      element: {
        page: <DoctorPage />,
        allowedRoles: ["DOCTOR"]
      }
    },
    {
      path: "/warehouse",
      element: {
        page: <WareHousePage />,
        allowedRoles: ["WAREHOUSE_MANAGER"]
      }
    },
  ].map(route => {
    return {
      ...route,
      element: route.element.page
    }
  });
}

const defaultRoute = {
  path: "/admin",
  element: <RootLayout />,
  children: [
    {
      index: true,
      element: <AdminAuthPage />,
    },
  ],
};

export const RouterHooks = () => {
  const isAuth = useSelector((state: RootState) => state.authentication.isAuth);
  const userId = useSelector((state: RootState) => state.authentication.userId);
  const role = useSelector((state: RootState) => state.authentication.role);
  const [cookies, setCookies] = useCookies<any>();

  useEffect(() => {
    if (userId) {
      if (cookies[`email-notification-${userId}`] === undefined) {
        setCookies(`email-notification-${userId}`, true);
      }
    }
  }, [userId]);

  const router = isAuth != null && createBrowserRouter([
    defaultRoute,
    userRoutes,
    ...adminRoutes(role, isAuth),
  ]);

  return { router: router };
};
