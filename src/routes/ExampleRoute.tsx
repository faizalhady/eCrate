import { lazy } from "react"
import type { RouteObject } from "react-router-dom"

const ExamplePage = lazy(() => import("@/pages/example/ExamplePage"))
const DemoHooks = lazy(() => import("@/pages/demo/hookDemo"))

export const ExampleRoute: RouteObject[] = [


  {
    path: "/example",
    element: <ExamplePage />,
  },
  {
    path: "/demo",
    element: <DemoHooks />,
  }
]