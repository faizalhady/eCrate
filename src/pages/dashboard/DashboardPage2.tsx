import { CratingStatusCard } from "@/components/Job/CratingStatusCard";

export default function DashboardPage() {
  return (
    <div className="p-0 md:p-0 lg:p-0 space-y-2">
      {/* Top Section */}

      <div className="grid md:grid-cols-8 gap-2">
        {/* <StagingStatusCard /> */}
        <CratingStatusCard />
        {/* <JobQueueTable /> */}
      </div>
      <div className="grid md:grid-cols-1 gap-2">
        {/* 🧾 Table takes 2 of 3 columns */}
        {/* <div className="md:col-span-2">
          <JobQueueTable />
        </div> */}

        {/* 📦 Summary Card takes 1 column */}
        {/* <div className="md:col-span-1">
          <ScheduleCard />
        </div> */}
      </div>

      {/* Middle Section */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* <JobTrackingCard /> */}
      </div>
    </div>
  );
}
