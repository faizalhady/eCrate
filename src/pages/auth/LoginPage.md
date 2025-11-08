import { LoginForm } from "@/components/auth/LoginForm"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LogIn } from "lucide-react"

export default function LoginPage() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-muted/30 p-4">
            <Card className="w-full max-w-md shadow-md">
                <CardHeader className="text-center space-y-2">
                    <LogIn className="mx-auto text-primary w-10 h-10" />
                    <CardTitle className="text-xl font-bold">Sign in to Continue</CardTitle>
                </CardHeader>
                <CardContent>
                    <LoginForm />
                </CardContent>
            </Card>
        </div>
    )
}
