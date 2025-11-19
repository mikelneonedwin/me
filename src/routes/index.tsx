import About from "@/components/about";
import ExperienceMarquee from "@/components/home/work-marquee";
import Profile from "@/components/profile";
import Stack from "@/components/stack";
import Experiences from "@/components/work-display";
import { personalProjects } from "@/constants/personal-projects";
import { workExperiences } from "@/constants/work-experiences";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  const allExperiences = [...workExperiences, ...personalProjects];
  return (
    <>
      <Profile />
      <div className="mt-12">
        <About />
        <Stack />
        <Experiences
          title="Work Experience"
          experiences={workExperiences}
          more={{ id: "work-experience", count: 4, to: "/work-experience" }}
        />
        <ExperienceMarquee experiences={allExperiences} />
        <Experiences
          title="Personal Projects"
          experiences={personalProjects}
          more={{ id: "projects", count: 4, to: "/projects" }}
        />
        {/* <Contact /> */}
      </div>
    </>
  );
}
