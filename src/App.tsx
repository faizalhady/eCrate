import { Toaster } from "@/components/ui/sonner"; // ✅ move here
import AppLayout from "@/layouts/AppLayout";
import AuthLayout from "@/layouts/AuthLayout";
import { Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// Routes
import NotFoundPage from "@/pages/error/NotFoundPage";
import { BookingCalendarRoute } from "./routes/BookingCalendarRoute";
import { CalendarRoute } from "./routes/CalendarRoute";
import { CratingSchedulerRoute } from "./routes/CratingSchedulerRoute";
import { DashboardRoute } from "./routes/DashboardRoute";
import { ExampleRoute } from "./routes/ExampleRoute";
import { IPKGuidelineRoute } from "./routes/IPKGuidelineRoute";
import { LoaderDemoRoute } from "./routes/LoaderDemoRoute";
import { LoginRoute } from "./routes/LoginRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      DashboardRoute,
      ExampleRoute,
      IPKGuidelineRoute,
      BookingCalendarRoute,
      CratingSchedulerRoute,
      CalendarRoute, // ✅ still here, but already protected internally
      LoaderDemoRoute,
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      ...LoginRoute,
      { path: "*", element: <NotFoundPage /> },
    ],
  },
])


export default function App() {
  return (
    <>
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>

      {/* ✅ Mounted once globally — persists across all routes */}
      <Toaster richColors position="top-right" />
    </>
  )
}
