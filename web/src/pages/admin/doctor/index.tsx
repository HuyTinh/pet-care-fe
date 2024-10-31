import { SideMenu } from "./side-menu";
import { AnimatePresence } from "framer-motion";
import { PrescriptionManagement } from "./tabs/prescription-management";
import { useHandleLogout } from "../../../utils/handleLogout";

export const DoctorPage = () => {
  const handleLogout = useHandleLogout();
  return (
    <AnimatePresence initial={false}>
      <div className="h-screen bg-blue-400">
        {/* <button className="btn" onClick={handleLogout}>
              Logout
            </button> */}
        <div className="flex h-full">
          <SideMenu />
          <div className="relative z-20 w-full pb-2 pe-4 pt-4">
            <div className="flex h-full flex-1 flex-col rounded-lg border-2 border-black bg-white">
              <PrescriptionManagement />
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
