// Import necessary components and hooks from React Router, Framer Motion, and React
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Header } from "../../layout/header";
import { Footer } from "../../layout/footer";
import { AnimatePresence } from "framer-motion";

// Define an interface for the CozeWebSDK, which will be used globally
interface CozeWebSDK {
  WebChatClient: new (options: {
    config: { bot_id: string }; // Bot ID for configuring the WebChatClient
    componentProps: { title: string }; // Title for the chat interface
  }) => void;
}

// Declare global window property to access CozeWebSDK script on the window object
declare global {
  interface Window {
    CozeWebSDK: CozeWebSDK;
  }
}

// Main layout component for the client-side view
export const ClientLayout: React.FC = () => {
  const location = useLocation(); // Hook to get the current location

  return (
    <div className="flex h-screen flex-col">
      {/* ScrollRestoration component to preserve scroll position */}
      <ScrollRestoration
        getKey={(location) => {
          const paths = ["/account/appointment"];
          return paths.includes(location.pathname)
            ? location.pathname // Use the pathname as the key for certain paths
            : location.key; // Otherwise, use the default location key
        }}
      />

      {/* Conditionally render Header and Footer based on the current pathname */}
      {!location.pathname.includes("receptionist") &&
        !location.pathname.includes("warehouse") &&
        !location.pathname.includes("doctor") &&
        !location.pathname.includes("admin") && <Header />}

      {/* Main content area with animations using AnimatePresence */}
      <div className="flex-1">
        <AnimatePresence>
          <Outlet /> {/* Render the matched child route */}
        </AnimatePresence>
      </div>

      {/* Conditionally render Footer based on the current pathname */}
      {!location.pathname.includes("receptionist") &&
        !location.pathname.includes("warehouse") &&
        !location.pathname.includes("doctor") &&
        !location.pathname.includes("admin") && <Footer />}
    </div>
  );
};
