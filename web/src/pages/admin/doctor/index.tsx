import { PrescriptionManagement } from "./tabs/prescription-management";
import { MenuItem } from "../../../layout/side-bar";
import { IoDocumentText } from "react-icons/io5";
import { AdminLayout } from "../layout";

const menuItems: MenuItem[] = [
  {
    title: "Prescription",
    icon: <IoDocumentText size={32} />,
    path: "/admin/doctor",
  }
];

const DoctorPage = () => {
  return (
    <AdminLayout menuItems={menuItems}>
      <PrescriptionManagement />
    </AdminLayout>
  );
};

export default { page: <DoctorPage />, rolesAccess: ["DOCTOR"] }