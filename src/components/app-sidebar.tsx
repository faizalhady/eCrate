"use client"

import {
  Ban,
  Box,
  Calendar,
  ChartLine,
  ChevronRight,
  Settings,
  Sheet,
  Waypoints,
} from "lucide-react"
import * as React from "react"
import { useLocation, useNavigate } from "react-router-dom"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { SidebarHeaderTitle } from "./SidebarHeaderTitle"
import { NavUser } from "./nav-user"

// -------------------------------------------------------------
// NAVIGATION STRUCTURE
// -------------------------------------------------------------
const navStructure = [
  {
    title: "Main",
    items: [
      { title: "Dashboard", path: "/", icon: Box },
      { title: "Schedule / Booking", path: "/booking", icon: Calendar },
      { title: "Schedule / Booking 2", path: "/calendar", icon: Calendar },
    ],
  },
  {
    title: "Analytics",
    items: [{ title: "Overview", path: "/", icon: ChartLine }],
  },
  {
    title: "Database",
    items: [{ title: "Tables", path: "/", icon: Sheet }],
  },
  {
    title: "API Testing",
    items: [{ title: "Example Api", path: "/example", icon: Waypoints }],
  },
  {
    title: "System",
    items: [
      { title: "Error Page", path: "error", icon: Ban },
      { title: "Settings", path: "#", icon: Settings },
    ],
  },
]

// -------------------------------------------------------------
// SIDEBAR COMPONENT
// -------------------------------------------------------------
export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <Sidebar collapsible="icon" {...props}>
      {/* HEADER */}
      <SidebarHeader>
        <SidebarHeaderTitle />
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent className="gap-0">
        {navStructure.map((section) => (
          <Collapsible key={section.title} defaultOpen className="group/collapsible">
            <SidebarGroup>
              <SidebarGroupLabel
                asChild
                className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
              >
                <CollapsibleTrigger>
                  {section.title}
                  <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                </CollapsibleTrigger>
              </SidebarGroupLabel>

              <CollapsibleContent>
                <SidebarGroupContent>
                  <SidebarMenu>
                    {section.items.map((item) => {
                      const isActive = location.pathname === item.path
                      return (
                        <SidebarMenuItem key={item.title}>
                          <SidebarMenuButton
                            asChild
                            isActive={isActive}
                            onClick={() => item.path !== "#" && navigate(item.path)}
                            className="pl-6"
                          >
                            <button className="flex w-full items-center gap-2 text-left cursor-pointer">
                              <item.icon className="h-4 w-4 opacity-80" />
                              <span>{item.title}</span>
                            </button>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      )
                    })}
                  </SidebarMenu>
                </SidebarGroupContent>
              </CollapsibleContent>
            </SidebarGroup>
          </Collapsible>
        ))}
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}
