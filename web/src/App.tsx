import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { RouterHooks } from "./router";
import { Fragment } from "react/jsx-runtime";
import { setAuthenticated } from "./pages/auth.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AnimatePresence } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";
import "./assets/styles/app.css";
import "swiper/css";

import "./assets/styles/app.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const hookRouter = RouterHooks();
  const dispatch = useDispatch();

  useEffect(() => {
    // Check if the token is stored in local storage
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setAuthenticated(token));
    }
  }, [dispatch]);

  return (
    <Fragment>
      <AnimatePresence initial={false}>
        <RouterProvider router={hookRouter.router} />
      </AnimatePresence>

      <ToastContainer
        autoClose={2500}
        pauseOnHover={true}
        closeButton={false}
        style={{ zIndex: 1000 }}
        stacked
        closeOnClick
      />
    </Fragment>
  );
}

export default App;
