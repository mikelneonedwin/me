import { Button } from "@/components/ui/button";
import type { Experience } from "@/types";
import { Icon } from "@iconify/react";
import { Link, type LinkOptions } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ChevronRight, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

type Props = {
  title: string;
  more?: {
    id: string;
    count: number;
    to: LinkOptions["to"];
  };
  experiences: Experience[];
  showTimeline?: boolean;
};

function Experiences({ more, title, experiences, showTimeline = true }: Props) {
  const displayExperiences = more
    ? experiences.slice(0, more.count)
    : experiences;

  return (
    <section id={more?.id} className="py-12">
      {/* Header with squiggly underline */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          <span className="squiggly-underline">{title}</span>
        </h2>
        {more && experiences.length > more.count && (
          <Button asChild variant="ghost" className="group">
            <Link to={more.to}>
              View All
              <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        )}
      </div>

      {/* Timeline layout */}
      <div className={showTimeline ? "relative pl-8 md:pl-12" : ""}>
        {/* Vertical timeline line */}
        {showTimeline && (
          <div className="absolute left-0 md:left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
        )}

        <div className="space-y-10">
          {displayExperiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              {showTimeline && (
                <div className="absolute -left-[37px] top-1.5 timeline-dot" />
              )}

              <div className="group">
                {/* Date */}
                <p className="text-sm text-primary font-medium mb-2">
                  {experience.date}
                </p>

                {/* Title row */}
                <div className="flex items-start gap-3 mb-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {experience.title}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    {experience.website && (
                      <a
                        href={experience.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="Visit website"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    {experience.github && (
                      <a
                        href={experience.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        title="View source"
                      >
                        <Icon icon="mdi:github" className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Company & Location */}
                {(experience.company || experience.location) && (
                  <p className="text-sm text-muted-foreground mb-3">
                    {experience.company}
                    {experience.company && experience.location && " • "}
                    {experience.location}
                  </p>
                )}

                {/* Description */}
                <ul className="space-y-2 text-foreground/90 mb-4">
                  {experience.description.map((desc, idx) => (
                    <li key={idx} className="flex gap-2 text-sm">
                      <span className="text-primary mt-1.5 shrink-0">▪</span>
                      <span>{desc}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack pills */}
                {experience.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs font-mono bg-secondary/50 border-border hover:border-primary/50 transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
