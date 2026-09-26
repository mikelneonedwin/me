"use client";

import * as React from "react";
import { Icon } from "@iconify/react";

interface TechItem {
  label: string;
  icon: string;
}

const STACK: TechItem[] = [
  { label: "TypeScript", icon: "logos:typescript-icon" },
  { label: "JavaScript", icon: "logos:javascript" },
  { label: "React", icon: "logos:react" },
  { label: "Next.js", icon: "logos:nextjs-icon" },
  { label: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { label: "Node.js", icon: "logos:nodejs-icon" },
  { label: "NestJS", icon: "logos:nestjs" },
  { label: "Express", icon: "simple-icons:express" },
  { label: "PostgreSQL", icon: "logos:postgresql" },
  { label: "Drizzle", icon: "thesvg-color:drizzle-orm-dark" },
  { label: "Prisma", icon: "skill-icons:prisma" },
  { label: "Git", icon: "logos:git-icon" },
  { label: "GitHub", icon: "akar-icons:github-fill" },
];

export function TechMarquee() {
  return (
    <div
      className="relative w-full overflow-hidden py-4 select-none"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <div className="flex w-max animate-marquee gap-10 sm:gap-14 items-center">
        {/* First copy */}
        <div className="flex shrink-0 items-center gap-10 sm:gap-14">
          {STACK.map((tech, idx) => (
            <div
              key={`t1-${idx}`}
              title={tech.label}
              aria-label={tech.label}
              className="flex items-center justify-center transition-transform duration-200 hover:scale-110"
            >
              <Icon icon={tech.icon} className="text-3xl sm:text-4xl" />
            </div>
          ))}
        </div>

        {/* Second copy for seamless infinite loop */}
        <div
          className="flex shrink-0 items-center gap-10 sm:gap-14"
          aria-hidden="true"
        >
          {STACK.map((tech, idx) => (
            <div
              key={`t2-${idx}`}
              title={tech.label}
              className="flex items-center justify-center transition-transform duration-200 hover:scale-110"
            >
              <Icon icon={tech.icon} className="text-3xl sm:text-4xl" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
