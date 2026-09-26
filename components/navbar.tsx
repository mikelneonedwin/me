import Link from "next/link";
import { Mail } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { GitHubIcon, XIcon } from "@/components/icons";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2.5 font-mono text-sm sm:text-base font-semibold tracking-tight group"
        >
          <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="group-hover:text-primary transition-colors">
            Winner Edwin
          </span>
          <span className="hidden sm:inline text-xs text-muted-foreground font-normal">
            / Uyo, Nigeria
          </span>
        </Link>

        <div className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="https://github.com/mikelneonedwin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <GitHubIcon className="size-4" />
          </a>
          <a
            href="https://x.com/mikelneonedwin"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter) Profile"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <XIcon className="size-3.5" />
          </a>
          <a
            href="mailto:winneredwin2667@gmail.com"
            aria-label="Email Winner Edwin"
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
          >
            <Mail className="size-4" />
          </a>

          <div className="h-4 w-px bg-border mx-1" />

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
