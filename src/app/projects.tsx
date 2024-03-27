"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";
import Htwo from "@/components/h2";

const PROJECTS = [
  {
    img: "/image/cover-Surrealistic.jpg",
    title: "Surrealistic Collage Art",
    desc: "Embark on a journey of surreal creativity! From 2020 to 2023, I curated an enchanting collection of surreal collages for ITONICS' Blog channel, exploring innovation management, foresight, and strategy. These captivating visuals not only enhanced the channel's appeal but also became intrinsic to the company's identity. With remarkable engagement rates, they have evolved beyond their initial role, sought after by both external clients and internal stakeholders for various platforms and initiatives. Discover how these timeless creations continue to influence narratives and ignite imaginations today.",
  },
  {
    img: "/image/cover-Insurance.png",
    title: "Insurance Trend Report",
    desc: `The inaugural B2C insurance report marks the beginning of a compelling Trend report series by ITONICS. It explores contemporary trends and future scenarios to uncover innovation opportunities across industries. 

    Designed for digital platforms, it utilizes a graphic style featuring human and urban-themed photographs, consistent with the company's brand colors. Each spread is carefully crafted to integrate photography and content seamlessly, delivering a cohesive message. This report is housed within ITONICS' digital resource center, serving as a valuable asset for enhancing innovation skills.
    `,
  },
  {
    img: "/image/cover-Sustainability.png",
    title: "Sustainability Trend Report",
    desc: "January 2020 marked the start of the Decade of Action, a pivotal time for environmentalists, aligned with the UN 2030 Agenda for Sustainable Development. This report, the second installment of the Trend report series by ITONICS, underscores the urgency of innovative solutions amid climate change. Carefully curated images in this report center on activism and critique of the man-made climate crisis, maintaining aesthetic appeal. Informative infographics and clear text hierarchies prioritize key information.",
  },
  {
    img: "/image/cover-Social-Media.jpg",
    title: "Social Media",
    desc: `My time within marketing teams has been a masterclass in the pivotal role social channels play for any company. Crafting content for these platforms isn't just about aesthetics—it's about stepping into the shoes of the audience we aim to captivate. I've discovered that the same visual style doesn't always resonate across all companies and contexts. Here, I proudly present a diverse collection of social media pieces, each meticulously tailored to engage and inspire varied audiences.`,
  },
  {
    img: "/image/cover-Posters.png",
    title: "Design Posters",
    desc: `This internal project was a thrilling opportunity to explore alternative ways of communicating the benefits of ITONICS Foresight product. Tasked with creating posters showcasing the advantages of various ITONICS products, I seized the chance to highlight the trend anticipation, emerging opportunity identification, and effective risk management features of the Foresight product. Taking a storytelling approach, I aimed to develop something original and extraordinary. The resulting posters were offered as free downloadable material for office decoration or unrestricted use.`,
  },
  {
    img: "/image/cover-Illustrations.png",
    title: "Set of Illustrations for ITONICS",
    desc: `These illustrations serve as visual representations of ITONICS' array of software products. Combining software screenshots with vectorial shapes, they exude a dynamic and attention-grabbing aesthetic. Positioned as the hero section on each product page of the website, they provided an engaging introduction to each software offering.`,
  },
  {
    img: "/image/cover-Brochure.jpg",
    title: "Presentation - Brochure Design",
    desc: ``,
  },
  {
    img: "/image/cover-Catalogue.png",
    title: "Catalogue Design",
    desc: ``,
  },
  {
    img: "/image/cover-Premio.png",
    title: "9° Design Price MARIO HERNANDEZ",
    desc: ``,
  },
  {
    img: "/image/cover-Traveling.png",
    title: "Traveling guide 'Viajes con estilo'",
    desc: ``,
  },
];

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
