// Importing necessary components and hooks for routing and state management
import {
  createBrowserRouter,
} from "react-router-dom";
import { useSelector } from "react-redux"; // Redux hook to access global state
import { RootState } from "./store/store"; // RootState type for Redux store
import { useCookies } from "react-cookie"; // Cookie hook to manage cookies
import { useEffect } from "react"; // Effect hook for side effects

import { PrivateRoutes } from "./routers/private";
import { PublicRoutes } from "./routers/public";

// Main router component with user, admin, and default routes
export const useRouterHooks = () => {
  const { userId } = useSelector(
    (state: RootState) => state.authentication, // Get user ID from Redux
  );
  const [cookies, setCookies] = useCookies<any>(); // Use cookies for notification settings

  useEffect(() => {
    if (userId && cookies[`email-notification-${userId}`] === undefined) {
      setCookies(`email-notification-${userId}`, true); // Set a cookie for email notifications
    }
  }, [userId, cookies, setCookies]);

  // Create a browser router with all defined routes
  const router = createBrowserRouter([
    PrivateRoutes,
    PublicRoutes,
  ]);

  return { router }; // Return the router object
};
