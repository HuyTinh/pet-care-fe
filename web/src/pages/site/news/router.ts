import { RouteObject } from "react-router-dom";
import { ReactNode } from "react";
import { NewsPage } from ".";

export const NewsRouter: RouteObject =
{
    path: "new/:newsId",
    element: NewsPage as unknown as ReactNode
}