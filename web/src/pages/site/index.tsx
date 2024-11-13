// Import necessary components and hooks from React Router, Framer Motion, and React
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

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

  // useEffect to load CozeWebSDK script only once when the component mounts
  useEffect(() => {
    const script = document.createElement("script"); // Create a new script element
    script.src =
      "https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.5/libs/oversea/index.js"; // Script URL for CozeWebSDK
    script.async = true; // Make the script load asynchronously
    document.body.appendChild(script); // Append the script to the document body

    // Callback function to initialize the CozeWebSDK once the script is loaded
    script.onload = () => {
      if (window.CozeWebSDK) { // Check if the CozeWebSDK is available
        new window.CozeWebSDK.WebChatClient({
          config: {
            bot_id: "7426180817090560018", // Bot ID for the chat client
          },
          componentProps: {
            title: "Pet Care Assistant", // Title of the chat component
          },
        });
      } else {
        console.error("CozeWebSDK is not defined."); // Log error if the SDK is not available
      }
    };

    // Cleanup function to remove the script when the component unmounts
    return () => {
      document.body.removeChild(script); // Remove the script element
    };
  }, []); // Empty dependency array ensures the effect runs only once

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
