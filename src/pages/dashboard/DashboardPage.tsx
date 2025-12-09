import { CratingZones } from "@/components/Job/CratingZoneCards"
import { HoldingZones } from "@/components/Job/HoldingZoneCards"
import { ScheduleCard } from "@/components/Job/ScheduleCard"
import { JobQueueTable } from "@/components/table/JobQueueTable"
import { Button } from "@/components/ui/button"
import { useSocketTest } from "@/hooks/useSocketTest"
import { useAuthStore } from "@/store/authStore"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<"zones" | "recent">("zones")
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated)
  const navigate = useNavigate()

  useSocketTest()

  return (
    <div className="h-full grid grid-cols-12 grid-rows-[auto_repeat(8,minmax(0,1fr))] gap-0 p-2 overflow-hidden">

      {activeTab === "zones" ? (

        <>
          {/* LEFT PANE */}
          <div className="col-span-10 row-span-9 row-start-1 p-2 overflow-hidden">

            {/* SINGLE WRAPPER FOR BOTH CRATING + HOLDING */}
            <div className="h-full bg-white border rounded-lg shadow-sm p-4 flex flex-col gap-6 overflow-auto">

              {/* ================= HEADER ================= */}
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

                {!isAuthenticated && (
                  <Button onClick={() => navigate("/login")}>Login</Button>
                )}
              </div>

              <div className="h-full flex flex-col gap-6 min-h-0">

                {/* CRATING - takes 4 out of 5 rows */}
                <div className="flex-[4] min-h-0 grid grid-cols-2 xl:grid-cols-3 gap-6 auto-rows-fr">
                  <CratingZones />
                </div>

                {/* HOLDING - takes 1 out of 5 rows */}
                <div className="flex-[1] min-h-0 grid grid-cols-2 xl:grid-cols-4 gap-6 auto-rows-fr">
                  <HoldingZones />
                </div>

              </div>


            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="col-span-2 row-span-9 col-start-11 row-start-1 rounded-md p-2 overflow-hidden">
            <div className="h-full w-full overflow-y-auto bg-white rounded-md shadow-sm">
              <ScheduleCard />
            </div>
          </div>
        </>

      ) : (

        /* RECENT TAB LAYOUT */
        <div className="col-span-12 row-span-9 row-start-1 rounded-md p-2 overflow-hidden">
          <div className="h-full w-full bg-white rounded-md shadow-sm flex flex-col p-3 gap-3">

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
            </div>

            <div className="flex-1">
              <JobQueueTable />
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
