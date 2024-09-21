import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./components/root-layout";
import { ReceptionistPage } from "./pages/admin/receptionist";
import { DoctorPage } from "./pages/admin/doctor";
import { ClientLayout } from "./pages/site";
import { HomePage } from "./pages/site/home";
import { BookingPage } from "./pages/site/booking";

const Page = {
  customer: {
    path: "/",
    element: <ClientLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "booking",
        element: <BookingPage />,
      },
    ],
  },
  receptionist: <ReceptionistPage />,
  doctor: <DoctorPage />,
};

export const RouterHooks = () => {
  const role = "customer";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [Page[role]],
    },
  ]);
  return { router: router };
};
