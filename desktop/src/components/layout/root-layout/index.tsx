import { Outlet } from "react-router-dom";

export const RootLayout = () => {
  return (
    <div className="h-screen  overflow-hidden">
      <Outlet />
    </div>
  );
};
