import { Outlet, ScrollRestoration} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "./header";


export const ManagerLayout: React.FC = () => {

    return (
        <div className="flex h-screen flex-col">
            <ScrollRestoration/>
            <div className="flex-1">
                <AnimatePresence>
                    <Header />
                    <Outlet />
                </AnimatePresence>
            </div>
        </div>
    );
};
