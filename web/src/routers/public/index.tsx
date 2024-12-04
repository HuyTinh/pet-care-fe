import { RouteObject } from "react-router-dom";
import { ClientLayout } from "../../pages/site";
import { HomeRouter } from "../../pages/site/home/router";
import { ContactRouter } from "../../pages/site/contact/router";
import { BookingRouter } from "../../pages/site/booking/router";
import { EventRouter } from "../../pages/site/event/router";
import { BlogRouter } from "../../pages/site/blog/router";
import { NewsRouter } from "../../pages/site/news/router";
import { AccountRouter } from "../../pages/site/account/router";
import { ServiceRouter } from "../../pages/site/service/router";
import { HomeProductRouter } from "../../pages/site/product/Home/router";
import { ProductDetailRouter } from "../../pages/site/product/product-detail/router";
import { ProductCartRouter } from "../../pages/site/product/product-cart/router";


// User routes for the client-side (public) pages
export const PublicRoutes: RouteObject = {
    path: "/",
    element: <ClientLayout />, // Layout for the site
    children: [
        HomeRouter, // Homepage
        AccountRouter,
        BookingRouter, // Booking page
        BlogRouter, // Blog page
        EventRouter, // Event page in the blog
        NewsRouter, // New content page for specific document
        ServiceRouter,
        ContactRouter, // Contact page
        HomeProductRouter,
        ProductDetailRouter,
        ProductCartRouter
    ],
};