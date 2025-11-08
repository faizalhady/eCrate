import { LoginForm } from "@/components/auth/LoginForm"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useState } from "react"

export function LoginDialog() {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button onClick={() => setOpen(true)}>Open Login Modal</Button>
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="max-w-md w-[90vw] sm:w-full">
                    <DialogHeader>
                        <DialogTitle>Sign In</DialogTitle>
                    </DialogHeader>
                    <LoginForm onSuccess={() => setOpen(false)} />
                </DialogContent>
            </Dialog>
        </>
    )
}
