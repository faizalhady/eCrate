import { Spinner } from "@/components/loader"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useAuthStore } from "@/store/authStore"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

const schema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(4, "Too short"),
})

type LoginData = z.infer<typeof schema>

interface LoginDialogProps {
    open: boolean
    onOpenChange: (open: boolean) => void
}

export function LoginDialog({ open, onOpenChange }: LoginDialogProps) {
    const login = useAuthStore((s) => s.login)
    const form = useForm<LoginData>({
        resolver: zodResolver(schema),
        defaultValues: { email: "", password: "" },
    })

    const handleLogin = async (values: LoginData) => {
        await new Promise((r) => setTimeout(r, 500))
        login(values.email)
        toast.success(`Welcome ${values.email}`)
        onOpenChange(false)
    }

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-md w-[90vw] sm:w-full">
                <DialogHeader>
                    <DialogTitle>Log In</DialogTitle>
                </DialogHeader>

                <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
                    <Input type="email" placeholder="Email" {...form.register("email")} />
                    <Input type="password" placeholder="Password" {...form.register("password")} />

                    <Button type="submit" className="w-full flex justify-center gap-2">
                        {form.formState.isSubmitting ? <Spinner /> : "Login"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}
