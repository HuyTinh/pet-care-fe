import "./assets/styles";
import { ToastContainer } from "react-toastify";
import { RouterProvider } from "react-router-dom";
import { RouterHooks } from "./router";
import { Fragment } from "react/jsx-runtime";

function App() {
  const hookRouter = RouterHooks();
  return (
    <Fragment>
      <RouterProvider router={hookRouter.router} />
      <ToastContainer
        autoClose={1000}
        closeOnClick
        toastClassName="!w-96 text-center"
        pauseOnHover={false}
        closeButton={false}
        stacked
      />
    </Fragment>
  );
}

export default App;
