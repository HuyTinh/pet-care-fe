import { Fragment } from "react/jsx-runtime";
import { AnimatePresence } from "framer-motion";
import { ToastContainer } from "react-toastify";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PublicRoutes } from "./router/public";

/**
 * The main App component that manages authentication and routing.
 */
function App() {
  return (
    <Fragment>
      {/* AnimatePresence wraps the RouterProvider to animate routes when transitioning */}
      <AnimatePresence initial={false}>
        {/* RouterProvider manages routing in the app, using the custom router hook for routing configuration */}
        <RouterProvider router={createBrowserRouter([
          PublicRoutes
        ])} />
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
