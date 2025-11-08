import { lazy } from "react"
import type { RouteObject } from "react-router-dom"

const LoginPage = lazy(() => import("@/pages/auth/LoginPage"))

export const LoginRoute: RouteObject[] = [
    {
        path: "/login",
        element: <LoginPage />,
    },
]
