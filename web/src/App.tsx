import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { useRoutes } from "./shared/hooks/useRoutes";
import { Fragment } from "react/jsx-runtime";
import { setAuthenticated } from "./pages/auth.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";
import "./assets/css/app.css";
import "swiper/css";

import "./assets/css/app.css";
import "react-toastify/dist/ReactToastify.css";
import AxiosClient from "./config/axios-client";
import { jwtDecode } from "jwt-decode";


/**
 * The main App component that manages authentication and routing.
 */
function App() {
  const hookRouter = useRoutes(); // Initialize custom router hooks for routing
  const dispatch = useDispatch(); // Access the dispatch function to dispatch actions to Redux

  useEffect(() => {
    // This effect runs when the component is mounted (i.e., the app starts).

    // Check if the token is stored in local storage
    const token = localStorage.getItem("token");
    if (token) {
      // Decode the JWT token to get user data (specifically, user_id)
      const decodedToken: { user_id: string, scope: string } = jwtDecode(token);

      // If token exists, make an API request to get the user account details
      AxiosClient.get(`${decodedToken.scope.includes("CUSTOMER") ? import.meta.env.VITE_CUSTOMER_PATH + "/customer" : import.meta.env.VITE_EMPLOYEE_PATH + "/employee"}/account/${decodedToken.user_id}`)
        .then(res => {
          // Dispatch the setAuthenticated action to store the user's profile and token in Redux
          dispatch(setAuthenticated({ token, profile: res.data }));
        });
    }
  }, [dispatch]); // Effect runs when `dispatch` changes, but in this case, `dispatch` doesn't change, so this runs once

  return (
    <Fragment>
      {/* AnimatePresence wraps the RouterProvider to animate routes when transitioning */}
      <AnimatePresence initial={false}>
        {/* RouterProvider manages routing in the app, using the custom router hook for routing configuration */}
        <RouterProvider router={hookRouter.router} />
      </AnimatePresence>

      {/* ToastContainer is used to show toast notifications */}
      <ToastContainer
        autoClose={2500} // Notifications auto-close after 2500ms
        pauseOnHover={true} // Pause notifications when hovered
        closeButton={false} // Disable close button on notifications
        style={{ zIndex: 1000 }} // Ensure notifications appear above other UI elements
        stacked // Stack notifications when multiple are shown
        closeOnClick // Close notifications when clicked
      />
    </Fragment>
  );
}

export default App;
