import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Experience } from "@/types";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

type Props = {
  project: Experience;
  index: number;
};

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative p-6">
        {/* Date & Title */}
        <p className="text-xs text-primary font-medium mb-2">{project.date}</p>
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
          {project.title}
        </h3>

        {/* Company/Location */}
        {(project.company || project.location) && (
          <p className="text-sm text-muted-foreground mb-4">
            {project.company}
            {project.company && project.location && " • "}
            {project.location}
          </p>
        )}

        {/* Description (first item only for cards) */}
        <p className="text-sm text-foreground/80 mb-4 line-clamp-2">
          {project.description[0]}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-mono">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 4}
            </Badge>
          )}
        </div>

        {/* Action buttons */}
        <div className="flex gap-3">
          {project.website && (
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                View Project
              </a>
            </Button>
          )}
          {project.github && (
            <Button asChild size="sm" variant="outline">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon icon="mdi:github" className="w-3.5 h-3.5 mr-1.5" />
                View Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
}
