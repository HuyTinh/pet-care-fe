import { RouteObject } from "react-router-dom";
import { ServicePage } from ".";
import { DiagnosticsService } from "./components/diagnostics";
import { AllService } from "./components/all-service";

export const ServiceRouter: RouteObject =
{
    path: "service",
    element: <ServicePage />,
    children: [
        { index: true, element: <AllService /> },
        { path: "diagnostics", element: <DiagnosticsService /> },
    ],
}