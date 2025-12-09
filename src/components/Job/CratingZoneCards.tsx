import { CheckCircle, Clock, Package2 } from "lucide-react"

/* TYPES */
interface CratingZoneCardProps {
    id: string
    zoneName: string
    status: "idle" | "occupied" | "completed"
    customerName?: string
    modelAssembly?: string
    targetStartTime?: string
    targetCompleteTime?: string
}

/* CARD */
function CratingZoneCard({
    zoneName,
    status,
    customerName,
    modelAssembly,
    targetStartTime,
    targetCompleteTime
}: CratingZoneCardProps) {

    // Default progress
    const progress = status === "completed" ? 100 : 70

    /* ---------- IDLE CARD ---------- */
    if (status === "idle") {
        return (
            <div className="bg-card border border-border rounded-lg p-4 h-full flex flex-col">

                {/* Header row + badge */}
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm">{zoneName}</h3>

                    <div className="flex items-center gap-1.5 bg-gray-200 text-gray-700 px-2 py-1 rounded">
                        <div className="w-3 h-3 bg-gray-500 rounded-full" />
                        <span className="text-xs font-medium">Idle</span>
                    </div>
                </div>

                {/* Center text */}
                <div className="flex-1 flex items-center justify-center">
                    <p className="text-muted-foreground text-sm">No active job</p>
                </div>
            </div>
        )
    }


    /* ---------- BADGE ---------- */
    const Badge = () => {
        if (status === "completed") {
            return (
                <div className="flex items-center gap-1.5 bg-green-100 border border-green-300 px-2 py-1 rounded">
                    <CheckCircle className="w-3.5 h-3.5 text-green-700" />
                    <span className="text-xs font-medium text-green-700">Completed</span>
                </div>
            )
        }

        return (
            <div className="flex items-center gap-1.5 bg-green-50 px-2 py-1 rounded">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="text-xs font-medium text-green-700">Active</span>
            </div>
        )
    }

    /* ---------- MAIN CARD ---------- */
    return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-sm h-full flex flex-col min-h-0">

            {/* Header */}
            <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-semibold text-sm">{zoneName}</h3>
                <Badge />
            </div>

            {/* Content must shrink */}
            <div className="flex-1 flex flex-col gap-3 min-h-0">

                {/* Job details */}
                <div className="text-xs space-y-1 min-h-0">
                    {customerName && (
                        <div className="flex gap-2">
                            <span className="text-muted-foreground min-w-fit">Vendor:</span>
                            <span className="font-medium truncate">{customerName}</span>
                        </div>
                    )}
                    {customerName && (
                        <div className="flex gap-2">
                            <span className="text-muted-foreground min-w-fit">Customer:</span>
                            <span className="font-medium truncate">{customerName}</span>
                        </div>
                    )}
                    {modelAssembly && (
                        <div className="flex gap-2">
                            <span className="text-muted-foreground min-w-fit">Model:</span>
                            <span className="font-medium truncate">{modelAssembly}</span>
                        </div>
                    )}
                </div>

                {/* Progress */}
                <div className="flex items-center gap-3 min-h-0">
                    <div className="flex-1 h-3 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className={`h-full transition-all ${status === "completed" ? "bg-green-600" : "bg-black"
                                }`}
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                    <span className="text-sm font-semibold">{progress}%</span>
                </div>

                {/* Time */}
                <div className="grid grid-cols-2 gap-4 min-h-0">
                    <div className="flex items-start gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-muted-foreground" />
                        <div>
                            <p className="text-xs text-muted-foreground">Start</p>
                            <p className="font-medium">{targetStartTime}</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-1.5">
                        <Package2 className="w-3.5 h-3.5 text-muted-foreground" />
                        <div>
                            <p className="text-xs text-muted-foreground">Complete</p>
                            <p className="font-medium">{targetCompleteTime}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/* MOCK DATA */
const mockCratingZones: CratingZoneCardProps[] = [
    { id: "ZONE-01", zoneName: "Crating Zone A", status: "idle" },

    {
        id: "ZONE-02",
        zoneName: "Crating Zone B",
        status: "occupied",
        customerName: "Acme Corp",
        modelAssembly: "Model X-500",
        targetStartTime: "10:30 AM",
        targetCompleteTime: "-- : --",
    },

    {
        id: "ZONE-03",
        zoneName: "Crating Zone C",
        status: "completed",     // ⭐⭐ ← THIS ONE IS COMPLETED
        customerName: "TechFlow Inc",
        modelAssembly: "Model Z-200",
        targetStartTime: "11:00 AM",
        targetCompleteTime: "1:00 PM",
    },

    { id: "ZONE-04", zoneName: "Crating Zone D", status: "idle" },

    {
        id: "ZONE-05",
        zoneName: "Crating Zone E",
        status: "occupied",
        customerName: "Global Industries",
        modelAssembly: "Model Y-150",
        targetStartTime: "9:15 AM",
        targetCompleteTime: "-- : --",
    },

    { id: "ZONE-06", zoneName: "Crating Zone F", status: "idle" },
]

/* EXPORT WRAPPER */
export function CratingZones() {
    return (
        <>
            {mockCratingZones.map(zone => (
                <CratingZoneCard key={zone.id} {...zone} />
            ))}
        </>
    )
}
