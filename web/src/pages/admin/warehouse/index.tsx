import MedicinesManagement from "./tabs/medicine-management";
import { CiCircleInfo, CiPill } from "react-icons/ci";
import { MenuItem } from "../../../layout/side-bar";
import { AdminLayout } from "../layout";

const menuItems: MenuItem[] = [
  {
    title: "Medicine",
    icon: <CiPill size={32} />,
    path: "/admin/warehouse",
  },
  {
    title: "Guide",
    icon: <CiCircleInfo size={32} />,
    path: "/admin/guide",
  },
];

const WarehousePage = () => {
  return (
    <AdminLayout menuItems={menuItems}>
      <MedicinesManagement />
    </AdminLayout>
  );
};

export default { page: WarehousePage, rolesAccess: ["WAREHOUSE_MANAGER"] }
