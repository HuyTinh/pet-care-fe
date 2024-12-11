// Import necessary components and hooks from React Router, Framer Motion, and React
import { Outlet } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Header } from "./layout/header";
import { Footer } from "./layout/footer";

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
  return (
    <div className="flex h-screen flex-col">
      {<Header />}
      {/* Main content area with animations using AnimatePresence */}
      <div className="flex-1">
        <AnimatePresence>
          <Outlet /> {/* Render the matched child route */}
        </AnimatePresence>
      </div>
      {<Footer />}
    </div>
  );
};
