import { lazy } from "react"
import type { RouteObject } from "react-router-dom"
import { ProtectedRoute } from "./ProtectedRoute"

const CalendarPage = lazy(() => import("@/pages/booking/CalendarPage"))

export const CalendarRoute: RouteObject = {
    path: "calendar",
    element: (
        <ProtectedRoute>
            <CalendarPage />
        </ProtectedRoute>
    ),
}
