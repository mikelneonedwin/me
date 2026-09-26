import { GitHubIcon, XIcon } from "@/components/icons";
import { Mail, ArrowUpRight, Zap } from "lucide-react";

export function HeroBio() {
  return (
    <section className="relative flex flex-col space-y-6">
      {/* Desktop Accent: 3 Spinning Zap Icons across the empty hero right space */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-0 pointer-events-none select-none z-0 overflow-visible"
      >
        {/* 1. Top, closer to / slightly beyond the center of the hero — Much faster */}
        <div
          className="absolute left-[54%] -top-3 text-primary animate-spin"
          style={{ animationDuration: "0.9s" }}
        >
          <Zap className="size-13 fill-primary stroke-none drop-shadow-[0_0_14px_rgba(52,211,153,0.4)]" />
        </div>

        {/* 2. Top, but with more margin from the right edge — A bit faster (was 3.2s) */}
        <div
          className="absolute right-24 top-8 text-primary/85 animate-spin-reverse"
          style={{ animationDuration: "2.1s" }}
        >
          <Zap className="size-16 stroke-primary/85 drop-shadow-[0_0_18px_rgba(52,211,153,0.35)]" />
        </div>

        {/* 3. Bottom of the empty space to the far right — Kept at current speed (1.8s) */}
        <div
          className="absolute right-4 bottom-6 text-primary animate-spin"
          style={{ animationDuration: "1.8s" }}
        >
          <Zap className="size-16 fill-primary stroke-none drop-shadow-[0_0_20px_rgba(52,211,153,0.45)]" />
        </div>
      </div>
      <div className="space-y-1.5">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          Winner Edwin
        </h1>
        <p className="font-mono text-sm sm:text-base text-muted-foreground">
          Software Engineer · Uyo, Nigeria 🇳🇬
        </p>
      </div>

      <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
        <p>
          I care about building software that delivers great results without
          unnecessary weight - fast, resource-conscious, easy to maintain, and
          resilient under load.
        </p>

        <p>
          I love decomplicating problems and finding simple solutions that work
          without creating new ones. A lot of modern software could be simpler
          if we let go of our love for complexity.
        </p>

        <p>
          I work primarily across TypeScript, React, Express &amp; NestJS
          backends, fullstack Next.js, and whatever else a problem calls for.
        </p>

        <div className="pt-1">
          <blockquote className="border-l-2 border-primary pl-4 py-1.5 font-mono text-sm sm:text-base text-foreground font-medium bg-muted/20 rounded-r-lg">
            My approach is simple:{" "}
            <strong className="text-primary font-semibold">
              make it work, make it right, then make it fast.
            </strong>
          </blockquote>
        </div>
      </div>

      {/* Quick Contact & Action Buttons */}
      <div className="pt-2 flex flex-wrap items-center gap-3">
        <a
          href="mailto:winneredwin2667@gmail.com"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors shadow-xs"
        >
          <Mail className="size-4" />
          <span>Get in touch</span>
        </a>

        <a
          href="https://github.com/mikelneonedwin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card/60 hover:bg-muted/80 text-foreground text-sm font-medium transition-colors"
        >
          <GitHubIcon className="size-4" />
          <span>GitHub</span>
          <ArrowUpRight className="size-3.5 text-muted-foreground" />
        </a>

        <a
          href="https://x.com/mikelneonedwin"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card/60 hover:bg-muted/80 text-foreground text-sm font-medium transition-colors"
        >
          <XIcon className="size-3.5" />
          <span>Twitter / X</span>
          <ArrowUpRight className="size-3.5 text-muted-foreground" />
        </a>
      </div>
    </section>
  );
}
