import { Outlet, ScrollRestoration } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { AnimatePresence } from "framer-motion";
export const ClientLayout = () => {
  return (
    <div className="flex h-screen flex-col">
      <ScrollRestoration
        getKey={(location) => {
          const paths = ["/account/appointment"];
          return paths.includes(location.pathname)
            ? // home and notifications restore by pathname
              location.pathname
            : // everything else by location like the browser
              location.key;
        }}
      />
      {!location.pathname.includes("receptionist") &&
        !location.pathname.includes("warehouse") && <Header />}

      <div className="flex-1">
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </div>
      {!location.pathname.includes("receptionist") &&
        !location.pathname.includes("warehouse") && <Footer />}
    </div>
  );
};
