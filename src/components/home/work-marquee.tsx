import { cn } from "@/lib/utils";
import type { Experience } from "@/types";
import Marquee from "react-fast-marquee";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";

export default function ExperienceMarquee({
  experiences,
  className,
}: {
  experiences: Experience[];
  className?: string;
}) {
  const validExperiences = experiences.filter((exp) => exp.icon && exp.company);
  if (!validExperiences.length) return null;
  return (
    <div id="stack" className={cn("py-8", className)}>
      <Marquee autoFill pauseOnHover speed={50} direction="left">
        {validExperiences.map((exp, index) => (
          <Button
            key={index}
            variant="outline"
            size="lg"
            asChild
            className="mx-2 flex items-center"
          >
            <a href={exp.website ?? "#"} target="_blank">
              <Avatar className="w-5 h-5 mr-2">
                <AvatarImage src={exp.icon} />
                <AvatarFallback>{exp.company?.charAt(0)}</AvatarFallback>
              </Avatar>
              {exp.company}
            </a>
          </Button>
        ))}
      </Marquee>
    </div>
  );
}
