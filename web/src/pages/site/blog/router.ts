import { RouteObject } from "react-router-dom";
import { ReactNode } from "react";
import { BlogPage } from ".";

export const BlogRouter: RouteObject =
{
    path: "blog",
    element: BlogPage as unknown as ReactNode
}