"use client";

import * as React from "react";
import Image from "next/image";
import { WORK_EXPERIENCE, type Experience } from "@/constants/experience";
import { ProjectParallaxCarousel } from "@/components/project-parallax-carousel";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  const [selectedId, setSelectedId] = React.useState<string>(
    WORK_EXPERIENCE[0].id,
  );

  const selectedExperience =
    WORK_EXPERIENCE.find((item) => item.id === selectedId) ||
    WORK_EXPERIENCE[0];

  return (
    <section id="experience" className="w-full flex flex-col gap-6">
      {/* Desktop Layout: Left Sidebar Tab Buttons + Right Borderless Display */}
      <div className="hidden md:grid md:grid-cols-12 gap-5 items-start">
        {/* Left Sidebar: Clean vertical tab buttons with right border indicator on active item */}
        <div className="md:col-span-4 flex flex-col gap-1">
          {WORK_EXPERIENCE.map((exp) => {
            const isSelected = exp.id === selectedId;

            return (
              <button
                key={exp.id}
                type="button"
                onClick={() => setSelectedId(exp.id)}
                className={cn(
                  "relative w-full text-left pl-3 pr-3.5 py-3 rounded-l-lg transition-all outline-none flex items-start gap-3 border-r-2 cursor-pointer",
                  isSelected
                    ? "border-primary text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground",
                )}
              >
                {/* Company Logo / Placeholder */}
                {exp.logo ? (
                  <div className="relative size-8 rounded-lg overflow-hidden shrink-0 bg-muted/40 border border-border/50 flex items-center justify-center p-1 mt-0.5">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      width={28}
                      height={28}
                      className="object-contain size-full"
                    />
                  </div>
                ) : (
                  <div className="size-8 rounded-lg shrink-0 bg-muted/40 border border-border/50 flex items-center justify-center text-xs font-semibold text-muted-foreground mt-0.5">
                    {exp.company.slice(0, 2).toUpperCase()}
                  </div>
                )}

                <div className="flex-1 min-w-0 flex flex-col gap-0.5">
                  <div className="flex items-center justify-between gap-1.5">
                    <span
                      className={cn(
                        "font-semibold text-sm truncate transition-colors",
                        isSelected ? "text-foreground font-bold" : "",
                      )}
                    >
                      {exp.company}
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground line-clamp-1">
                    {exp.role}
                  </p>
                  <p className="font-mono text-[11px] text-muted-foreground/70">
                    {exp.startDate} – {exp.endDate}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Display: Borderless, smaller gap from sidebar */}
        <div className="md:col-span-8 flex flex-col gap-5 min-h-[320px] pl-2">
          {/* Header */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-baseline justify-between gap-3">
              <div className="flex items-center gap-2.5">
                {selectedExperience.logo && (
                  <div className="relative size-7 rounded-lg overflow-hidden shrink-0 bg-muted/40 border border-border/50 flex items-center justify-center p-1">
                    <Image
                      src={selectedExperience.logo}
                      alt={selectedExperience.company}
                      width={24}
                      height={24}
                      className="object-contain size-full"
                    />
                  </div>
                )}

                <h3 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                  {selectedExperience.website ? (
                    <a
                      href={selectedExperience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline inline-flex items-center gap-1.5 group"
                    >
                      <span>{selectedExperience.company}</span>
                      <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                    </a>
                  ) : (
                    <span>{selectedExperience.company}</span>
                  )}
                </h3>
              </div>

              <span className="font-mono text-xs text-muted-foreground shrink-0">
                {selectedExperience.period}
              </span>
            </div>

            <p className="text-sm font-medium text-primary">
              {selectedExperience.role}
            </p>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            {selectedExperience.id === "early-internships" ? (
              <>
                Where my commercial development kicked off. Interning directly
                under{" "}
                <a
                  href="https://vickyjay.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground hover:underline inline-flex items-center gap-0.5"
                >
                  <span>VickyJay</span>
                  <ArrowUpRight className="size-3 text-muted-foreground" />
                </a>{" "}
                and taking on contract work, I built and shipped production
                frontend features across fintech platforms, hospital search
                systems, fashion events, and merchant dashboards. I was directly
                responsible for implementing the UI, integrating APIs, and
                ensuring reliable user flows.
              </>
            ) : (
              selectedExperience.description
            )}
          </p>

          {/* Projects: Parallax Carousel if multiple, single image if 1 */}
          {selectedExperience.projects &&
            selectedExperience.projects.length > 0 && (
              <div className="pt-2 w-full">
                {selectedExperience.projects.length > 1 ? (
                  <ProjectParallaxCarousel
                    projects={selectedExperience.projects}
                  />
                ) : (
                  (() => {
                    const singleProject = selectedExperience.projects[0];
                    const SingleContent = (
                      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-muted/20 select-none group">
                        {singleProject.image ? (
                          singleProject.isPortrait ? (
                            <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black/20">
                              <Image
                                src={singleProject.image}
                                alt={singleProject.title}
                                fill
                                className="object-cover blur-2xl opacity-40 scale-125"
                                unoptimized
                              />
                              <div className="relative h-full w-auto aspect-[9/16] py-2 z-10">
                                <Image
                                  src={singleProject.image}
                                  alt={singleProject.title}
                                  fill
                                  className="object-contain rounded-lg shadow-xl"
                                  unoptimized
                                />
                              </div>
                            </div>
                          ) : (
                            <Image
                              src={singleProject.image}
                              alt={singleProject.title}
                              fill
                              className="object-contain"
                              unoptimized
                            />
                          )
                        ) : (
                          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-muted/40">
                            <span className="font-semibold text-base text-foreground">
                              {singleProject.title}
                            </span>
                            <p className="text-xs text-muted-foreground max-w-md mt-1">
                              {singleProject.description}
                            </p>
                          </div>
                        )}

                        {/* Overlay Caption with progressive directional gradient & blur */}
                        <div
                          className="absolute inset-x-0 -bottom-[1px] z-20 pt-10 pb-3 px-4 sm:px-5 flex flex-col justify-end pointer-events-none backdrop-blur-md"
                          style={{
                            maskImage:
                              "linear-gradient(to top, black 0%, black 45%, transparent 100%), linear-gradient(to right, black 50%, transparent 100%)",
                            WebkitMaskImage:
                              "linear-gradient(to top, black 0%, black 45%, transparent 100%)",
                            background:
                              "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 45%, rgba(0, 0, 0, 0) 100%), linear-gradient(to right, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.2) 60%, rgba(0, 0, 0, 0) 100%)",
                          }}
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="font-bold text-white text-sm tracking-tight drop-shadow-md group-hover:underline">
                              {singleProject.title}
                            </span>
                            {singleProject.link && (
                              <span className="text-xs text-zinc-300 font-mono opacity-80 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">
                                ↗
                              </span>
                            )}
                          </div>
                          <span className="text-zinc-100 text-xs font-medium leading-snug mt-0.5 line-clamp-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)] max-w-lg">
                            {singleProject.description}
                          </span>
                        </div>
                      </div>
                    );

                    return singleProject.link ? (
                      <a
                        href={singleProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block cursor-pointer"
                      >
                        {SingleContent}
                      </a>
                    ) : (
                      SingleContent
                    );
                  })()
                )}
              </div>
            )}
        </div>
      </div>

      {/* Mobile Layout: Responsive Accordion using shadcn with dividers, no cards, no chevrons */}
      <div className="md:hidden w-full [overflow-anchor:none]">
        <Accordion
          defaultValue={[WORK_EXPERIENCE[0].id]}
          className="w-full flex flex-col"
        >
          {WORK_EXPERIENCE.map((exp) => (
            <AccordionItem
              key={exp.id}
              value={exp.id}
              className="border-b border-border/50 py-1"
            >
              <AccordionTrigger className="hover:no-underline py-3 px-0 focus:outline-none focus-visible:ring-0 focus-visible:border-transparent cursor-pointer items-center">
                <div className="flex items-start gap-3 text-left flex-1 min-w-0 pr-2">
                  {exp.logo && (
                    <div className="relative size-8 rounded-lg overflow-hidden shrink-0 bg-muted/40 border border-border/50 flex items-center justify-center p-1 mt-0.5">
                      <Image
                        src={exp.logo}
                        alt={exp.company}
                        width={28}
                        height={28}
                        className="object-contain size-full"
                      />
                    </div>
                  )}

                  <div className="flex flex-col items-start gap-0.5 flex-1 min-w-0">
                    <span className="font-semibold text-base text-foreground">
                      {exp.company}
                    </span>
                    <span className="text-xs text-primary font-medium">
                      {exp.role}
                    </span>
                    <span className="font-mono text-[11px] text-muted-foreground/80 mt-0.5">
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="pt-1 pb-4 px-0 text-sm text-muted-foreground leading-relaxed flex flex-col gap-4">
                <div className="flex items-center justify-between gap-2">
                  <p className="flex-1">
                    {exp.id === "early-internships" ? (
                      <>
                        Where my commercial development kicked off. Interning
                        directly under{" "}
                        <a
                          href="https://vickyjay.vercel.app"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-foreground hover:underline inline-flex items-center gap-0.5"
                        >
                          <span>VickyJay</span>
                          <ArrowUpRight className="size-3 text-muted-foreground" />
                        </a>{" "}
                        and taking on contract work, I built and shipped
                        production frontend features across fintech platforms,
                        hospital search systems, fashion events, and merchant
                        dashboards. I was directly responsible for implementing
                        the UI, integrating APIs, and ensuring reliable user
                        flows.
                      </>
                    ) : (
                      exp.description
                    )}
                  </p>
                </div>

                {exp.website && (
                  <div>
                    <a
                      href={exp.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      <span>Visit platform</span>
                      <ArrowUpRight className="size-3" />
                    </a>
                  </div>
                )}

                {/* Mobile Projects Display */}
                {exp.projects && exp.projects.length > 0 && (
                  <div className="w-full pt-1">
                    {exp.projects.length > 1 ? (
                      <ProjectParallaxCarousel projects={exp.projects} />
                    ) : (
                      (() => {
                        const proj = exp.projects[0];
                        const MobileCard = (
                          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg bg-muted/20 group">
                            {proj.image ? (
                              proj.isPortrait ? (
                                <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-black/20">
                                  <Image
                                    src={proj.image}
                                    alt={proj.title}
                                    fill
                                    className="object-cover blur-2xl opacity-40 scale-125"
                                    unoptimized
                                  />
                                  <div className="relative h-full w-auto aspect-[9/16] py-1.5 z-10">
                                    <Image
                                      src={proj.image}
                                      alt={proj.title}
                                      fill
                                      className="object-contain rounded-md shadow-lg"
                                      unoptimized
                                    />
                                  </div>
                                </div>
                              ) : (
                                <Image
                                  src={proj.image}
                                  alt={proj.title}
                                  fill
                                  className="object-contain"
                                  unoptimized
                                />
                              )
                            ) : (
                              <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                                <span className="font-semibold text-xs text-foreground">
                                  {proj.title}
                                </span>
                              </div>
                            )}

                            <div
                              className="absolute inset-x-0 -bottom-[1px] z-20 pt-8 pb-2.5 px-3 flex flex-col justify-end pointer-events-none backdrop-blur-md"
                              style={{
                                maskImage:
                                  "linear-gradient(to top, black 0%, black 50%, transparent 100%)",
                                WebkitMaskImage:
                                  "linear-gradient(to top, black 0%, black 50%, transparent 100%)",
                                background:
                                  "linear-gradient(to top, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.5) 50%, transparent 100%)",
                              }}
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="font-bold text-white text-xs drop-shadow-sm group-hover:underline">
                                  {proj.title}
                                </span>
                                {proj.link && (
                                  <span className="text-[10px] text-zinc-300 font-mono opacity-80">
                                    ↗
                                  </span>
                                )}
                              </div>
                              <span className="text-zinc-100 text-[11px] leading-snug mt-0.5 line-clamp-1 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]">
                                {proj.description}
                              </span>
                            </div>
                          </div>
                        );

                        return proj.link ? (
                          <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block cursor-pointer"
                          >
                            {MobileCard}
                          </a>
                        ) : (
                          MobileCard
                        );
                      })()
                    )}
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
