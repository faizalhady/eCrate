import { socket } from "@/lib/socket"
import { useEffect } from "react"

export function useSocketTest() {
    useEffect(() => {
        function onTestMessage(msg: string) {
            console.log("📩 Received from server:", msg)
        }

        socket.on("test-message", onTestMessage)

        return () => {
            socket.off("test-message", onTestMessage)
        }
    }, [])
}
