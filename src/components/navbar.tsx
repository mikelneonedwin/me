"use client";

import { GITHUB_URL, X_URL } from "@/constants/globals";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Link, useLocation } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import { Button } from "./ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/work-experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/uses", label: "Uses" },
];

export function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Desktop navbar - floating pill style */}
      <div className="hidden md:block py-4">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex items-center justify-between"
          >
            {/* Logo */}
            <Link
              to="/"
              className="font-bold text-xl hover:text-primary transition-colors"
            >
              WE<span className="text-primary">.</span>
            </Link>

            {/* Center nav - floating pill */}
            <nav className="flex items-center gap-1 px-2 py-1.5 rounded-full glass-card border border-border/50">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={cn(
                    "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                    location.pathname === link.to
                      ? "text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {location.pathname === link.to && (
                    <motion.div
                      layoutId="navbar-active"
                      className="absolute inset-0 bg-primary rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              ))}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-1">
              {/* Resume - accent button */}
              <Button
                asChild
                size="sm"
                className="rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border border-primary/20"
              >
                <a href="#" title="Download Resume">
                  <FileText className="w-4 h-4 mr-1.5" />
                  Resume
                </a>
              </Button>

              {/* Social icons */}
              <div className="flex items-center ml-2 gap-0.5">
                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-9 h-9"
                >
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <Icon icon="mdi:github" className="w-5 h-5" />
                  </a>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  size="icon"
                  className="rounded-full w-9 h-9"
                >
                  <a
                    href={X_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="X"
                  >
                    <Icon icon="ri:twitter-x-fill" className="w-4 h-4" />
                  </a>
                </Button>

                <div className="w-px h-5 bg-border mx-1" />

                {/* <ModeToggle /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile navbar */}
      <div className="md:hidden glass-card border-b border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex h-14 items-center justify-between">
            <Link to="/" className="font-bold text-lg">
              WE<span className="text-primary">.</span>
            </Link>
            <div className="flex items-center gap-1">
              <Button asChild variant="ghost" size="icon" className="w-9 h-9">
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <Icon icon="mdi:github" className="w-5 h-5" />
                </a>
              </Button>
              {/* <ModeToggle /> */}
            </div>
          </div>
        </div>

        {/* Mobile nav tabs */}
        <nav className="flex items-center justify-around border-t border-border/50 py-2 px-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "px-3 py-1.5 rounded-full text-xs font-medium transition-colors",
                location.pathname === link.to
                  ? "text-primary-foreground bg-primary"
                  : "text-muted-foreground",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
