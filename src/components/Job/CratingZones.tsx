import { Activity, AlertCircle, CheckCircle, Clock, Package, User } from "lucide-react";
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
        operator: "John Smith",
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
        status: "occupied",
        currentOrder: "ORD-2024-1044",
        operator: "Sarah Johnson",
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
        operator: "Mike Chen",
        startTime: "07:00 AM",
        estimatedCompletion: "10:30 AM",
        progress: 100,
        itemsCompleted: 200,
        itemsTotal: 200,
        productName: "Plastic Molding Parts",
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
        operator: "Mike Chen",
        startTime: "07:00 AM",
        estimatedCompletion: "10:30 AM",
        progress: 100,
        itemsCompleted: 200,
        itemsTotal: 200,
        productName: "Plastic Molding Parts",
    },
    {
        id: "5",
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
        id: "6",
        name: "Zone D",
        status: "completed",
        currentOrder: "ORD-2024-1043",
        operator: "Mike Chen",
        startTime: "07:00 AM",
        estimatedCompletion: "10:30 AM",
        progress: 100,
        itemsCompleted: 200,
        itemsTotal: 200,
        productName: "Plastic Molding Parts",
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
        operator: "Mike Chen",
        startTime: "07:00 AM",
        estimatedCompletion: "10:30 AM",
        progress: 100,
        itemsCompleted: 200,
        itemsTotal: 200,
        productName: "Plastic Molding Parts",
    },
    {
        id: "5",
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
        id: "6",
        name: "Zone D",
        status: "completed",
        currentOrder: "ORD-2024-1043",
        operator: "Mike Chen",
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
                    icon: Activity,
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

                return (
                    <div
                        key={zone.id}
                        className={`
                    border-2 
                    ${statusConfig.bgColor} 
                    scale-[0.93] 
                    origin-top-left 
                    flex flex-col 
                    rounded-lg 
                    h-full
                    min-h-0 
                    overflow-hidden
                `}
                    >
                        {/* HEADER */}
                        <div className="px-2 py-1.5 flex items-center gap-2 flex-shrink-0">
                            <div className={`relative p-1 rounded-full ${statusConfig.color} flex-shrink-0`}>
                                <StatusIcon className={`h-3 w-3 ${statusConfig.iconColor}`} />
                            </div>

                            <div className="flex flex-col min-w-0 leading-none">
                                <div className="text-xs font-semibold truncate">
                                    {zone.name}
                                </div>
                            </div>
                        </div>

                        {/* BODY */}
                        <div className="flex flex-col flex-1 min-h-0 px-2 pb-1.5">
                            {zone.status === "idle" ? (
                                <div className="flex flex-col items-center justify-center flex-1 text-center">
                                    <Clock className="h-6 w-6 text-gray-400 mb-1" />
                                    <p className="text-gray-500 text-[10px]">Zone is available</p>
                                </div>
                            ) : (
                                <div className="flex flex-col justify-between h-full gap-1">
                                    {/* 2-column compact info */}
                                    <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[10px] flex-shrink-0">
                                        <div className="min-w-0">
                                            <p className="text-gray-500 leading-tight">Order</p>
                                            <p className="font-medium truncate leading-tight">{zone.currentOrder}</p>
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-gray-500 leading-tight">Operator</p>
                                            <div className="flex items-center gap-1 min-w-0">
                                                <User className="h-2.5 w-2.5 text-gray-400 flex-shrink-0" />
                                                <p className="truncate leading-tight">{zone.operator}</p>
                                            </div>
                                        </div>

                                        <div className="col-span-2 min-w-0">
                                            <p className="text-gray-500 leading-tight">Product</p>
                                            <p className="font-medium truncate leading-tight">{zone.productName}</p>
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-gray-500 leading-tight">Start</p>
                                            <p className="truncate leading-tight">{zone.startTime}</p>
                                        </div>

                                        <div className="min-w-0">
                                            <p className="text-gray-500 leading-tight">Done</p>
                                            <p className="truncate leading-tight">{zone.estimatedCompletion}</p>
                                        </div>
                                    </div>

                                    {/* PROGRESS - At bottom */}
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-between mb-0.5 text-[10px]">
                                            <p className="text-gray-500">Progress</p>
                                            <p className="text-gray-900">{zone.progress}%</p>
                                        </div>

                                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                                            <div
                                                className={`h-full rounded-full ${zone.status === "completed"
                                                    ? "bg-purple-600"
                                                    : zone.status === "running"
                                                        ? "bg-green-600"
                                                        : "bg-blue-600"
                                                    }`}
                                                style={{ width: `${zone.progress}%` }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                );
            })}
        </>
    );


}

