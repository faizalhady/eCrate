import { format, getDay, parse, startOfWeek } from "date-fns";
import { enUS } from "date-fns/locale";
import { useState } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { events as initialEvents } from "./sampleEvents";

/* -------------------------------------------------
   Locale + Localizer setup
---------------------------------------------------*/
const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
});

/* -------------------------------------------------
   Main Component
---------------------------------------------------*/
export default function BookingCalendarPage() {
    const [events] = useState(initialEvents);

    return (
        <div className="p-4">
            <h2 className="text-lg font-bold mb-4">Booking Calendar </h2>

            <div className="rounded-lg border border-gray-200 shadow-sm bg-white p-4">
                <Calendar
                    localizer={localizer}
                    events={events}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    popup
                />
            </div>
        </div>
    );
}
