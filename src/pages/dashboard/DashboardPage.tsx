import { CratingZones } from "@/components/Job/CratingZones"
import { HoldingZones } from "@/components/Job/HoldingZone"
import { ScheduleCard } from "@/components/Job/ScheduleCard"
import { JobQueueTable } from "@/components/table/JobQueueTable"
import { Button } from "@/components/ui/button"
import { useSocketTest } from "@/hooks/useSocketTest"
import { useAuthStore } from "@/store/authStore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"zones" | "recent">("zones")
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const user = useAuthStore((state) => state.user);

  const navigate = useNavigate()
  useSocketTest();

  return (
    <div className="h-full grid grid-cols-12 grid-rows-[auto_repeat(8,minmax(0,1fr))] gap-0 p-2 overflow-hidden bg-gray-50">
      {/* 🔹 Left Main Section */}
      {activeTab === "zones" ? (

        <>
          {/* 🔸 Buttons + Crating Cards */}
          <div className="col-span-10 row-span-9 row-start-1 p-2 overflow-hidden">
            {/* Parent container controls height distribution */}
            <div className="h-full flex flex-col gap-4 min-h-0 overflow-hidden">

              {/* ===================== CRATING (larger portion) ===================== */}
              <div className="flex-[7] min-h-0 bg-white rounded-lg shadow-sm border p-4 flex flex-col">

                {/* Header with tabs + login */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex gap-2">
                    {["zones", "recent"].map((tab) => (
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
                  {!isAuthenticated && (
                    <Button onClick={() => navigate("/login")}>Login</Button>
                  )}
                </div>

                <h2 className="text-xl font-semibold tracking-wide mb-3">CRATING</h2>

                {/* Content grid */}
                <div className="flex-1 min-h-0 overflow-auto grid grid-cols-2 xl:grid-cols-3 gap-3">
                  <CratingZones />
                </div>
              </div>


              {/* ===================== HOLDING (smaller portion) ===================== */}
              <div className="flex-[3] min-h-0 bg-white rounded-lg shadow-sm border p-4 flex flex-col">

                <h2 className="text-xl font-semibold tracking-wide mb-3">HOLDING</h2>

                {/* Content grid */}
                <div className="flex-1 min-h-0 overflow-auto grid grid-cols-2 xl:grid-cols-4 gap-3">
                  <HoldingZones />
                </div>
              </div>

            </div>
          </div>


          {/* 🔸 Job Summary (bottom section) */}
          {/* <div className="col-span-9 row-span-3 row-start-7 rounded-md p-2 overflow-hidden">
            <div className="h-full w-full bg-white rounded-md overflow-hidden shadow-sm">
              <JobSummaryCard />
            </div>
          </div> */}
        </>
      ) : activeTab === "recent" ? (
        <div className="col-span-10 row-span-9 row-start-1 rounded-md p-2 overflow-hidden">
          <div className="h-full w-full bg-white rounded-md shadow-sm flex flex-col p-3 gap-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {["zones", "recent"].map((tab) => (

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
        <div className="col-span-9 row-span-9 row-start-1 row-end-5 rounded-md p-2 overflow-hidden">
          <div className="h-full w-full bg-white rounded-md shadow-sm flex flex-col p-3 gap-3">
            {/* Toolbar */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2">
                {["zones", "recent"].map((tab) => (

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
            </div>
          </div>
        </div>
      )
      }

      {/* 🟣 Sidebar (rows 1–9, col 10–12) */}
      <div className="col-span-2 row-span-9 col-start-11 row-start-1 rounded-md p-2 overflow-hidden">
        <div className="h-full w-full overflow-y-auto bg-white rounded-md shadow-sm">
          <ScheduleCard />
        </div>
      </div>
    </div >
  )
}
