import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/root-layout";
import { ReceptionistPage } from "./pages/admin/receptionist";
import { DoctorPage } from "./pages/admin/doctor";
import { ClientLayout } from "./pages/site";
import { HomePage } from "./pages/site/home";
import { BookingPage } from "./pages/site/booking";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";
import { ProfilePage } from "./pages/site/profile";
import { ContactPage } from "./pages/site/contact";
import { AppointmentTab } from "./pages/site/profile/tabs/appointment";
import { ProfileTab } from "./pages/site/profile/tabs/profile";

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
          path: "contact",
          element: <ContactPage />,
        },
        {
          path: "receptionist",
          element: <ReceptionistPage />,
        },
      ],
    },
    receptionist: <ReceptionistPage />,
    doctor: <DoctorPage />,
  }[role];
};

export const RouterHooks = () => {
  const isAuth = useSelector((state: RootState) => state.authentication.isAuth);
  const role = "customer";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [Page(isAuth, role) as any],
    },
  ]);
  return { router: router };
};
