import { DayPilot, DayPilotCalendar } from "@daypilot/daypilot-lite-react";
import { useEffect, useRef, useState } from "react";

interface CalendarEvent {
    id: string;
    start: string;
    end: string;
    text: string;
}

interface TimeRangeSelectedArgs {
    start: DayPilot.Date;
    end: DayPilot.Date;
}

interface EventClickArgs {
    e: DayPilot.Event;
}

export default function CalendarPage() {
    // ✅ Correct type: DayPilotCalendar | null
    const calendarRef = useRef<DayPilotCalendar | null>(null);
    const [events, setEvents] = useState<CalendarEvent[]>([]);
    const [startDate] = useState(DayPilot.Date.today());

    const handleTimeRangeSelected = async (args: TimeRangeSelectedArgs) => {
        // Access the underlying DayPilot control
        const dp = calendarRef.current?.control;
        const text = window.prompt("New event text:", "New event");
        dp?.clearSelection();
        if (!text) return;

        const newEvent: CalendarEvent = {
            id: DayPilot.guid(),
            start: args.start.toString(),
            end: args.end.toString(),
            text,
        };
        setEvents((prev) => [...prev, newEvent]);
    };

    const handleEventClick = (args: EventClickArgs) => {
        alert(`Clicked event: ${args.e.text()}`);
    };

    useEffect(() => {
        const loadEvents = async () => {
            try {
                const resp = await fetch("/api/calendar/events");
                if (!resp.ok) throw new Error("Failed to load events");
                const data: CalendarEvent[] = await resp.json();
                setEvents(data);
            } catch (err) {
                console.error(err);
            }
        };
        loadEvents();
    }, []);

    return (
        <div className="p-4 space-y-2">
            <h1 className="text-2xl font-bold">Calendar Page</h1>

            {/* ✅ style on wrapper, not on component */}
            <div style={{ height: "900px", borderRadius: "8px" }}>
                <DayPilotCalendar
                    ref={calendarRef}
                    viewType="Week"
                    startDate={startDate}
                    events={events}
                    onTimeRangeSelected={handleTimeRangeSelected}
                    onEventClick={handleEventClick}
                />
            </div>
        </div>
    );
}
