import { EventDetailsDialog } from "@/calendar/components/dialogs/event-details-dialog";
import { AlertCircle, CheckCircle, Clock, Hammer, Package } from "lucide-react";
import { useEffect, useState } from "react";

type ZoneStatus = "idle" | "running" | "occupied" | "maintenance" | "completed";

interface CratingZone {
    id: string;
    name: string;
    status: ZoneStatus;
    currentOrder: string | null;
    operator: string | null;
    startTime: string | null;
    estimatedCompletion: string | null;
    progress: number;
    itemsCompleted: number;
    itemsTotal: number;
    productName: string | null;
}

const initialZones: CratingZone[] = [
    {
        id: "1",
        name: "Zone A",
        status: "running",
        currentOrder: "ORD-2024-1045",
        operator: "ADVANTEST",
        startTime: "08:30 AM",
        estimatedCompletion: "11:45 AM",
        progress: 65,
        itemsCompleted: 32,
        itemsTotal: 50,
        productName: "Custom Steel Frame",
    },
    {
        id: "2",
        name: "Zone B",
        status: "running",
        currentOrder: "ORD-2024-1044",
        operator: "AMAT",
        startTime: "09:15 AM",
        estimatedCompletion: "12:30 PM",
        progress: 40,
        itemsCompleted: 40,
        itemsTotal: 100,
        productName: "Aluminum Components",
    },
    {
        id: "3",
        name: "Zone C",
        status: "idle",
        currentOrder: null,
        operator: null,
        startTime: null,
        estimatedCompletion: null,
        progress: 0,
        itemsCompleted: 0,
        itemsTotal: 0,
        productName: null,
    },
    {
        id: "4",
        name: "Zone D",
        status: "completed",
        currentOrder: "ORD-2024-1043",
        operator: "AMAT",
        startTime: "07:00 AM",
        estimatedCompletion: "10:30 AM",
        progress: 100,
        itemsCompleted: 200,
        itemsTotal: 200,
        productName: "Plastic Molding Parts",
    },
    {
        id: "5",
        name: "Zone E",
        status: "idle",
        currentOrder: null,
        operator: null,
        startTime: null,
        estimatedCompletion: null,
        progress: 0,
        itemsCompleted: 0,
        itemsTotal: 0,
        productName: null,
    },
    {
        id: "6",
        name: "Zone F",
        status: "completed",
        currentOrder: "ORD-2024-1043",
        operator: "ADVANTEST",
        startTime: "07:00 AM",
        estimatedCompletion: "10:30 AM",
        progress: 100,
        itemsCompleted: 200,
        itemsTotal: 200,
        productName: "Plastic Molding Parts",
    },
];

export function CratingZones() {
    const [zones, setZones] = useState<CratingZone[]>(initialZones);
    const [currentTime, setCurrentTime] = useState(new Date());

    // Update current time every second
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // Simulate progress updates for running zones
    useEffect(() => {
        const progressTimer = setInterval(() => {
            setZones(prevZones =>
                prevZones.map(zone => {
                    if (zone.status === "running" && zone.progress < 100) {
                        const newProgress = Math.min(zone.progress + 1, 100);
                        const newItemsCompleted = Math.floor((newProgress / 100) * zone.itemsTotal);
                        return {
                            ...zone,
                            progress: newProgress,
                            itemsCompleted: newItemsCompleted,
                            status: newProgress === 100 ? "completed" : "running",
                        };
                    }
                    return zone;
                })
            );
        }, 3000);
        return () => clearInterval(progressTimer);
    }, []);

    const getStatusConfig = (status: ZoneStatus) => {
        switch (status) {
            case "idle":
                return {
                    color: "bg-gray-100 text-gray-800 border-gray-300",
                    bgColor: "bg-gray-50",
                    icon: Clock,
                    iconColor: "text-gray-500",
                    label: "Idle",
                    pulse: false,
                };
            case "running":
                return {
                    color: "bg-green-100 text-green-800 border-green-300",
                    bgColor: "bg-green-50",
                    icon: Hammer,
                    iconColor: "text-green-600",
                    label: "Running",
                    pulse: true,
                };
            case "occupied":
                return {
                    color: "bg-blue-100 text-blue-800 border-blue-300",
                    bgColor: "bg-blue-50",
                    icon: Package,
                    iconColor: "text-blue-600",
                    label: "Occupied",
                    pulse: true,
                };
            case "maintenance":
                return {
                    color: "bg-yellow-100 text-yellow-800 border-yellow-300",
                    bgColor: "bg-yellow-50",
                    icon: AlertCircle,
                    iconColor: "text-yellow-600",
                    label: "Maintenance",
                    pulse: false,
                };
            case "completed":
                return {
                    color: "bg-purple-100 text-purple-800 border-purple-300",
                    bgColor: "bg-purple-50",
                    icon: CheckCircle,
                    iconColor: "text-purple-600",
                    label: "Completed",
                    pulse: false,
                };
            default:
                return {
                    color: "bg-gray-100 text-gray-800 border-gray-300",
                    bgColor: "bg-gray-50",
                    icon: Clock,
                    iconColor: "text-gray-500",
                    label: "Unknown",
                    pulse: false,
                };
        }
    };

    return (
        <>
            {zones.map((zone) => {
                const statusConfig = getStatusConfig(zone.status);
                const StatusIcon = statusConfig.icon;

                // Same mock data for all zones (only id is made unique)
                const mockEvent: IEvent = {
                    id: `mock-${zone.id}`,
                    title: "Crating Booking (Mock)",
                    description: "This is a mock booking linked to this zone card.",
                    color: "blue",
                    startDate: new Date().toISOString(),
                    endDate: new Date(Date.now() + 60 * 60 * 1000).toISOString(),
                    user: {
                        id: "mock-user",
                        name: "Crating Operator",
                        picturePath: "",
                    },
                };

                return (
                    <EventDetailsDialog key={zone.id} event={mockEvent}>
                        <div
                            className={`
              cursor-pointer
              border ${statusConfig.bgColor}
              rounded-md h-full min-h-0
              flex flex-col p-2
            `}
                        >
                            {/* HEADER */}
                            <div className="flex items-center justify-between text-[10px] mb-1.5">
                                <div className="flex items-center gap-1 min-w-0">
                                    <div className="h-3.5 w-3.5 rounded-full border flex items-center justify-center bg-white">
                                        <StatusIcon className={`h-2 w-2 ${statusConfig.iconColor}`} />
                                    </div>
                                    <span className="font-semibold truncate">{zone.name}</span>
                                </div>

                                <span
                                    className={`
                  px-1 py-[1px] rounded-full 
                  text-[8px] font-medium border
                  ${statusConfig.color}
                `}
                                >
                                    {statusConfig.label}
                                </span>
                            </div>

                            {/* BODY */}
                            <div className="flex-1 flex flex-col items-center justify-center gap-2 min-h-0 text-[10px]">

                                {/* IDLE ZONES */}
                                {zone.status === "idle" ? (
                                    <>
                                        <Clock className="h-5 w-5 text-gray-400" />
                                        <p className="text-gray-500">Available</p>
                                    </>
                                ) : (
                                    <>
                                        {/* MAIN ICON (based on status) */}
                                        <StatusIcon className={`h-10 w-10 ${statusConfig.iconColor}`} />

                                        {/* OPERATOR NAME */}
                                        {zone.operator && (
                                            <p className="text-[13px] font-bold text-gray-800 text-center leading-tight">
                                                {zone.operator}
                                            </p>
                                        )}

                                        {/* CURRENT ORDER */}
                                        {zone.currentOrder && (
                                            <p className="text-[11px] font-medium text-gray-700 truncate w-full text-center leading-tight">
                                                {zone.currentOrder}
                                            </p>
                                        )}
                                    </>
                                )}
                            </div>


                            {/* FOOTER */}
                            {/* FOOTER */}
                            {zone.status !== "idle" && (
                                <div className="mt-1.5 w-full flex flex-col items-center">

                                    {/* PROGRESS PERCENT ABOVE BAR */}
                                    <p className="text-[15px] font-semibold text-gray-700 mb-1">
                                        {zone.progress}%
                                    </p>

                                    {/* PROGRESS BAR */}
                                    <div className="w-full bg-gray-200 rounded-full h-1">
                                        <div
                                            className={`
                    h-full rounded-full 
                    ${zone.status === "completed"
                                                    ? "bg-purple-600"
                                                    : zone.status === "running"
                                                        ? "bg-green-600"
                                                        : "bg-blue-600"}
                `}
                                            style={{ width: `${zone.progress}%` }}
                                        />
                                    </div>
                                </div>
                            )}

                        </div>
                    </EventDetailsDialog>
                );
            })}
        </>
    );




}

