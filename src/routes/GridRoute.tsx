import { lazy } from "react"
import type { RouteObject } from "react-router-dom"

// Lazy imports for each layout
const GridOne = lazy(() => import("@/layouts/GridOne"))
const GridTwo = lazy(() => import("@/layouts/GridTwo"))
// const GridThree = lazy(() => import("@/layouts/GridThree"))

export const GridRoutes: RouteObject[] = [
    {
        path: "/grid1",
        element: <GridOne />,
    },
    {
        path: "/grid2",
        element: <GridTwo />,
    },
    // {
    //     path: "/grid3",
    //     element: <GridThree />,
    // },
]
