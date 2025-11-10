import { SidebarMenu, SidebarMenuButton, SidebarMenuItem, useSidebar } from "@/components/ui/sidebar"
import { Box } from "lucide-react"

export function SidebarHeaderTitle() {

    const { toggleSidebar } = useSidebar()
    return (
        <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton
                    size="lg"
                    onClick={toggleSidebar}
                    className="cursor-pointer data-[state=open]:bg-transparent data-[state=open]:text-inherit"
                >
                    {/* Icon container (keeps same visual size/alignment) */}
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                        <Box
                            className="size-4"
                        // onClick={toggleSidebar}
                        />
                    </div>

                    {/* App title and version */}
                    <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-medium">eCRATE</span>
                        <span className="text-sm text-muted-foreground">v1.5.0</span>
                    </div>
                </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
    )
}
