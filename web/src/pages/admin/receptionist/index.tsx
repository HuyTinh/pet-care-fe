import { AppointmentManagement } from "./tabs/appointment-management";
import { MenuItem } from "../../../components/side-bar";
import { CiCalendar, CiCircleInfo } from "react-icons/ci";
import { AdminLayout } from "../layout";

const menuItems: MenuItem[] = [
  {
    title: "Appointment",
    icon: <CiCalendar size={32} />,
    path: "/admin/receptionist",
  },
  {
    title: "Guide",
    icon: <CiCircleInfo size={32} />,
    path: "/admin/guide",
  },
];

export const ReceptionistPage = () => {
  return (
    <AdminLayout menuItems={menuItems}>
      <AppointmentManagement />
    </AdminLayout>
  );
};
