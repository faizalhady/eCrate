import { FaBoxOpen, FaPhoneAlt, FaTruck, FaWarehouse } from "react-icons/fa";

/* -------------------------------------------------
   Job Flow Timeline Data
---------------------------------------------------*/
const flowData = [
    { id: 1, title: "Called To Staging", date: "1 Jul 2022, 10:00 AM", icon: <FaPhoneAlt className="text-white" />, category: "done" },
    { id: 2, title: "Arrived At Staging", date: "1 Jul 2022, 11:30 AM", icon: <FaWarehouse className="text-white" />, category: "done" },
    { id: 3, title: "Crating In Progress", date: "1 Jul 2022, 12:30 PM", icon: <FaBoxOpen className="text-white" />, category: "active" },
    { id: 4, title: "Shipping", date: "Pending", icon: <FaTruck className="text-white" />, category: "upcoming" },
];

/* -------------------------------------------------
   Helper for category colors
---------------------------------------------------*/
const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
        done: "bg-green-500",
        active: "bg-blue-500",
        upcoming: "bg-gray-400",
    };
    return colors[category] || "bg-gray-300";
};

/* -------------------------------------------------
   Component (No Outer Card)
---------------------------------------------------*/
export function JobTrackingCard() {
    return (
        <div className="relative px-6 py-4">
            {/* Vertical line behind icons */}
            <div className="absolute left-[43px] top-[28px] bottom-[60px] w-[2px] bg-gray-300 z-0" />

            {flowData.map((item) => (
                <div key={item.id} className="relative flex items-center gap-4 mb-6 z-10">
                    {/* Icon */}
                    <div
                        className={`w-10 h-10 rounded-full ${getCategoryColor(
                            item.category
                        )} flex items-center justify-center shadow-sm`}
                    >
                        {item.icon}
                    </div>

                    {/* Step Info */}
                    <div className="flex flex-col bg-white rounded-md border border-gray-100 shadow-sm px-4 py-2 flex-1">
                        <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
                        <p className="text-xs text-gray-600">{item.date}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
