import { RouteObject } from "react-router-dom";
import { ReactNode } from "react";
import { ServicePage } from ".";
import { DiagnosticsService } from "./components/diagnostics";
import { AllService } from "./components/all-service";

export const ServiceRouter: RouteObject =
{
    path: "service",
    element: ServicePage as unknown as ReactNode,
    children: [
        { index: true, element: AllService as unknown as ReactNode },
        { path: "diagnostics", element: DiagnosticsService as unknown as ReactNode },
    ],
}