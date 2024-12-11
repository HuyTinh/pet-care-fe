import { RouteObject } from "react-router-dom";
import { HomePage } from ".";
import ReportAppointment from "../../admin/manager/report/appointment";

export const HomeRouter: RouteObject =
{
    index: true,
    element: <HomePage />
}