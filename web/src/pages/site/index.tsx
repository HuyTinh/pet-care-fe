import { Outlet, useLocation } from "react-router-dom";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
export const ClientLayout = () => {
  const location = useLocation();

  return (
    <div className="flex h-screen flex-col">
      {!location.pathname.includes("receptionist") && <Header />}

      <div className="flex-1">
        <Outlet />
      </div>
      {!location.pathname.includes("receptionist") && <Footer />}
    </div>
  );
};
