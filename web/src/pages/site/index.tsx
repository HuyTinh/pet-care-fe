import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

interface CozeWebSDK {
  WebChatClient: new (options: {
    config: { bot_id: string };
    componentProps: { title: string };
  }) => void;
}

declare global {
  interface Window {
    CozeWebSDK: CozeWebSDK;
  }
}

export const ClientLayout: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://sf-cdn.coze.com/obj/unpkg-va/flow-platform/chat-app-sdk/0.1.0-beta.5/libs/oversea/index.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (window.CozeWebSDK) {
        new window.CozeWebSDK.WebChatClient({
          config: {
            bot_id: "7426180817090560018",
          },
          componentProps: {
            title: "Pet Care Assistant",
          },
        });
      } else {
        console.error("CozeWebSDK is not defined.");
      }
    };

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex h-screen flex-col">
      <ScrollRestoration
        getKey={(location) => {
          const paths = ["/account/appointment"];
          return paths.includes(location.pathname)
            ? location.pathname
            : location.key;
        }}
      />
      {!location.pathname.includes("receptionist") &&
        !location.pathname.includes("warehouse") &&
        !location.pathname.includes("doctor") &&
        !location.pathname.includes("admin") && <Header />}

      <div className="flex-1">
        <AnimatePresence>
          <Outlet />
        </AnimatePresence>
      </div>
      {!location.pathname.includes("receptionist") &&
        !location.pathname.includes("warehouse") &&
        !location.pathname.includes("doctor") &&
        !location.pathname.includes("admin") && <Footer />}
    </div>
  );
};
