import { RouteObject } from "react-router-dom";
import { ContactPage } from ".";
import { ReactNode } from "react";

export const ContactRouter: RouteObject =
{
    path: "contact",
    element: ContactPage as unknown as ReactNode
}