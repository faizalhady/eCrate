import { Spinner } from "@/components/loader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/store/useAuthStore"; // ✅ new
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const loginSchema = z.object({
    email: z.string().email("Invalid email"),
    password: z.string().min(4, "Password too short"),
})
type LoginForm = z.infer<typeof loginSchema>

interface LoginFormProps {
    onSuccess?: () => void
}

export function LoginForm({ onSuccess }: LoginFormProps) {
    const [loading, setLoading] = useState(false)
    const login = useAuthStore((s) => s.login) // ✅ from Zustand

    const form = useForm<LoginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: { email: "", password: "" },
    })

    const handleLogin = async (values: LoginForm) => {
        setLoading(true)
        await new Promise((r) => setTimeout(r, 1000)) // simulate delay

        login(values.email)
        toast.success(`Welcome back, ${values.email}!`)

        setLoading(false)

        // ✅ Wait 300ms before navigating, so toast shows up first
        setTimeout(() => {
            onSuccess?.()
        }, 300)
    }


    return (
        <form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
            <div>
                <Input
                    type="email"
                    placeholder="Email"
                    {...form.register("email")}
                    disabled={loading}
                />
                {form.formState.errors.email && (
                    <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.email.message}
                    </p>
                )}
            </div>

            <div>
                <Input
                    type="password"
                    placeholder="Password"
                    {...form.register("password")}
                    disabled={loading}
                />
                {form.formState.errors.password && (
                    <p className="text-sm text-destructive mt-1">
                        {form.formState.errors.password.message}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                className="w-full flex items-center justify-center gap-2"
                disabled={loading}
            >
                {loading ? <Spinner /> : "Login"}
            </Button>
        </form>
    )
}
