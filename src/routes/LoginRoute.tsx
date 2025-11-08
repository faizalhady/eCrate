import { lazy } from "react"
import type { RouteObject } from "react-router-dom"

// Lazy imports
const LoginPage = lazy(() => import("@/pages/auth/LoginPage"))
const LoginPage2 = lazy(() => import("@/pages/auth/LoginPage2"))

export const LoginRoute: RouteObject[] = [
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/login2",
        element: <LoginPage2 />,
    },
]
