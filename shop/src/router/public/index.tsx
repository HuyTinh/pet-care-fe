import { RouteObject } from "react-router-dom";

import { ClientLayout } from "../..";
import { HomeRouter } from "../../page/site/home/router";
import { ProductCartRouter } from "../../page/site/cart/router";
import { ProductDetailRouter } from "../../page/site/product-detail/router";


// User routes for the client-side (public) pages
export const PublicRoutes: RouteObject = {
    path: "/",
    element: <ClientLayout />, // Layout for the site
    children: [
        HomeRouter, // Homepage
        ProductCartRouter,
        ProductDetailRouter,
    ],
};