"use client"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { ClipboardCheck, Hammer, PackageCheck, Truck, Wrench } from "lucide-react"
import React from "react"

/* -------------------------------------------------
   Crating Process Timeline Data
---------------------------------------------------*/
interface CratingStage {
    id: number
    title: string
    description: string
    icon: React.ReactNode
    status: "completed" | "active" | "upcoming"
}

const cratingStages: CratingStage[] = [
    {
        id: 1,
        title: "Booking",
        description: "Job confirmed, materials inspected and workcell assigned.",
        icon: <ClipboardCheck className="w-5 h-5" />,
        status: "completed",
    },
    {
        id: 2,
        title: "Calling",
        description: "Operators assembling crates and checking fitment alignment.",
        icon: <Wrench className="w-5 h-5" />,
        status: "completed",
    },
    {
        id: 4,
        title: "Crating",
        description: "Torque tools securing base and sides. Supervisor validation.",
        icon: <Hammer className="w-5 h-5" />,
        status: "active",
    },
    {
        id: 3,
        title: "Holding",
        description: "Sensitive items wrapped, labeling and sealing in progress.",
        icon: <PackageCheck className="w-5 h-5" />,
        status: "upcoming",
    },
    {
        id: 5,
        title: "Shipped",
        description: "Crate scheduled for loading and outbound delivery.",
        icon: <Truck className="w-5 h-5" />,
        status: "upcoming",
    },
]

/* -------------------------------------------------
   JobSummaryCard — Flexible in strict grid cell
---------------------------------------------------*/
export function JobSummaryCard() {
    return (
        <Card className="h-full w-full flex flex-col bg-white rounded-md border border-gray-200 shadow-sm overflow-hidden">
            {/* Header */}
            <div className="flex-shrink-0 px-4 pt-3 pb-2 border-b border-gray-100 flex items-center justify-between">
                <h2 className="text-sm font-semibold text-gray-800 tracking-tight">
                    Crating Process Summary
                </h2>
                <Badge variant="outline" className="text-xs text-gray-600 border-gray-300">
                    JOB-7901
                </Badge>
            </div>

            {/* Timeline — responsive and compressible */}
            <div className="flex-1 min-h-0 px-3 flex flex-col justify-center">
                <div className="hidden md:flex justify-between items-start relative">
                    {/* Connecting line */}
                    <div className="absolute top-7 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-500/60 via-blue-400/50 to-blue-300/30" />

                    {cratingStages.map((stage) => (
                        <div key={stage.id} className="flex flex-col items-center flex-1 text-center relative z-10">
                            <div
                                className={`rounded-full p-2 flex items-center justify-center transition-all ${stage.status === "completed"
                                    ? "bg-blue-500 text-white ring-2 ring-blue-500/60"
                                    : stage.status === "active"
                                        ? "bg-amber-500 text-white ring-2 ring-amber-400/50 scale-110"
                                        : "bg-gray-100 text-gray-400 ring-1 ring-gray-200"
                                    }`}
                            >
                                {stage.icon}
                            </div>
                            <p className="text-[11px] font-medium text-gray-700 mt-1">{stage.title}</p>
                        </div>
                    ))}
                </div>

                {/* Mobile vertical timeline */}
                <div className="md:hidden space-y-3 mt-2">
                    {cratingStages.map((stage, idx) => (
                        <div key={stage.id} className="flex gap-3 items-start">
                            <div className="flex flex-col items-center">
                                <div
                                    className={`rounded-full p-2 ${stage.status === "completed"
                                        ? "bg-blue-500 text-white"
                                        : stage.status === "active"
                                            ? "bg-amber-500 text-white"
                                            : "bg-gray-100 text-gray-400"
                                        }`}
                                >
                                    {stage.icon}
                                </div>
                                {idx < cratingStages.length - 1 && (
                                    <div className="w-[2px] flex-1 bg-gradient-to-b from-blue-400/70 to-blue-300/30 mt-1" />
                                )}
                            </div>
                            <div className="flex-1">
                                <p className="text-[13px] font-medium text-gray-800 leading-tight">{stage.title}</p>
                                <p className="text-[12px] text-gray-600 leading-snug">{stage.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="flex-shrink-0 px-4 py-2 border-t border-gray-100 flex items-center justify-between">
                <p className="text-[12px] text-gray-600">
                    Last updated: <span className="font-medium text-gray-800">07 Nov 2025, 03:45 PM</span>
                </p>
                {/* <Badge className="bg-blue-600 text-white text-[11px] px-2 py-0.5 rounded-sm">
                    In Progress
                </Badge> */}
            </div>
        </Card>
    )
}
