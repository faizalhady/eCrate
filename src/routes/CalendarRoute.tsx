import { lazy } from "react"
import type { RouteObject } from "react-router-dom"

const CalendarPage = lazy(() => import("@/pages/calendar/CalendarPage"))

// 🧩 Keep folder structure intact
const DayView = lazy(() => import("@/calendar/components/week-and-day-view/calendar-day-view"))
const WeekView = lazy(() => import("@/calendar/components/week-and-day-view/calendar-week-view"))
const MonthView = lazy(() => import("@/calendar/components/month-view/calendar-month-view"))
const YearView = lazy(() => import("@/calendar/components/year-view/calendar-year-view"))
const AgendaView = lazy(() => import("@/calendar/components/week-and-day-view/calendar-week-view"))
// (temporary placeholder for agenda)

export const CalendarRoute: RouteObject = {
    path: "calendar",
    element: <CalendarPage />,
    children: [
        { index: true, element: <MonthView singleDayEvents={[]} multiDayEvents={[]} /> },
        { path: "day-view", element: <DayView singleDayEvents={[]} multiDayEvents={[]} /> },
        { path: "week-view", element: <WeekView singleDayEvents={[]} multiDayEvents={[]} /> },
        { path: "month-view", element: <MonthView singleDayEvents={[]} multiDayEvents={[]} /> },
        { path: "year-view", element: <YearView allEvents={[]} /> },
        { path: "agenda-view", element: <AgendaView singleDayEvents={[]} multiDayEvents={[]} /> },
    ],
}
