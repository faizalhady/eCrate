// src/routes/ProtectedRoute.tsx
import { useAuthStore } from "@/store/authStore"
import { Navigate, useLocation } from "react-router-dom"

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const isAuthenticated = useAuthStore((s) => s.isAuthenticated)
    const location = useLocation()

    // Not logged in → go to login and remember "from" path
    if (!isAuthenticated) {
        return <Navigate to="/login" replace state={{ from: location.pathname }} />
    }

    return <>{children}</>
}
