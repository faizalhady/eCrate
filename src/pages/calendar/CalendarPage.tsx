"use client";

import { ClientContainer } from "@/calendar/components/client-container";
import { CalendarProvider } from "@/calendar/contexts/calendar-context";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const users = [
    { id: "1", name: "Advantest" },
    { id: "2", name: "Amat" },
];
const vendors = [
    { id: "1", name: "Awanpack" },
    { id: "2", name: "Berjayapak" },
    { id: "3", name: "Enapak" },
    { id: "4", name: "Transpak" },
    { id: "5", name: "Nefab" },
];
const events = [
    {
        id: "1",
        title: "Confirmed Crating Zone A",
        description: "Assembly A",
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
        color: "blue",
        user: users[0],
        vendors: vendors[0]
    },
    {
        id: "2",
        title: "Booked For Crating Zone B",
        description: "Assembly B",
        startDate: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
        endDate: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
        color: "green",
        user: users[1],
        vendors: vendors[2]
    },
    {
        id: "3",
        title: "Booked For Crating Zone B",
        description: "Assembly B",
        startDate: new Date(Date.now() + 4 * 60 * 60 * 1000).toISOString(),
        endDate: new Date(Date.now() + 5 * 60 * 60 * 1000).toISOString(),
        color: "yellow",
        user: users[1],
        vendors: vendors[2]
    },
    {
        id: "4",
        title: "Booked For Crating Zone B",
        description: "Assembly B",
        startDate: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
        endDate: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
        color: "red",
        user: users[1],
        vendors: vendors[2]
    },
    {
        id: "5",
        title: "Booked For Crating Zone B",
        description: "Assembly B",
        startDate: new Date(Date.now() + 20 * 60 * 60 * 1000).toISOString(),
        endDate: new Date(Date.now() + 22 * 60 * 60 * 1000).toISOString(),
        color: "green",
        user: users[1],
        vendors: vendors[2]
    },
];

export default function CalendarPage() {
    const memoizedUsers = useMemo(() => users, []);
    const memoizedEvents = useMemo(() => events, []);
    const memoizedVendors = useMemo(() => vendors, []);
    const { pathname } = useLocation();

    const view =
        pathname.includes("day-view") ? "day"
            : pathname.includes("week-view") ? "week"
                : pathname.includes("year-view") ? "year"
                    : pathname.includes("agenda-view") ? "agenda"
                        : "month";

    return (
        <CalendarProvider users={memoizedUsers} events={memoizedEvents} vendors={memoizedVendors}>
            {/* Remove max-w-screen and add h-full */}
            <div className="flex h-full flex-col gap-4 p-4">
                <ClientContainer view={view} />
            </div>
        </CalendarProvider>
    );
}