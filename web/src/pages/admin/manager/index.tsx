import { MenuItem } from "../../../layout/side-bar";
import { IoDocumentText } from "react-icons/io5";
import { AdminLayout } from "../layout";
import { Outlet } from "react-router-dom";
import { RiCalendarScheduleLine } from "react-icons/ri";

const menuItems: MenuItem[] = [
  {
    title: "Appontment",
    icon: <RiCalendarScheduleLine size={32} />,
    path: "/admin/manager",
  },
  {
    title: "Prescription",
    icon: <IoDocumentText size={32} />,
    path: "/admin/manager/prescription",

  }
];

const ManagerPage = () => {
  return (
    <AdminLayout menuItems={menuItems}>
      <Outlet />
    </AdminLayout>
  );
};

export default { page: <ManagerPage />, rolesAccess: ["MANAGER"] }