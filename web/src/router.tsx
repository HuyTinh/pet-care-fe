import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";
import { AdminAuthPage } from "./pages/admin/auth";

const AdminPage = {
  receptionist: <div>Receptionist</div>,
  doctor: <div>Doctor</div>,
};

export const RouterHooks = () => {
  const role = "receptionist";

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
