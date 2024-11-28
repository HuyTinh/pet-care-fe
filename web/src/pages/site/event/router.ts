import { RouteObject } from "react-router-dom";
import { ReactNode } from "react";
import { EventPage } from ".";

export const EventRouter: RouteObject =
{
    path: "event",
    element: EventPage as unknown as ReactNode
}