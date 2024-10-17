import { SideMenu } from "./side-menu";
import { AnimatePresence } from "framer-motion";
import { AppointmentManagement } from "./tabs/appointment-management";

export const ReceptionistPage = () => {
  return (
    <AnimatePresence initial={false}>
      <div className="h-screen bg-blue-400">
        <div className="flex h-full">
          <SideMenu />
          <div className="relative z-20 w-full pb-2 pe-4 pt-4">
            <div className="flex h-full flex-1 flex-col rounded-lg border-2 border-black bg-white">
              <AppointmentManagement />
            </div>
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};
