import { SideMenu } from "./side-menu";
import { AnimatePresence } from "framer-motion";
import { PrescriptionManagement } from "./tabs/prescription-management";

export const DoctorPage = () => {
  return (
    <AnimatePresence initial={false}>
      <div className="h-full bg-blue-400">
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
