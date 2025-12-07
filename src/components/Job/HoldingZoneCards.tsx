
interface HoldingZoneCardProps {
    id: string
    zoneName: string
    status: "idle" | "occupied"
    customerName?: string
    modelAssembly?: string
}

/* CARD */
function HoldingZoneCard({ zoneName, status, customerName, modelAssembly }: HoldingZoneCardProps) {

    if (status === "idle") {
        return (
            <div className="bg-card border border-border rounded-lg p-4 h-full flex flex-col">

                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-sm">{zoneName}</h3>

                    <div className="flex items-center gap-1.5 bg-gray-200 text-gray-700 px-2 py-1 rounded">
                        <div className="w-3 h-3 bg-gray-500 rounded-full" />
                        <span className="text-xs font-medium">Idle</span>
                    </div>
                </div>

                {/* Body */}
                <div className="flex-1 flex items-center justify-center text-muted-foreground text-sm">
                    Empty
                </div>
            </div>
        )
    }

    return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-sm h-full flex flex-col">

            {/* Header */}
            <div className="flex items-start justify-between mb-2">
                <h3 className="font-semibold text-sm">{zoneName}</h3>

                <div className="flex items-center gap-1.5 bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <span className="text-xs font-medium">Holding</span>
                </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col gap-2 text-xs">

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

        </div>
    )
}

/* MOCK */
const mockHolding: HoldingZoneCardProps[] = [
    { id: "H-01", zoneName: "Holding A1", status: "idle" },
    {
        id: "H-02",
        zoneName: "Holding A2",
        status: "occupied",
        customerName: "Acme Corp",
        modelAssembly: "Model X-500"
    },
    {
        id: "H-03",
        zoneName: "Holding B1",
        status: "occupied",
        customerName: "TechFlow",
        modelAssembly: "Model Z-200"
    },
    { id: "H-04", zoneName: "Holding B2", status: "idle" },
]

/* EXPORT */
export function HoldingZones() {
    return (
        <>
            {mockHolding.map(zone => (
                <HoldingZoneCard key={zone.id} {...zone} />
            ))}
        </>
    )
}
