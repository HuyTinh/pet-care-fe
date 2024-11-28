import { RouteObject } from "react-router-dom";
import { ReactNode } from "react";
import { ProfilePage } from ".";
import { ProfileTab } from "./tabs/profile";
import { AppointmentTab } from "./tabs/appointment";
import { PrescriptionTab } from "./tabs/prescription";

export const AccountRouter: RouteObject =
{
    path: "account",
    element: ProfilePage as unknown as ReactNode,
    children: [
        { index: true, element: ProfileTab as unknown as ReactNode },
        { path: "appointment", element: AppointmentTab as unknown as ReactNode },
        { path: "prescription", element: PrescriptionTab as unknown as ReactNode }
    ],
}