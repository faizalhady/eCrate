import { Toaster } from "@/components/ui/sonner";
import AppLayout from "@/layouts/AppLayout";
import AuthLayout from "@/layouts/AuthLayout";
import { Suspense } from "react";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";

// Routes
import NotFoundPage from "@/pages/error/NotFoundPage";
import { CalendarRoute } from "./routes/CalendarRoute";
import { DashboardRoute } from "./routes/DashboardRoute";
import { LoginRoute } from "./routes/LoginRoute";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        DashboardRoute,
        CalendarRoute,
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        ...LoginRoute,
        { path: "*", element: <NotFoundPage /> },
      ],
    },
  ],
  {
    basename: "/CPS",   // <-- THIS IS THE CORRECT PLACE
  }
);


export default function App() {
  return (
    <>
      {/* ⬅️ THIS is what makes all URLs automatically start with /CPS */}
      <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>

      <Toaster richColors position="top-right" />
    </>
  );
}
