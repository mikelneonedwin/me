import About from "@/components/about";
import Contact from "@/components/contact";
import Profile from "@/components/profile";
import ProjectCard from "@/components/project-card";
import Stack from "@/components/stack";
import Stats from "@/components/stats";
import Experiences from "@/components/work-display";
import { personalProjects } from "@/constants/personal-projects";
import { workExperiences } from "@/constants/work-experiences";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      {/* 1. Hero Section */}
      <Profile />

      {/* 2. Stats / Social Proof */}
      <Stats />

      {/* 3. About */}
      <About />

      {/* 4. Tech Stack Marquee */}
      <Stack />

      {/* 5. Work Experience */}
      <Experiences
        title="Work Experience"
        experiences={workExperiences}
        more={{ id: "work-experience", count: 4, to: "/work-experience" }}
      />

      {/* 6. Featured Projects */}
      <section id="projects" className="py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">
            <span className="squiggly-underline">Featured Projects</span>
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {personalProjects.slice(0, 4).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <a
            href="/projects"
            className="text-primary hover:underline underline-offset-4"
          >
            View all {personalProjects.length} projects →
          </a>
        </motion.div>
      </section>

      {/* 7. Contact Footer */}
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
