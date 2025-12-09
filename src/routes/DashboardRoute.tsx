import { lazy } from "react"
import type { RouteObject } from "react-router-dom"

const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage"))

export const DashboardRoute: RouteObject = {
  index: true,
  element: <DashboardPage />,
}
