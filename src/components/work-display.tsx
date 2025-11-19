import { Button } from "@/components/ui/button";
import { workExperiences } from "@/constants/work-experiences";
import type { Experience } from "@/types";
import { Icon } from "@iconify/react";
import { Link, type LinkOptions } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

type Props = {
  title: string;
  more?: {
    id: string;
    count: number;
    to: LinkOptions["to"];
  };
  experiences: Experience[];
};

function Experiences({ more, title, experiences }: Props) {
  return (
    <section id={more?.id} className="py-8 space-y-3">
      {/* Header + View All button */}
      <div className="flex items-start">
        <h2 className="text-2xl font-bold leading-tight">{title}</h2>
        {more && workExperiences.length > more.count && (
          <Button
            asChild
            size="icon"
            variant="ghost"
            className="-translate-y-0.5"
          >
            <Link to={more.to} title={`View all ${title}s`}>
              <ExternalLink />
            </Link>
          </Button>
        )}
      </div>

      {/* Preview list */}
      <div className="space-y-8">
        {experiences.slice(0, more?.count).map((experience, index) => (
          <div className="md:flex items-start w-full" key={index}>
            <p className="text-sm text-muted-foreground md:w-1/5">
              {experience.date}
            </p>
            <div className="md:w-4/5">
              <div className="mb-4">
                {/* Title */}
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {experience.title}
                  </h3>

                  {experience.website && (
                    <a
                      href={experience.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title="Open project website"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}

                  {experience.github && (
                    <a
                      href={experience.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                      title="View source on GitHub"
                    >
                      <Icon icon="mdi:github" className="w-4 h-4" />
                    </a>
                  )}
                </div>
                {/* Company & Location */}
                {(experience.company || experience.location) && (
                  <p className="text-sm text-muted-foreground">
                    {experience.company && <span>{experience.company}</span>}
                    {experience.company && experience.location && (
                      <span> • </span>
                    )}
                    {experience.location && <span>{experience.location}</span>}
                  </p>
                )}
              </div>

              {/* Description & Technologies */}
              <ul className="list-disc list-outside ml-5 space-y-2 text-foreground">
                {experience.description.map((desc, idx) => (
                  <li key={idx}>{desc}</li>
                ))}
                {experience.technologies.length > 0 && (
                  <li className="font-medium">
                    Tech: {experience.technologies.join(", ")}
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
