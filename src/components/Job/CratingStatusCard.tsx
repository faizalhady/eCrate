import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { Hammer, PhoneCall } from "lucide-react";

/* -------------------------------------------------
   Placeholder Crating Area Data
---------------------------------------------------*/
const cratingAreas = [
    { id: 1, name: "Crating Area A", status: "Occupied", jobId: "JOB-7901", operator: "Ahmad Rafi" },
    { id: 2, name: "Crating Area B", status: "Calling", jobId: "JOB-7910", operator: "Amin Zakaria" },
    { id: 3, name: "Crating Area C", status: "Occupied", jobId: "JOB-7902", operator: "Nur Aisyah" },
    { id: 4, name: "Crating Area D", status: "Empty", jobId: null, operator: null },
];

/* -------------------------------------------------
   Helpers
---------------------------------------------------*/
const getBoxColor = (s: string) =>
    s === "Occupied"
        ? "bg-blue-50 border-blue-200"
        : s === "Calling"
            ? "bg-amber-50 border-amber-200"
            : "bg-gray-50 border-gray-200";

const getIconColor = (s: string) =>
    s === "Occupied"
        ? "bg-blue-500"
        : s === "Calling"
            ? "bg-amber-500"
            : "bg-gray-400";

const getBadgeStyle = (s: string) =>
    s === "Occupied"
        ? "bg-blue-500 text-white"
        : s === "Calling"
            ? "bg-amber-500 text-white"
            : "text-gray-500 border-gray-300";

/* -------------------------------------------------
   Floating Z animation
---------------------------------------------------*/
const zzzFloat = {
    animate: (delay: number) => ({
        opacity: [0, 1, 0],
        y: [0, -20, -35],
        transition: { duration: 3, delay, repeat: Infinity, ease: "easeInOut" },
    }),
};

/* -------------------------------------------------
   Component
---------------------------------------------------*/
export function CratingStatusCard() {
    return (
        <div className="w-full">
            <div className="flex flex-wrap gap-3 justify-between">
                {cratingAreas.map((area) => (
                    <motion.div
                        key={area.id}
                        className={`flex flex-col justify-between rounded-md border p-3 w-full sm:basis-[48%] md:basis-[23%] ${getBoxColor(
                            area.status
                        )}`}
                        whileHover={{ scale: 1.03 }}
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div
                                    className={`relative w-8 h-8 rounded-full flex items-center justify-center ${getIconColor(
                                        area.status
                                    )}`}
                                >
                                    {/* 🔨 Hammer animation with pivot at handle */}
                                    {area.status === "Occupied" ? (
                                        <motion.div
                                            style={{ transformOrigin: "bottom center" }} // pivot near handle
                                            animate={{
                                                rotate: [0, -45, 0, 0, 0],
                                                y: [0, 0, 0, -1, 0],
                                            }}
                                            transition={{
                                                duration: 1.9,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <Hammer className="text-white w-4 h-4" />
                                        </motion.div>
                                    ) : area.status === "Calling" ? (
                                        // 📞 Phone animation
                                        <motion.div
                                            animate={{ scale: [1, 1.15, 1], rotate: [0, 12, -12, 0] }}
                                            transition={{
                                                duration: 1.1,
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                            }}
                                        >
                                            <PhoneCall className="text-white w-4 h-4" />
                                        </motion.div>
                                    ) : (
                                        // 💤 Sleeping Zzz
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
                                        ? { y: [0, -2, 0] }
                                        : area.status === "Occupied"
                                            ? { opacity: [1, 0.8, 1] }
                                            : {}
                                }
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                <Badge
                                    variant={area.status === "Empty" ? "outline" : "default"}
                                    className={`text-[10px] px-2 py-0.5 ${getBadgeStyle(area.status)}`}
                                >
                                    {area.status}
                                </Badge>
                            </motion.div>
                        </div>

                        {/* Body Info */}
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
