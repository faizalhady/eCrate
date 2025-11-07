import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const todayJobs = [
    { id: 1, time: "08:30 AM", workcell: "LAM RESEARCH", staging: "Area A" },
    { id: 2, time: "09:45 AM", workcell: "ADVANTEST", staging: "Area C" },
    { id: 3, time: "11:15 AM", workcell: "MASIMO", staging: "Area D" },
    { id: 4, time: "01:00 PM", workcell: "FORTIVE", staging: "Area B" },
    { id: 5, time: "03:20 PM", workcell: "ILLUMINA", staging: "Area E" },
    { id: 6, time: "05:00 PM", workcell: "SURPLUS", staging: "Area F" },
];

export function ScheduleCard() {
    const navigate = useNavigate();

    return (
        <Card className="w-full shadow-md">
            {/* Main Title */}
            <CardHeader className="pb-0">
                <CardTitle className="text-xl font-semibold text-gray-800">
                    Queue
                </CardTitle>
            </CardHeader>

            {/* Subheader - Today with arrows */}
            <div className="flex items-center justify-between px-6 pt-2 pb-3">
                <button className="p-2 hover:bg-gray-100 rounded-md transition">
                    <ChevronLeft size={18} />
                </button>

                <div className="flex items-center gap-2">
                    <CalendarDays size={18} className="text-blue-500" />
                    <span className="text-base font-medium">Today</span>
                </div>

                <button className="p-2 hover:bg-gray-100 rounded-md transition">
                    <ChevronRight size={18} />
                </button>
            </div>

            {/* Body - Job Cards */}
            <CardContent className="grid gap-3">
                {todayJobs.map((job) => (
                    <div
                        key={job.id}
                        className="border border-gray-200 rounded-md p-3 flex items-center justify-between hover:shadow-sm transition"
                    >
                        <div>
                            <p className="text-sm text-gray-700 font-medium">
                                {job.workcell}
                            </p>
                            <p className="text-xs text-gray-500">
                                Staging: {job.staging}
                            </p>
                        </div>
                        <p className="text-xs text-gray-600">{job.time}</p>
                    </div>
                ))}

                {/* Footer - Navigation Button */}
                <button
                    onClick={() => navigate("/booking")}
                    className="mt-2 w-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md py-2 transition"
                >
                    Full Schedule
                </button>
            </CardContent>
        </Card>
    );
}
