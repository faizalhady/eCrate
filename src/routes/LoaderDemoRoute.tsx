import { lazy } from "react"
import type { RouteObject } from "react-router-dom"

const LoaderDemoPage = lazy(() => import("@/pages/demo/LoaderDemoPage"))

export const LoaderDemoRoute: RouteObject = {
    path: "/demo/loaders",
    element: <LoaderDemoPage />,
}
