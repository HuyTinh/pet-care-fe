import { MenuItem } from "../../../layout/side-bar";
import { IoDocumentText } from "react-icons/io5";
import { AdminLayout } from "../layout";
import ReportAppointment from "./tabs/report-appointment";

const menuItems: MenuItem[] = [
  {
    title: "Appontment",
    icon: <IoDocumentText size={32} />,
    path: "/admin/manager",
  }
];

const ManagerPage = () => {
  return (
    <AdminLayout menuItems={menuItems}>
      <ReportAppointment />
    </AdminLayout>
  );
};

export default { page: <ManagerPage />, rolesAccess: ["MANAGER"] }