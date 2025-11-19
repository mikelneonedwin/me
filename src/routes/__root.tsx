import { AppSidebar } from "@/components/app-sidebar";
import { ModeToggle } from "@/components/mode-toggle";
import { ThemeProvider } from "@/components/theme-provider";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import Lenis from "lenis";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SidebarProvider open={false}>
        <AppSidebar />
        <main className="w-full relative">
          <div className="sticky md:absolute top-0 w-full bg-background/90 md:bg-transparent z-10">
            <div className="p-4 flex justify-end">
              <ModeToggle />
            </div>
            <Separator className="md:hidden" />
          </div>
          <div className="container mx-auto max-w-5xl px-2">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </ThemeProvider>
  );
}
