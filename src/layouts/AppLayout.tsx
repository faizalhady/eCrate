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
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Plus } from "lucide-react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

export default function AppLayout() {
  const location = useLocation()
  const path = location.pathname.replace("/", "") || "Dashboard"
  const navigate = useNavigate()

  const handleCreateBooking = () => {
    navigate("/booking/new") // ✅ Adjust target route as needed
  }

  return (
    <SidebarProvider>
      {/* Sidebar */}
      <AppSidebar />

      {/* Main inset area */}
      <SidebarInset className="flex flex-col h-screen">
        {/* Header */}
        <header className="bg-background flex h-16 shrink-0 items-center justify-between border-b px-4">
          {/* Left: Sidebar + Breadcrumb */}
          <div className="flex items-center gap-2">
            <SidebarTrigger className="-ml-1" />
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

          {/* Right: Create Booking Button */}
          <div className="flex items-center gap-2">
            <Button
              onClick={handleCreateBooking}
              size="sm"
              className="flex items-center gap-2 font-medium"
            >
              <Plus className="h-4 w-4" />
              Create Booking
            </Button>
          </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-4">
          {/* <div className="relative h-full overflow-visible"> */}
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
