import { CratingStatusCard } from "@/components/Job/CratingStatusCard";
import { JobSummaryCard } from "@/components/Job/JobSummaryCard";
import { StagingStatusCard } from "@/components/Job/StagingStatusCard";
import { JobQueueTable } from "@/components/table/JobQueueTable";

export default function DashboardPage() {
  return (
    <div className="p-2 md:p-2 lg:p-2 space-y-2">
      {/* Top Section */}
      <div className="grid md:grid-cols-1 gap-2">
        <StagingStatusCard />
        <CratingStatusCard />
        <JobQueueTable />
      </div>

      {/* Middle Section */}
      <div className="grid md:grid-cols-2 gap-6">
        <JobSummaryCard />
        {/* <JobTrackingCard /> */}
      </div>
    </div>
  );
}
