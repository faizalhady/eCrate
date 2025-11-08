import { lazy } from "react";
import type { RouteObject } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";

const CratingSchedulerPage = lazy(() => import("@/pages/booking/CratingSchedulerPage"));

export const CratingSchedulerRoute: RouteObject = {
    path: "/booking",
    element: (
        <ProtectedRoute>
            <CratingSchedulerPage />
        </ProtectedRoute>
    ),
};
