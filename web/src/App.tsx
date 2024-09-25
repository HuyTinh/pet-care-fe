import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { RouterHooks } from "./router";
import { Fragment } from "react/jsx-runtime";

import "./assets/styles/app.css";
import "react-toastify/dist/ReactToastify.css";
import { setAuthenticated } from "./pages/auth.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GoogleOAuthProvider } from "@react-oauth/google";

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
      <RouterProvider router={hookRouter.router} />
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
