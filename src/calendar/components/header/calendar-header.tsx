"use client";

import {
  Plus
} from "lucide-react";
import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { AddEventDialog } from "@/calendar/components/dialogs/add-event-dialog";
import { DateNavigator } from "@/calendar/components/header/date-navigator";
import { TodayButton } from "@/calendar/components/header/today-button";
import { UserSelect } from "@/calendar/components/header/user-select";

import type { IEvent } from "@/calendar/interfaces";
import type { TCalendarView } from "@/calendar/types";

interface IProps {
  view: TCalendarView;
  events: IEvent[];
}

export function CalendarHeader({ view, events }: IProps) {
  return (
    <div className="flex flex-col gap-4 border-b p-4 lg:flex-row lg:items-center lg:justify-between">
      {/* Left side controls */}
      <div className="flex items-center gap-3">
        <TodayButton />
        <DateNavigator view={view} events={events} />
      </div>

      {/* Right side controls */}
      <div className="flex flex-col items-center gap-1.5 sm:flex-row sm:justify-between">
        <div className="flex w-full items-center gap-1.5">
          <div className="inline-flex first:rounded-r-none last:rounded-l-none [&:not(:first-child):not(:last-child)]:rounded-none">

            {/* Day View */}
            <Button
              asChild
              aria-label="View by day"
              size="sm"
              variant={view === "day" ? "default" : "outline"}
              className="rounded-r-none px-3"
            >
              <Link to="./day-view">Day</Link>
            </Button>

            {/* Week View */}
            <Button
              asChild
              aria-label="View by week"
              size="sm"
              variant={view === "week" ? "default" : "outline"}
              className="-ml-px rounded-none px-3"
            >
              <Link to="./week-view">Week</Link>
            </Button>

            {/* Month View */}
            <Button
              asChild
              aria-label="View by month"
              size="sm"
              variant={view === "month" ? "default" : "outline"}
              className="-ml-px rounded-none px-3"
            >
              <Link to="./month-view">Month</Link>
            </Button>

            {/* Year View */}
            <Button
              asChild
              aria-label="View by year"
              size="sm"
              variant={view === "year" ? "default" : "outline"}
              className="-ml-px rounded-none px-3"
            >
              <Link to="./year-view">Year</Link>
            </Button>

            {/* Agenda View */}
            <Button
              asChild
              aria-label="View by agenda"
              size="sm"
              variant={view === "agenda" ? "default" : "outline"}
              className="-ml-px rounded-l-none px-3"
            >
              <Link to="./agenda-view">Agenda</Link>
            </Button>

          </div>


          <UserSelect />
        </div>

        {/* Add Event button */}
        <AddEventDialog>
          <Button className="w-full sm:w-auto">
            <Plus />
            Create Booking
          </Button>
        </AddEventDialog>
      </div>
    </div>
  );
}
