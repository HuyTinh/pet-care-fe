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
      {/* <GoogleOAuthProvider clientId="171737653063-1m5elbbm70k45d1p48cj8qakjdfupslb.apps.googleusercontent.com"> */}
      <AnimatePresence initial={false}>
        <RouterProvider router={hookRouter.router} />
      </AnimatePresence>

      {/* </GoogleOAuthProvider> */}
      <ToastContainer
        autoClose={2500}
        pauseOnHover={true}
        closeButton={false}
        style={{ zIndex: 1000 }}
        stacked
        closeOnClick
      />
      {/* <PetCareModalContainer size="md" /> */}
    </Fragment>
  );
}

export default App;
