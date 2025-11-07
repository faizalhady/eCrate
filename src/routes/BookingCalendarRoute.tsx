import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const BookingCalendarPage = lazy(() => import("@/pages/booking/BookingCalendarPage"));

export const BookingCalendarRoute: RouteObject = {
    path: "/booking1", // 🔹 URL will be /booking
    element: <BookingCalendarPage />,
};
