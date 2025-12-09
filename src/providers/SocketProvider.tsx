import { socket } from "@/lib/socket"
import { useEffect } from "react"

export function SocketProvider() {
    useEffect(() => {
        console.log("📡 SocketProvider mounted")

        // listen to job booking created
        socket.on("jobBooking.created", (meta) => {
            console.log("🔔 New job created!", meta)
        })

        return () => {
            socket.off("jobBooking.created")
        }
    }, [])

    return null
}
