import { Button } from "@/components/ui/button"
import { useState } from "react"
import { LoginDialog } from "./LoginDialog"

export function LoginButton() {
    const [open, setOpen] = useState(false)

    return (
        <div className="w-full px-2 pb-3">
            <Button
                onClick={() => setOpen(true)}
                className="w-full justify-center font-medium rounded-lg"
            >
                Login
            </Button>

            <LoginDialog open={open} onOpenChange={setOpen} />
        </div>
    )
}
