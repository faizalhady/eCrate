import { lazy } from "react"
import type { RouteObject } from "react-router-dom"

const CalendarPage = lazy(() => import("@/pages/booking/CalendarPage"))

export const CalendarRoute: RouteObject = {
    path: "/calendar",
    element: <CalendarPage />,
}
