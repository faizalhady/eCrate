"use client";

import { ChangeBadgeVariantInput } from "@/calendar/components/change-badge-variant-input";
import { ClientContainer } from "@/calendar/components/client-container";
import { CalendarProvider } from "@/calendar/contexts/calendar-context";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const users = [
    { id: "1", name: "Faiz" },
    { id: "2", name: "Hafizie" },
];
const events = [
    {
        id: "1",
        title: "Packaging Review",
        description: "Weekly packaging meeting",
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
        color: "blue",
        user: users[0],
    },
    {
        id: "2",
        title: "Crating Zone Maintenance",
        description: "Check equipment availability",
        startDate: new Date(Date.now() + 2 * 60 * 60 * 1000).toISOString(),
        endDate: new Date(Date.now() + 3 * 60 * 60 * 1000).toISOString(),
        color: "green",
        user: users[1],
    },
];

export default function CalendarPage() {
    const memoizedUsers = useMemo(() => users, []);
    const memoizedEvents = useMemo(() => events, []);
    const { pathname } = useLocation();

    // 🔹 Determine which view based on current URL
    const view =
        pathname.includes("day-view")
            ? "day"
            : pathname.includes("week-view")
                ? "week"
                : pathname.includes("year-view")
                    ? "year"
                    : pathname.includes("agenda-view")
                        ? "agenda"
                        : "month";

    return (
        <CalendarProvider users={memoizedUsers} events={memoizedEvents}>
            <div className="mx-auto flex max-w-screen-2xl flex-col gap-4 p-4">
                <ClientContainer view={view} />
                <ChangeBadgeVariantInput />
            </div>
        </CalendarProvider>
    );
}
