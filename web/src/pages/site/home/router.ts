import { RouteObject } from "react-router-dom";
import { HomePage } from ".";
import { ReactNode } from "react";

export const HomeRouter: RouteObject =
{
    index: true,
    element: HomePage as unknown as ReactNode
}