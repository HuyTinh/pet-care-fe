import { PrescriptionManagement } from "./tabs/prescription-management";
import { MenuItem } from "../../../components/side-bar";
import { IoDocumentText } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { AdminLayout } from "../layout";

const menuItems: MenuItem[] = [
  {
    title: "Prescription",
    icon: <IoDocumentText size={32} />,
    path: "/admin/doctor",
  },
  {
    title: "Profile",
    icon: <CiUser size={32} />,
    path: "/doctor/profile",
  },
];

export const DoctorPage = () => {
  return (
    <AdminLayout menuItems={menuItems}>
      <PrescriptionManagement />
    </AdminLayout>
  );
};
