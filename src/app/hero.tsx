"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import Button from "@/components/button";

function Hero() {
  return (
    <header id="top" className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <h1
            className="block antialiased tracking-normal text-deep-purple-500 mb-4 lg:text-6xl !leading-tight text-5xl mb-4 lg:text-6xl !leading-tight text-3xl"
          >
            Karen Delgado
          </h1>
          {/* @ts-ignore */}
          <h2 className="h2-hero block font-semibold antialiased tracking-normal text-3xl leading-snug text-gray-800 pb-3">
            I love to use the power of design to make <br></br> an idea talk by itself.
          </h2>
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
        <div className="flex justify-center">
          <Image
            width={417}
            height={632}
            alt="team work"
            src="/image/karen_portrait.jpg"
            className="rounded-xl object-cover"
            loading = 'eager'
          />
        </div>
      </div>
    </header>
  );
}

export default Hero;
