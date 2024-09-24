import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { RouterHooks } from "./router";
import { Fragment } from "react/jsx-runtime";

import "./assets/styles/app.css";
import "react-toastify/dist/ReactToastify.css";
import { setAuthenticated } from "./pages/auth.slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

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
      <RouterProvider router={hookRouter.router} />
      <ToastContainer
        autoClose={2000}
        pauseOnHover={true}
        closeButton={false}
        style={{ zIndex: 1000 }}
        stacked
      />
    </Fragment>
  );
}

export default App;
