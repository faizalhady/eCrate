import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const CratingSchedulerPage = lazy(() => import("@/pages/booking/CratingSchedulerPage"));

export const CratingSchedulerRoute: RouteObject = {
    path: "/booking", // 🔹 URL will be /booking
    element: <CratingSchedulerPage />,
};
