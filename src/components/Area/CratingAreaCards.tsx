import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Hammer, PhoneCall } from "lucide-react";

const cratingAreas = [
    { id: 1, name: "CRATING AREA A", status: "Occupied", jobId: "JOB-7901", operator: "Ahmad Rafi" },
    { id: 2, name: "CRATING AREA B", status: "Calling", jobId: "JOB-7910", operator: "Amin Zakaria" },
    { id: 3, name: "CRATING AREA C", status: "Empty", jobId: null, operator: null },
    { id: 4, name: "CRATING AREA D", status: "Occupied", jobId: "JOB-7905", operator: "Nur Aisyah" },
    { id: 5, name: "CRATING AREA E", status: "Empty", jobId: null, operator: null },
    { id: 6, name: "CRATING AREA F", status: "Empty", jobId: null, operator: null },
    { id: 7, name: "CRATING AREA G", status: "Occupied", jobId: "JOB-7921", operator: "Farid Isa" },
    { id: 8, name: "CRATING AREA H", status: "Empty", jobId: null, operator: null },
    { id: 9, name: "CRATING AREA I", status: "Calling", jobId: "JOB-7933", operator: "Liyana" },
];

const getBoxColor = (s: string) =>
    s === "Occupied"
        ? "bg-blue-50 border-blue-200"
        : s === "Calling"
            ? "bg-amber-50 border-amber-200"
            : "bg-gray-50 border-gray-200";

const getBadgeStyle = (s: string) =>
    s === "Occupied"
        ? "bg-blue-500 text-white"
        : s === "Calling"
            ? "bg-amber-500 text-white"
            : "text-gray-500 border-gray-300";

export function CratingAreaCards() {
    return (
        <div className="h-full grid grid-cols-3 auto-rows-fr gap-2 p-0">
            {cratingAreas.map((area) => (
                <Card
                    key={area.id}
                    className={`border ${getBoxColor(area.status)} shadow-none rounded-sm overflow-hidden p-0 m-0 flex flex-col`}
                >
                    <CardContent className="p-2 flex-1 flex flex-col justify-between items-center text-center gap-[2px]">
                        {/* Icon */}
                        <div
                            className={`mb-[2px] w-9 h-9 rounded-full flex items-center justify-center border
    ${area.status === "Occupied"
                                    ? "bg-blue-500 border-blue-400 text-white"
                                    : area.status === "Calling"
                                        ? "bg-amber-500 border-amber-400 text-white"
                                        : "bg-gray-100 border-gray-300 text-gray-400"}`}
                        >
                            {area.status === "Occupied" ? (
                                <Hammer className="w-4 h-4" />
                            ) : area.status === "Calling" ? (
                                <PhoneCall className="w-4 h-4" />
                            ) : (
                                <span className="text-[10px] font-semibold">zzz</span>
                            )}
                        </div>


                        {/* Title + Badge */}
                        <h3 className="text-[12px] font-semibold text-gray-800 leading-tight">{area.name}</h3>
                        <div className="flex items-center gap-[2px] mt-[1px]">
                            {/* <span className="text-[9px] text-gray-500">#{String(area.id).padStart(3, "0")}</span> */}
                            <Badge
                                variant={area.status === "Empty" ? "outline" : "default"}
                                className={`text-[8px] px-1 py-0 ${getBadgeStyle(area.status)}`}
                            >
                                {area.status}
                            </Badge>
                        </div>

                        {/* Info */}
                        <div className="mt-1 w-full border-t pt-1 text-[10px] text-left leading-tight">
                            {area.status === "Occupied" || area.status === "Calling" ? (
                                <>
                                    <p className="text-gray-600">
                                        <span className="font-medium">Job:</span> {area.jobId}
                                    </p>
                                    <p className="text-gray-600">
                                        <span className="font-medium">Op:</span> {area.operator}
                                    </p>
                                </>
                            ) : (
                                <p className="text-gray-500 italic">No job</p>
                            )}
                        </div>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
