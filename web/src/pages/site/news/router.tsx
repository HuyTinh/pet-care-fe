import { RouteObject } from "react-router-dom";
import { NewsPage } from ".";

export const NewsRouter: RouteObject =
{
    path: "new/:newsId",
    element: <NewsPage />
}