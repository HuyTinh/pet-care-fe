import { createBrowserRouter } from "react-router-dom";
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

const Page = (isAuth: Boolean, role: string) => {
  return {
    customer: {
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
        {
          path: "receptionist",
          element: <ReceptionistPage />,
        },
        {
          path: "doctor",
          element: <DoctorPage />,
        },
      ],
    },
    receptionist: <ReceptionistPage />,
    doctor: <DoctorPage />,
  }[role];
};

export const RouterHooks = () => {
  const isAuth = useSelector((state: RootState) => state.authentication.isAuth);
  const userId = useSelector((state: RootState) => state.authentication.userId);
  const [cookies, setCookies] = useCookies<any>();
  const role = "customer";

  useEffect(() => {
    if (userId) {
      cookies[`email-notification-${userId}`] === undefined &&
        setCookies(`email-notification-${userId}`, true);
    }
  }, [userId]);

  // isAuth && cookies[];

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [Page(isAuth, role) as any],
    },
  ]);
  return { router: router };
};
