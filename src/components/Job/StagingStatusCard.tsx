import { Badge } from "@/components/ui/badge";
import { Package, PhoneCall, Warehouse } from "lucide-react";

/* -------------------------------------------------
   Placeholder Staging Area Data
---------------------------------------------------*/
const stagingAreas = [
    { id: 1, name: "Staging Area A", status: "Occupied", jobId: "JOB-7841", operator: "Faiz Ahmad" },
    { id: 2, name: "Staging Area B", status: "Calling", jobId: "JOB-7850", operator: "Ali Hassan" },
    { id: 3, name: "Staging Area C", status: "Occupied", jobId: "JOB-7842", operator: "Siti Aminah" },
    { id: 4, name: "Staging Area D", status: "Empty", jobId: null, operator: null },
];

/* -------------------------------------------------
   Color Logic by Status
---------------------------------------------------*/
const getBoxColor = (status: string) => {
    switch (status) {
        case "Occupied":
            return "bg-green-50 border-green-200";
        case "Calling":
            return "bg-amber-50 border-amber-200";
        default:
            return "bg-gray-50 border-gray-200";
    }
};

const getIconColor = (status: string) => {
    switch (status) {
        case "Occupied":
            return "bg-green-500";
        case "Calling":
            return "bg-amber-500";
        default:
            return "bg-gray-300";
    }
};

const getBadgeStyle = (status: string) => {
    switch (status) {
        case "Occupied":
            return "bg-green-500 text-white";
        case "Calling":
            return "bg-amber-500 text-white";
        default:
            return "text-gray-500 border-gray-300";
    }
};

/* -------------------------------------------------
   Compact Component
---------------------------------------------------*/
export function StagingStatusCard() {
    return (
        <div className="w-full">
            <div className="flex flex-wrap gap-3 justify-between">
                {stagingAreas.map((area) => (
                    <div
                        key={area.id}
                        className={`flex flex-col justify-between rounded-md border p-3 w-full sm:basis-[48%] md:basis-[23%] ${getBoxColor(
                            area.status
                        )}`}
                    >
                        {/* Header Row: icon + name + badge */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center ${getIconColor(
                                        area.status
                                    )}`}
                                >
                                    {area.status === "Occupied" ? (
                                        <Package className="text-white w-4 h-4" />
                                    ) : area.status === "Calling" ? (
                                        <PhoneCall className="text-white w-4 h-4" />
                                    ) : (
                                        <Warehouse className="text-white w-4 h-4" />
                                    )}
                                </div>
                                <p className="font-semibold text-gray-800 text-sm">{area.name}</p>
                            </div>

                            <Badge
                                variant={area.status === "Empty" ? "outline" : "default"}
                                className={`text-[10px] px-2 py-0.5 ${getBadgeStyle(area.status)}`}
                            >
                                {area.status}
                            </Badge>
                        </div>

                        {/* Body: Job info */}
                        <div className="mt-2 text-xs leading-tight">
                            {area.status === "Occupied" || area.status === "Calling" ? (
                                <>
                                    <p className="text-gray-600">
                                        Job ID: <span className="font-medium">{area.jobId}</span>
                                    </p>
                                    <p className="text-gray-600">
                                        Operator: <span className="font-medium">{area.operator}</span>
                                    </p>
                                </>
                            ) : (
                                <p className="text-gray-500 italic">No job assigned</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
