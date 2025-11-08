// src/pages/booking/CratingSchedulerPage.tsx
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Scheduler, type SchedulerData } from "@bitnoi.se/react-scheduler";
import "@bitnoi.se/react-scheduler/dist/style.css";
import dayjs from "dayjs";
import { ChevronLeft, ChevronRight, Filter } from "lucide-react";
import { useCallback, useState } from "react";

export default function CratingSchedulerPage() {
    const [currentDate, setCurrentDate] = useState(dayjs());
    const [filterButtonState, setFilterButtonState] = useState(0);

    const handlePrevious = () => setCurrentDate(currentDate.subtract(1, "day"));
    const handleNext = () => setCurrentDate(currentDate.add(1, "day"));
    const handleToday = () => setCurrentDate(dayjs());

    // 🧱 Fully type-safe mock data (SchedulerData)
    const schedulerData: SchedulerData = [
        {
            id: "area-a",
            label: {
                icon: "https://picsum.photos/24", // or emoji 📦
                title: "Area A",
                subtitle: "Crating Zone 1",
            },
            data: [
                {
                    id: "task-1",
                    startDate: dayjs(currentDate).hour(8).toDate(),
                    endDate: dayjs(currentDate).hour(10).toDate(),
                    occupancy: 3600, // required numeric field (seconds)
                    title: "Lam Research",
                    subtitle: "Batch #123",
                    description: "Crate assembly for Lam Research",
                    bgColor: "rgb(245, 158, 11)", // amber
                },
                {
                    id: "task-2",
                    startDate: dayjs(currentDate).hour(14).toDate(),
                    endDate: dayjs(currentDate).hour(17).toDate(),
                    occupancy: 7200,
                    title: "Fortive",
                    subtitle: "Crate Prep",
                    description: "Packaging for shipment",
                    bgColor: "rgb(96, 165, 250)", // blue
                },
            ],
        },
        {
            id: "area-b",
            label: {
                icon: "https://picsum.photos/24?b",
                title: "Area B",
                subtitle: "Crating Zone 2",
            },
            data: [
                {
                    id: "task-3",
                    startDate: dayjs(currentDate).hour(9).toDate(),
                    endDate: dayjs(currentDate).hour(12).toDate(),
                    occupancy: 10800,
                    title: "Advantest",
                    subtitle: "Packaging",
                    description: "Preparation for dispatch",
                    bgColor: "rgb(52, 211, 153)", // green
                },
            ],
        },
        {
            id: "area-c",
            label: {
                icon: "https://picsum.photos/24?c",
                title: "Area C",
                subtitle: "Inspection Area",
            },
            data: [
                {
                    id: "task-4",
                    startDate: dayjs(currentDate).hour(11).toDate(),
                    endDate: dayjs(currentDate).hour(13).toDate(),
                    occupancy: 7200,
                    title: "Masimo",
                    subtitle: "Inspection",
                    description: "Final QA inspection",
                    bgColor: "rgb(244, 114, 182)", // pink
                },
            ],
        },
    ];

    // 🧭 Keep date range + zoom within expected config
    const config = {
        zoom: 2 as 0 | 1 | 2, // literal union
        startDate: dayjs(currentDate).startOf("day").toDate(),
        endDate: dayjs(currentDate).endOf("day").toDate(),
        maxRecordsPerPage: 10,
        filterButtonState,
    };

    // optional callback for range change
    const handleRangeChange = useCallback((range: any) => {
        console.log("New visible range:", range);
    }, []);

    return (
        <div className="p-4 space-y-2">
            <Card className="shadow-sm border border-gray-200">
                <CardHeader className="flex flex-row justify-between items-center pb-0">
                    <CardTitle className="text-lg font-semibold">
                        Crating Area Booking
                    </CardTitle>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" onClick={handlePrevious}>
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleToday}>
                            Today
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleNext}>
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setFilterButtonState(filterButtonState ? 0 : 1)}
                        >
                            <Filter className="w-4 h-4 mr-1" /> Filters
                        </Button>
                    </div>
                </CardHeader>

                <CardContent>
                    <Scheduler
                        data={schedulerData}
                        config={config}
                        onRangeChange={handleRangeChange}
                        onTileClick={(res) => console.log("Tile:", res)}
                        onItemClick={(item) => console.log("Item:", item)}
                        onFilterData={() => setFilterButtonState(1)}
                        onClearFilterData={() => setFilterButtonState(0)}
                    />
                </CardContent>
            </Card>
        </div>
    );
}
