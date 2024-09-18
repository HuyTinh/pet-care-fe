import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { AdminAuthPage } from "./pages/admin/auth";
import { ReceptionistPage } from "./pages/admin/receptionist";
import { DoctorPage } from "./pages/admin/doctor";

const AdminPage = {
  receptionist: <ReceptionistPage />,
  doctor: <DoctorPage />,
};

export const RouterHooks = () => {
  const role = "";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/admin",
          element: role ? AdminPage[role] : <AdminAuthPage />,
        },
      ],
    },
  ]);
  return { router: router };
};
