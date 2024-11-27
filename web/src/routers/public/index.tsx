import { RouteObject } from "react-router-dom";
import { ClientLayout } from "../../pages/site";
import { HomeRouter } from "../../pages/site/home/router";
import { ProfilePage } from "../../pages/site/account";
import { ProfileTab } from "../../pages/site/account/tabs/profile";
import { AppointmentTab } from "../../pages/site/account/tabs/appointment";
import { PrescriptionTab } from "../../pages/site/account/tabs/prescription";
import { BookingPage } from "../../pages/site/booking";
import { EventPage } from "../../pages/site/blog/event";
import { BlogPage } from "../../pages/site/blog/blog";
import { NewContent } from "../../pages/site/blog/newContent";
import { ServicePage } from "../../pages/site/service";
import { AllService } from "../../pages/site/service/all-service";
import { DiagnosticsService } from "../../pages/site/service/diagnostics";
import { ContactRouter } from "../../pages/site/contact/router";

// User routes for the client-side (public) pages
export const PublicRoutes: RouteObject = {
    path: "/",
    element: <ClientLayout />, // Layout for the site
    children: [
        HomeRouter, // Homepage
        {
            path: "account",
            element: <ProfilePage />, // Profile page
            children: [
                { index: true, element: <ProfileTab /> }, // Profile tab
                { path: "appointment", element: <AppointmentTab /> }, // Appointment tab
                { path: "prescription", element: <PrescriptionTab /> }
            ],
        },
        { path: "booking", element: <BookingPage /> }, // Booking page
        { path: "blog", element: <BlogPage /> }, // Blog page
        { path: "event", element: <EventPage /> }, // Event page in the blog
        { path: "new/:documentId", element: <NewContent /> }, // New content page for specific document
        {
            path: "service",
            element: <ServicePage />, // Service page
            children: [
                { index: true, element: <AllService /> }, // All services
                { path: "diagnostics", element: <DiagnosticsService /> }, // Diagnostics service
            ],
        },
        ContactRouter, // Contact page
    ],
};