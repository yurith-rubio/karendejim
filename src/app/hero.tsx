"use client";

import Image from "next/image";
import {Typography } from "@material-tailwind/react";
import Button from "@/components/button";
import { useInView } from "react-intersection-observer";

function Hero() {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  
  return (
    <header className="bg-white p-8" ref={ref}>
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className={`${inView ? "view" : "transparent"} row-start-2 lg:row-auto`}>
          {/* @ts-ignore */}
          <Typography
            variant="h1"
            color="deep-purple"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Karen Delgado
          </Typography>
          {/* @ts-ignore */}
          <Typography variant="h3" color="deep-purple" placeholder={undefined}>
            I love to use the power of design to make an idea talk by itself.
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I’m a graphic designer based in Germany for the last six years. With over ten years of experience, I specialize in both B2B and B2C companies, working together with Marketing and Creative teams. Collaborating with people from diverse cultures has given me the opportunity to enhance my communication skills and adaptability.
          </Typography>
          <div className="grid">
            <a href="#projects">
              {/* @ts-ignore */}
              <Button btn="primary">
                See projects
              </Button>
            </a>
          </div>
          {/* @ts-ignore */}
        </div>
        <Image
          width={517}
          height={784}
          alt="team work"
          src="/image/karen_portrait.jpg"
          className="rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
