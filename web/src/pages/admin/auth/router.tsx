import { RouteObject } from "react-router-dom";
import { AdminAuthPage } from ".";
import { ReactNode } from "react";

export const AdminAuthRouter: RouteObject =
{
    index: true,
    element: AdminAuthPage as unknown as ReactNode
}