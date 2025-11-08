import { LoginDialog } from "@/components/auth/LoginDialog"
import { Button } from "@/components/ui/button"
import { useAuthStore } from "@/store/useAuthStore"
import { Plus } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function CreateBookingButton() {
    const { isAuthenticated } = useAuthStore()
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleClick = () => {
        if (isAuthenticated) navigate("/booking") // ✅ if logged in, go directly
        else setOpen(true) // 🚫 otherwise, show login dialog
    }

    return (
        <>
            <Button
                onClick={handleClick}
                size="sm"
                className="flex items-center gap-2 font-medium"
            >
                <Plus className="h-4 w-4" />
                Create Booking
            </Button>

            {/* 🔐 Login dialog appears if user is not logged in */}
            <LoginDialog open={open} onOpenChange={setOpen} redirectTo="/booking" />
        </>
    )
}
