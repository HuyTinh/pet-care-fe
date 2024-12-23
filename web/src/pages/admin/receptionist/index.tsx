import { AppointmentManagement } from "./tabs/appointment-management";
import { MenuItem } from "../../../layout/side-bar";
import { CiCalendar } from "react-icons/ci";
import { AdminLayout } from "../layout";

const menuItems: MenuItem[] = [
  {
    title: "Appointment",
    icon: <CiCalendar size={32} />,
    path: "/admin/receptionist",
  }
];

const ReceptionistPage = () => {
  return (
    <AdminLayout menuItems={menuItems}>
      <AppointmentManagement />
    </AdminLayout>
  );
};

export default { page: <ReceptionistPage />, rolesAccess: ["RECEPTIONIST"] }
