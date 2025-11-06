import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Phone } from "lucide-react";

export function JobSummaryCard() {
    return (
        <Card className="w-full max-w-md shadow-lg">
            <CardHeader>
                <CardTitle>Shipment Summary</CardTitle>
            </CardHeader>

            <CardContent className="space-y-3 text-sm">
                <div className="grid grid-cols-2 gap-2">
                    <p><strong>Shipment ID:</strong><br />45678FGHJ78</p>
                    <p><strong>Trailer No:</strong><br />MH01 GH 2374</p>
                    <p><strong>LR No:</strong><br />4567FGHJS5GH</p>
                </div>

                <div>
                    <p className="font-medium mt-3">Destination</p>
                    <p>F-110D, Sai Tower, Rampur, Udaipur, Rajasthan 600034</p>
                </div>

                <div>
                    <p className="font-medium mt-3">Current Location</p>
                    <p>Ramnagar, Dinfup, Gujarat Highways, Gujarat 234453</p>
                    <p className="text-xs text-gray-500">Updated: 07 May 2022, 11:45 PM</p>
                </div>

                <div className="flex items-center justify-between mt-3">
                    <div>
                        <p className="font-medium">Driver</p>
                        <p>Binodh Yadav</p>
                    </div>

                    <div className="flex gap-2">
                        <Button size="icon" variant="outline"><Phone size={16} /></Button>
                        <Button size="icon" variant="outline"><MessageSquare size={16} /></Button>
                    </div>
                </div>

                <Button className="w-full bg-red-600 hover:bg-red-700 mt-2">Track Now</Button>
            </CardContent>
        </Card>
    );
}
