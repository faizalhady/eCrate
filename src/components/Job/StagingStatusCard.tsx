import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Package, PhoneCall } from "lucide-react";

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
   Color & Style Logic
---------------------------------------------------*/
const getBoxColor = (status: string) =>
    status === "Occupied"
        ? "bg-green-50 border-green-200"
        : status === "Calling"
            ? "bg-amber-50 border-amber-200"
            : "bg-gray-50 border-gray-200";

const getIconColor = (status: string) =>
    status === "Occupied"
        ? "bg-green-500"
        : status === "Calling"
            ? "bg-amber-500"
            : "bg-gray-400";

const getBadgeStyle = (status: string) =>
    status === "Occupied"
        ? "bg-green-500 text-white"
        : status === "Calling"
            ? "bg-amber-500 text-white"
            : "text-gray-500 border-gray-300";

/* -------------------------------------------------
   Floating Z animation (for Empty)
---------------------------------------------------*/
const zzzFloat = {
    animate: (delay: number) => ({
        opacity: [0, 1, 0],
        y: [0, -18, -35],
        transition: { duration: 3, delay, repeat: Infinity, ease: "easeInOut" },
    }),
};

/* -------------------------------------------------
   Component
---------------------------------------------------*/
export function StagingStatusCard() {
    return (
        <div className="w-full">
            <div className="flex flex-wrap gap-3 justify-between">
                {stagingAreas.map((area) => (
                    <motion.div
                        key={area.id}
                        className={`flex flex-col justify-between rounded-md border p-3 w-full sm:basis-[48%] md:basis-[23%] ${getBoxColor(
                            area.status
                        )}`}
                        whileHover={{ scale: 1.03 }}
                    >
                        {/* Header: icon + name + badge */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`relative w-8 h-8 rounded-full flex items-center justify-center ${getIconColor(
                                        area.status
                                    )}`}
                                >
                                    {/* 🟢 Occupied → static */}
                                    {area.status === "Occupied" ? (
                                        <Package className="text-white w-4 h-4" />
                                    ) : area.status === "Calling" ? (
                                        // 🟡 Calling → ringing animation
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.15, 1],
                                                rotate: [0, 10, -10, 0],
                                            }}
                                            transition={{
                                                duration: 1.2,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <PhoneCall className="text-white w-4 h-4" />
                                        </motion.div>
                                    ) : (
                                        // ⚫ Empty → floating Z animation
                                        <div className="flex items-center justify-center text-white relative scale-[1.6]">
                                            <motion.span
                                                custom={0}
                                                animate="animate"
                                                variants={zzzFloat}
                                                className="absolute text-[16px] font-extrabold"
                                            >
                                                Z
                                            </motion.span>
                                            <motion.span
                                                custom={0.8}
                                                animate="animate"
                                                variants={zzzFloat}
                                                className="absolute text-[13px] font-bold top-2"
                                            >
                                                z
                                            </motion.span>
                                            <motion.span
                                                custom={1.6}
                                                animate="animate"
                                                variants={zzzFloat}
                                                className="absolute text-[11px] font-semibold top-4"
                                            >
                                                z
                                            </motion.span>
                                        </div>
                                    )}
                                </div>
                                <p className="font-semibold text-gray-800 text-sm">{area.name}</p>
                            </div>

                            <motion.div
                                animate={
                                    area.status === "Calling"
                                        ? { y: [0, -2, 0] } // badge bounce for calling
                                        : {}
                                }
                                transition={{ duration: 1.2, repeat: Infinity }}
                            >
                                <Badge
                                    variant={area.status === "Empty" ? "outline" : "default"}
                                    className={`text-[10px] px-2 py-0.5 ${getBadgeStyle(area.status)}`}
                                >
                                    {area.status}
                                </Badge>
                            </motion.div>
                        </div>

                        {/* Body: Job Info */}
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
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
