import { LoginForm } from "@/components/auth/LoginForm"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export default function LoginPage2() {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    // Automatically open the modal on page load
    useEffect(() => {
        setOpen(true)
    }, [])

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="max-w-md w-[90vw] sm:w-full">
                <DialogHeader>
                    <DialogTitle>Sign In</DialogTitle>
                </DialogHeader>

                <LoginForm
                    onSuccess={() => {
                        setOpen(false)
                        navigate("/") // ✅ Redirect to home page after login
                    }}
                />
            </DialogContent>
        </Dialog>
    )
}
