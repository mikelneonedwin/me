import ProjectCard from "@/components/project-card";
import { personalProjects } from "@/constants/personal-projects";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/projects")({
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="py-12">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="squiggly-underline">Projects</span>
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl">
          A collection of personal projects, hackathon wins, and side
          experiments that showcase my skills and interests.
        </p>
      </div>

      {/* Project cards grid */}
      <div className="grid gap-6 md:grid-cols-2">
        {personalProjects.map((project, index) => (
          <ProjectCard key={project.title} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
