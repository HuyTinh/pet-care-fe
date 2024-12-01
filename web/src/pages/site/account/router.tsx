import { RouteObject } from "react-router-dom";
import { ProfilePage } from ".";
import { ProfileTab } from "./tabs/profile";
import { AppointmentTab } from "./tabs/appointment";
import { PrescriptionTab } from "./tabs/prescription";

export const AccountRouter: RouteObject =
{
    path: "account",
    element: <ProfilePage />,
    children: [
        { index: true, element: <ProfileTab /> },
        { path: "appointment", element: <AppointmentTab /> },
        { path: "prescription", element: <PrescriptionTab /> }
    ],
}