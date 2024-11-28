import { RouteObject } from "react-router-dom";
import { BookingPage } from ".";
import { ReactNode } from "react";

export const BookingRouter: RouteObject =
{
    path: "booking",
    element: BookingPage as unknown as ReactNode
}