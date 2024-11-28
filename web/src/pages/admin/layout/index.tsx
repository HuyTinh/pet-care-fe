import { MenuItem, SideBar } from "../../../layout/side-bar"
import { AnimatePresence } from "framer-motion";
import { AdminProfileModal } from "./admin-profile-modal";
import { memo } from "react";

type AdminLayoutProps = {
    menuItems: MenuItem[],
    children: JSX.Element
}

export const AdminLayout = memo(({ menuItems, children }: AdminLayoutProps) => {
    return (
        <AnimatePresence initial={false}>
            <div className="h-screen w-screen bg-blue-400">
                <div className="flex h-full">
                    <SideBar menuItems={menuItems} />
                    <div className="relative z-20 w-full pb-2 pe-4 pr-2 pt-4">
                        <div className="flex h-full flex-1 flex-col rounded-lg border-2 border-black bg-white">
                            {children}
                        </div>
                    </div>
                </div>
                <AdminProfileModal />
            </div>
        </AnimatePresence>
    )
})
