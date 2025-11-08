// src/components/nav-user.tsx
"use client"

import { LoginButton } from "@/components/auth/LoginButton"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import { isProtectedPath } from "@/lib/protectedPaths"
import { useAuthStore } from "@/store/authStore"
import {
    BadgeCheck,
    Bell,
    ChevronsUpDown,
    CreditCard,
    LogOut,
    Sparkles,
} from "lucide-react"
import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "sonner"

export function NavUser() {
    const { user, isAuthenticated } = useAuthStore()
    const { isMobile } = useSidebar()
    const navigate = useNavigate()
    const location = useLocation() // ✅ get current path
    const logout = useAuthStore((s) => s.logout)

    // ✅ prevent crash even if Zustand is still loading
    const email = user?.email ?? ""
    const username = email ? email.split("@")[0] : "Guest"
    const firstLetter = email ? email.charAt(0).toUpperCase() : "?"

    const handleLogout = () => {
        // ✅ Redirect only if currently on a protected path
        if (isProtectedPath(location.pathname)) {
            navigate("/", { replace: true })
        }

        // ✅ Then clear auth state (slight delay to avoid race)
        setTimeout(() => {
            logout()
            toast.info("Logged out successfully")
        }, 100)
    }
    // ✅ Not logged in → show login button
    if (!isAuthenticated || !email) {
        return (
            <SidebarMenu>
                <SidebarMenuItem>
                    <LoginButton />
                </SidebarMenuItem>
            </SidebarMenu>
        )
    }

    // ✅ Logged in → show user dropdown
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <SidebarMenuButton
                            size="lg"
                            className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                        >
                            <Avatar className="h-8 w-8 rounded-lg">
                                <AvatarImage src="/avatars/shadcn.jpg" alt={email} />
                                <AvatarFallback className="rounded-lg">{firstLetter}</AvatarFallback>
                            </Avatar>
                            <div className="grid flex-1 text-left text-sm leading-tight">
                                <span className="truncate font-medium">{username}</span>
                                <span className="truncate text-xs text-muted-foreground">{email}</span>
                            </div>
                            <ChevronsUpDown className="ml-auto size-4" />
                        </SidebarMenuButton>
                    </DropdownMenuTrigger>

                    <DropdownMenuContent
                        className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
                        side={isMobile ? "bottom" : "right"}
                        align="end"
                        sideOffset={4}
                    >
                        <DropdownMenuLabel className="p-0 font-normal">
                            <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                                <Avatar className="h-8 w-8 rounded-lg">
                                    <AvatarImage src="/avatars/shadcn.jpg" alt={email} />
                                    <AvatarFallback className="rounded-lg">{firstLetter}</AvatarFallback>
                                </Avatar>
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-medium">{username}</span>
                                    <span className="truncate text-xs">{email}</span>
                                </div>
                            </div>
                        </DropdownMenuLabel>

                        <DropdownMenuSeparator />
                        <DropdownMenuGroup>
                            <DropdownMenuItem>
                                <Sparkles />
                                Upgrade to Pro
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <BadgeCheck />
                                Account
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <CreditCard />
                                Billing
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Bell />
                                Notifications
                            </DropdownMenuItem>
                        </DropdownMenuGroup>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onClick={handleLogout}>
                            <LogOut />
                            Log out
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
