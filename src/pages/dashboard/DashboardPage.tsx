import { CratingAreaCards } from "@/components/Area/CratingAreaCards"
import { JobSummaryCard } from "@/components/Job/JobSummaryCard"
import { ScheduleCard } from "@/components/Job/ScheduleCard"
import { JobQueueTable } from "@/components/table/JobQueueTable"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"crating" | "recent" | "something">("crating")

  return (
    <div className="h-full grid grid-cols-12 grid-rows-[auto_repeat(8,minmax(0,1fr))] gap-0 p-2 overflow-hidden bg-gray-50">
      {/* 🔹 Left Main Section */}
      {activeTab === "crating" ? (
        <>
          {/* 🔸 Buttons + Crating Cards */}
          <div className="col-span-9 row-span-6 row-start-1 rounded-md p-2 overflow-hidden">
            <div className="h-full w-full bg-white rounded-md p-3 flex flex-col gap-3 shadow-sm">
              {/* Toolbar */}
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {["crating", "recent", "something"].map((tab) => (
                    <Button
                      key={tab}
                      variant={activeTab === tab ? "default" : "secondary"}
                      size="sm"
                      onClick={() => setActiveTab(tab as any)}
                    >
                      {tab.charAt(0).toUpperCase() + tab.slice(1)}
                    </Button>
                  ))}
                </div>
                {/* <Button size="sm">Settings</Button> */}
              </div>

              {/* Crating Area Cards */}
              <div className="flex-1 overflow-y-auto">
                <CratingAreaCards />
              </div>
            </div>
          </div>

          {/* 🔸 Job Summary (bottom section) */}
          <div className="col-span-9 row-span-3 row-start-7 rounded-md p-2 overflow-hidden">
            <div className="h-full w-full bg-white rounded-md overflow-hidden shadow-sm">
              <JobSummaryCard />
            </div>
          </div>
        </>
      ) : activeTab === "recent" ? (
        <div className="col-span-9 row-span-9 row-start-1 rounded-md p-2 overflow-hidden">
          <div className="h-full w-full bg-white rounded-md shadow-sm flex flex-col p-3 gap-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {["crating", "recent", "something"].map((tab) => (
                  <Button
                    key={tab}
                    variant={activeTab === tab ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setActiveTab(tab as any)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </Button>
                ))}
              </div>
              {/* <Button size="sm">Settings</Button> */}
            </div>

            {/* Table */}
            <div className="flex-1">
              <JobQueueTable />
            </div>
          </div>
        </div>

      ) : (
        /* 🔹 something view — full left column (rows 1–9) */
        <div className="col-span-9 row-span-9 row-start-1 rounded-md p-2 overflow-hidden">
          <div className="h-full w-full bg-white rounded-md shadow-sm flex flex-col p-3 gap-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {["crating", "recent", "something"].map((tab) => (
                  <Button
                    key={tab}
                    variant={activeTab === tab ? "default" : "secondary"}
                    size="sm"
                    onClick={() => setActiveTab(tab as any)}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </Button>
                ))}
              </div>
              {/* <Button size="sm">Settings</Button> */}
            </div>

            {/* Placeholder */}
            <div className="flex-1 flex items-center justify-center text-gray-700 font-medium">
              Something View
            </div>
          </div>
        </div>
      )}

      {/* 🟣 Sidebar (rows 1–9, col 10–12) */}
      <div className="col-span-3 row-span-9 col-start-10 row-start-1 rounded-md p-2 overflow-hidden">
        <div className="h-full w-full overflow-y-auto bg-white rounded-md shadow-sm">
          <ScheduleCard />
        </div>
      </div>
    </div>
  )
}
