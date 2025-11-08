import AppLayout from "@/layouts/AppLayout"
import AuthLayout from "@/layouts/AuthLayout"
import { Suspense } from "react"
import { RouterProvider, createBrowserRouter } from "react-router-dom"

// Routes
import NotFoundPage from "@/pages/error/NotFoundPage"
import { BookingCalendarRoute } from "./routes/BookingCalendarRoute"
import { CalendarRoute } from "./routes/CalendarRoute"
import { CratingSchedulerRoute } from "./routes/CratingSchedulerRoute"
import { DashboardRoute } from "./routes/DashboardRoute"
import { ExampleRoute } from "./routes/ExampleRoute"
import { IPKGuidelineRoute } from "./routes/IPKGuidelineRoute"
import { LoaderDemoRoute } from "./routes/LoaderDemoRoute"
import { LoginRoute } from "./routes/LoginRoute"

const router = createBrowserRouter([
  {
    path: "/", // main application routes
    element: <AppLayout />,
    children: [
      DashboardRoute,
      ExampleRoute,
      IPKGuidelineRoute,
      BookingCalendarRoute,
      CratingSchedulerRoute,
      CalendarRoute,
      LoaderDemoRoute,
    ],
  },
  {
    // 🔐 Auth-related routes (no sidebar)
    element: <AuthLayout />,
    children: [
      ...LoginRoute, // ✅ includes /login & /login2
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])

export default function App() {
  return (
    <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
      <RouterProvider router={router} />
    </Suspense>
  )
}
