"use client";

import { Typography } from "@material-tailwind/react";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: "/icons/illustrator.svg",
    title: "Adobe Illustrator",
    children:
      "Creating beautiful and functional web experiences is my forte. Using the latest technologies and best practices, I design and build websites that captivate and engage users.",
  },
  {
    icon: "/icons/photoshop.svg",
    title: "Adobe Photoshop",
    children:
      " I specialize in creating responsive and intuitive mobile apps that work seamlessly across iOS & Android devices. From concept to deployment, I handle every stage of the development process.",
  },
  {
    icon: "/icons/in-design.svg",
    title: "InDesign",
    children:
      "I'm well-versed in the industry's most popular frontend technologies, including HTML5, CSS3, JavaScript, and frameworks like React and React Native.",
  },
  {
    icon: "/icons/after-effects.svg",
    title: "Adobe After Effects",
    children:
      "Performance matters. I optimize websites and apps for speed, ensuring your users enjoy a fast and responsive experience, which in turn boosts user satisfaction and SEO rankings.",
  },
  {
    icon: "/icons/figma.svg",
    title: "Figma",
    children:
      "My development goes hand-in-hand with an eye for design. I create user interfaces that are not only functional but also aesthetically pleasing, providing a seamless and enjoyable user journey.",
  },
  {
    icon: "/icons/canva.svg",
    title: "Canva",
    children:
      "I rigorously test and debug applications to guarantee a bug-free and secure environment for users. Your peace of mind is as important to me as the functionality of your project.",
  },
];

export function Tools() {
  return (
    <section className="px-8" id="tools">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="deep-purple" className="mb-2 font-bold uppercase" placeholder={undefined} >
          Tools
        </Typography>
        <Typography variant="h1" color="deep-purple" className="mb-4" placeholder={undefined} >
          What I use
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Tools;
