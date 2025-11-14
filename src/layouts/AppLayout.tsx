import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

export default function AppLayout() {
  const location = useLocation()
  const path = location.pathname.replace("/", "") || "Dashboard"
  const navigate = useNavigate()

  const handleCreateBooking = () => {
    navigate("/calendar")
  }

  // ✅ Hide "Create Booking" when URL contains "/calendar"
  const isCalendarPage = location.pathname.includes("/calendar")

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset className="flex flex-col h-screen">
        {/* Header */}
        <header className="flex h-12 shrink-0 items-center justify-between px-4 bg-gray-50">
          {/* Left: Sidebar + Breadcrumb */}
          <div className="flex items-center gap-2">
            <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbPage className="capitalize">
                    {path}
                  </BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* Right: Buttons */}
          {!isCalendarPage && (
            <div className="flex items-center gap-2 mr-2">
              <Button
                onClick={handleCreateBooking}
                size="sm"
                className="flex items-center gap-2 font-medium"
              >
                {/* <Plus className="h-5 w-4" /> */}
                Booking
              </Button>
              <Button
                onClick={handleCreateBooking}
                size="sm"
                className="flex items-center gap-2 font-medium"
              >
                Log In
              </Button>
            </div>
          )}
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-0">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
