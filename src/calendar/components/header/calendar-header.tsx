"use client";

import {
  CalendarRange,
  Columns,
  Grid2x2,
  Grid3x3,
  List,
  Plus,
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
              size="icon"
              variant={view === "day" ? "default" : "outline"}
              className="rounded-r-none [&_svg]:size-5"
            >
              {/* ✅ Use React Router Link with relative path */}
              <Link to="./day-view">
                <List strokeWidth={1.8} />
              </Link>
            </Button>

            {/* Week View */}
            <Button
              asChild
              aria-label="View by week"
              size="icon"
              variant={view === "week" ? "default" : "outline"}
              className="-ml-px rounded-none [&_svg]:size-5"
            >
              <Link to="./week-view">
                <Columns strokeWidth={1.8} />
              </Link>
            </Button>

            {/* Month View */}
            <Button
              asChild
              aria-label="View by month"
              size="icon"
              variant={view === "month" ? "default" : "outline"}
              className="-ml-px rounded-none [&_svg]:size-5"
            >
              <Link to="./month-view">
                <Grid2x2 strokeWidth={1.8} />
              </Link>
            </Button>

            {/* Year View */}
            <Button
              asChild
              aria-label="View by year"
              size="icon"
              variant={view === "year" ? "default" : "outline"}
              className="-ml-px rounded-none [&_svg]:size-5"
            >
              <Link to="./year-view">
                <Grid3x3 strokeWidth={1.8} />
              </Link>
            </Button>

            {/* Agenda View */}
            <Button
              asChild
              aria-label="View by agenda"
              size="icon"
              variant={view === "agenda" ? "default" : "outline"}
              className="-ml-px rounded-l-none [&_svg]:size-5"
            >
              <Link to="./agenda-view">
                <CalendarRange strokeWidth={1.8} />
              </Link>
            </Button>
          </div>

          <UserSelect />
        </div>

        {/* Add Event button */}
        <AddEventDialog>
          <Button className="w-full sm:w-auto">
            <Plus />
            Add Event
          </Button>
        </AddEventDialog>
      </div>
    </div>
  );
}
