// src/routes/ProtectedRoute.tsx
import { LoginDialog } from "@/components/auth/LoginDialog"
import { useAuthStore } from "@/store/useAuthStore"
import { Navigate, useLocation } from "react-router-dom"

interface ProtectedRouteProps {
    children: React.ReactNode
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
    const { isAuthenticated } = useAuthStore()
    const location = useLocation()

    // ✅ Authenticated: render target page normally
    if (isAuthenticated) return <>{children}</>

    // 🚫 Not authenticated: block route and go back to previous location
    return (
        <>
            {/* Stay at previous page ("/" or whatever user came from) */}
            <Navigate to={location.state?.from || "/"} replace />

            {/* Show login modal, redirect after success */}
            <LoginDialog open={true} onOpenChange={() => { }} redirectTo={location.pathname} />
        </>
    )
}
