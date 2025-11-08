import { create } from "zustand"
import { persist } from "zustand/middleware"

interface AuthState {
    user: { email: string } | null
    isAuthenticated: boolean
    login: (email: string) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            isAuthenticated: false,
            login: (email) => set({ user: { email }, isAuthenticated: true }),
            logout: () => set({ user: null, isAuthenticated: false }),
        }),
        { name: "auth-storage" }
    )
)
