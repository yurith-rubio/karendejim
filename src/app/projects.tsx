"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import Htwo from "@/components/h2";
import { title } from "process";
import PROJECTS from "@/lib/projects";


export function Projects() {
  return (
    <section className="py-28 px-8" id="projects">
      <div className="container mx-auto mb-20 text-center">
        <Htwo >
          My projects
        </Htwo>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
