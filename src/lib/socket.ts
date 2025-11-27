import { io } from "socket.io-client"
import { toast } from "sonner"

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000"

export const socket = io(API_URL, {
    path: "/socket.io",
    transports: ["websocket"],
    autoConnect: true,
})

console.log("⚡ socket.ts loaded:", API_URL)

// Connected
socket.on("connect", () => {
    console.log("🟢 Connected to socket:", socket.id)
})

// Your event listener with toast
socket.on("jobBooking.created", (meta) => {
    console.log("🔔 jobBooking.created EVENT RECEIVED:", meta)

    // 🔥 Show toast
    toast.success(`New booking created in Area ${meta.areaId}`, {
        description: `Job ${meta.jobId} was booked by ${meta.triggeredBy}`,
        duration: 4000,
    })
})

// Disconnected
socket.on("disconnect", () => {
    console.log("🔴 Socket disconnected")
})
