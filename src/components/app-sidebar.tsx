"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link, useLocation } from "@tanstack/react-router";
import { BriefcaseBusiness, Code2, FolderOpenDot, User } from "lucide-react";
import { useEffect, useState } from "react";

type Section = {
  id: string;
  icon: typeof User;
  href: string;
};

const sections: Section[] = [
  { id: "about", icon: User, href: "/" },
  { id: "stack", icon: Code2, href: "/" },
  { id: "work-experience", icon: BriefcaseBusiness, href: "/work-experience" },
  { id: "projects", icon: FolderOpenDot, href: "/projects" },
];

export function AppSidebar() {
  const location = useLocation();
  const [scrollActiveId, setScrollActiveId] = useState<string>("about");

  // Determine which section is active based on scroll (home page) or pathname
  const activeSectionId =
    location.pathname === "/"
      ? scrollActiveId
      : pathnameToSectionId(location.pathname);

  function pathnameToSectionId(pathname: string) {
    switch (pathname) {
      case "/projects":
        return "projects";
      case "/work-experience":
        return "work-experience";
      default:
        return "";
    }
  }

  useEffect(() => {
    // Update active section on scroll for homepage anchors
    const handleScroll = () => {
      if (location.pathname !== "/") return;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setScrollActiveId(section.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <Sidebar collapsible="icon">
      <SidebarContent className="flex flex-col items-center gap-4 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-y-5">
              {sections.map(({ id, icon: Icon, href }) => (
                <SidebarMenuItem key={id}>
                  <SidebarMenuButton asChild isActive={activeSectionId === id}>
                    <Link
                      to={href + (href === "/" ? `#${id}` : "")}
                      aria-label={id}
                      className="items-center justify-center group-data-[collapsible=icon]:!h-11 group-data-[collapsible=icon]:!w-11"
                    >
                      <Icon className="w-5 h-5" />
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
