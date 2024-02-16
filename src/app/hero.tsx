"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
            placeholder={undefined}
          >
            Karen <span style={{fontWeight: 100}}>Delgado</span>
          </Typography>
          {/* @ts-ignore */}
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            I love to use the power of design to make an idea talk by itself.
          </Typography>
          <div className="grid">
            <a href="#projects">
              {/* @ts-ignore */}
              <Button color="purple" className="w-full px-4 md:w-[12rem]">
                See projects
              </Button>
            </a>
          </div>
          {/* @ts-ignore */}
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/karen-delgado-picture.jpg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
