import { Navbar } from "@/components/navbar";
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="container mx-auto max-w-5xl px-4">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
