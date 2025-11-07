import { JobTrackingCard } from "@/components/Job/JobTrackingCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { CheckCircle2, Eye, Package, Truck, Warehouse } from "lucide-react";
import { useState } from "react";

/* -------------------------------------------------
   Placeholder Job Queue Data
---------------------------------------------------*/
const jobQueue = [
    { id: "#7901", type: "Crating", area: "Crating Area A", date: "7 Nov 2025, 10:00 AM", status: "Calling", operator: "Bejayapak", workcell: "Advantest" },
    { id: "#7902", type: "Crating", area: "Crating Area B", date: "7 Nov 2025, 10:30 AM", status: "Crating", operator: "Bejayapak", workcell: "Amat" },
    { id: "#7902", type: "Crating", area: "Crating Area B", date: "7 Nov 2025, 10:30 AM", status: "Crating", operator: "Bejayapak", workcell: "Amat" },
    { id: "#7902", type: "Crating", area: "Crating Area B", date: "7 Nov 2025, 10:30 AM", status: "Crating", operator: "Bejayapak", workcell: "Amat" },
    { id: "#7902", type: "Crating", area: "Crating Area B", date: "7 Nov 2025, 10:30 AM", status: "Crating", operator: "Bejayapak", workcell: "Amat" },
    { id: "#7902", type: "Crating", area: "Crating Area B", date: "7 Nov 2025, 10:30 AM", status: "Crating", operator: "Bejayapak", workcell: "Amat" },
    { id: "#7902", type: "Crating", area: "Crating Area B", date: "7 Nov 2025, 10:30 AM", status: "Crating", operator: "Bejayapak", workcell: "Amat" },
    { id: "#7902", type: "Crating", area: "Crating Area B", date: "7 Nov 2025, 10:30 AM", status: "Crating", operator: "Bejayapak", workcell: "Amat" },
    { id: "#7903", type: "Crating", area: "Crating Area C", date: "7 Nov 2025, 11:00 AM", status: "Done", operator: "Bejayapak", workcell: "Cohu" },
    { id: "#7841", type: "Staging", area: "Staging Area A", date: "7 Nov 2025, 09:45 AM", status: "Calling", operator: "Ahmad Rafi", workcell: "Workcell" },
    { id: "#7842", type: "Staging", area: "Staging Area B", date: "7 Nov 2025, 10:10 AM", status: "Occupied", operator: "Amin Zakaria", workcell: "Workcell" },
    { id: "#8001", type: "Shipping", area: "Dock 01", date: "7 Nov 2025, 12:15 PM", status: "Shipped", operator: "Siti Aminah", workcell: "Workcell" },
];

/* -------------------------------------------------
   Badge Colors
---------------------------------------------------*/
const getBadgeStyle = (status: string) => {
    switch (status) {
        case "Calling":
            return "bg-amber-100 text-amber-700 border border-amber-200";
        case "Crating":
            return "bg-blue-100 text-blue-700 border border-blue-200";
        case "Done":
            return "bg-green-100 text-green-700 border border-green-200";
        case "Occupied":
            return "bg-green-100 text-green-700 border border-green-200";
        case "Shipped":
            return "bg-gray-100 text-gray-700 border border-gray-200";
        default:
            return "bg-gray-50 text-gray-500 border border-gray-200";
    }
};

/* -------------------------------------------------
   Type Icons
---------------------------------------------------*/
const getTypeIcon = (type: string) => {
    switch (type) {
        case "Crating":
            return <Package className="w-4 h-4 text-blue-500" />;
        case "Staging":
            return <Warehouse className="w-4 h-4 text-green-500" />;
        case "Shipping":
            return <Truck className="w-4 h-4 text-gray-500" />;
        default:
            return <CheckCircle2 className="w-4 h-4 text-gray-400" />;
    }
};

/* -------------------------------------------------
   Component
---------------------------------------------------*/
export function JobQueueTable() {
    const [open, setOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<any>(null);

    const handleView = (job: any) => {
        setSelectedJob(job);
        setOpen(true);
    };

    return (
        <>
            {/* Table */}
            <Card className="w-full shadow-md">
                <CardHeader className="pb-0">
                    <CardTitle className="text-lg font-semibold text-gray-800">
                        Recent Activities
                    </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                    <table className="w-full text-[13px] border-separate border-spacing-0">
                        <thead>
                            <tr className="bg-gray-50 text-gray-700 border-b text-xs">
                                <th className="text-left px-3 py-2 font-medium">Job ID</th>
                                <th className="text-left px-3 py-2 font-medium">Type</th>
                                <th className="text-left px-3 py-2 font-medium">Area</th>
                                <th className="text-left px-3 py-2 font-medium">Date</th>
                                <th className="text-left px-3 py-2 font-medium">Vendor</th>
                                <th className="text-left px-3 py-2 font-medium">Workcell</th>
                                <th className="text-left px-3 py-2 font-medium">Status</th>
                                <th className="text-center px-3 py-2 font-medium">Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {jobQueue.map((job, index) => (
                                <tr
                                    key={job.id}
                                    className={`border-t ${index % 2 === 0 ? "bg-white" : "bg-gray-50"} hover:bg-gray-100 transition`}
                                >
                                    <td className="px-3 py-2 font-medium text-gray-800">{job.id}</td>

                                    <td className="px-3 py-2 text-gray-700">
                                        <div className="flex items-center gap-2">
                                            {getTypeIcon(job.type)}
                                            {job.type}
                                        </div>
                                    </td>

                                    <td className="px-3 py-2 text-gray-700">{job.area}</td>
                                    <td className="px-3 py-2 text-gray-600">{job.date}</td>
                                    <td className="px-3 py-2 text-gray-700">{job.operator}</td>
                                    <td className="px-3 py-2 text-gray-700">{job.workcell}</td>

                                    <td className="px-3 py-2">
                                        <Badge
                                            className={`text-[10px] font-medium px-2 py-0.5 rounded-md ${getBadgeStyle(job.status)}`}
                                        >
                                            {job.status}
                                        </Badge>
                                    </td>

                                    {/* ✅ Action column */}
                                    <td className="px-3 py-2 text-center">
                                        <Button
                                            size="icon"
                                            variant="outline"
                                            className="h-7 w-7"
                                            onClick={() => handleView(job)}
                                        >
                                            <Eye size={14} />
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardContent>
            </Card>

            {/* Modal (Dialog) */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-2xl p-0 overflow-y-auto">
                    <DialogHeader className="p-4 border-b">
                        <DialogTitle>Job Tracking Details - {selectedJob?.id}</DialogTitle>
                    </DialogHeader>
                    <div className="p-4">
                        <JobTrackingCard />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
}
