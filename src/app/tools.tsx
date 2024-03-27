"use client";

import { Typography } from "@material-tailwind/react";
import { SkillCard } from "@/components";
import Htwo from "@/components/h2";

const SKILLS = [
  {
    icon: "/icons/illustrator.svg",
    title: "Adobe Illustrator",
  },
  {
    icon: "/icons/photoshop.svg",
    title: "Adobe Photoshop",
  },
  {
    icon: "/icons/in-design.svg",
    title: "InDesign",
  },
  {
    icon: "/icons/after-effects.svg",
    title: "Adobe After Effects",
  },
  {
    icon: "/icons/premiere.svg",
    title: "Adobe Premiere",
  },
  {
    icon: "/icons/lightroom.svg",
    title: "Adobe Lightroom",
  },
  {
    icon: "/icons/figma.svg",
    title: "Figma",
  },
  {
    icon: "/icons/canva.svg",
    title: "Canva",
  },
  {
    icon: "/icons/chatgpt.svg",
    title: "OpenAI",
  },
];

export function Tools() {
  return (
    <section className="px-8" id="tools">
      <div className="container mx-auto mb-20 text-center">
        <Htwo >
          The tools I use
        </Htwo>
      </div>
      <div className="container mx-auto grid grid-cols-2 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Tools;
