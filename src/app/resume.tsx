"use client";

import { Typography } from "@material-tailwind/react";
import { Button } from '../components/button'
import Htwo from "@/components/h2";

import {
  ChartBarIcon,
  PuzzlePieceIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import MasterIcon from "/public/icons/master-integrated-design.svg";
import BachelorIcon from "/public/icons/bachelor-graphic-design.svg";
import VideoIcon from "/public/icons/video-multimedia.svg";

import { ResumeItem } from "../components";

const RESUME_ITEMS = [
  {
    icon: MasterIcon,
    children: "Master in Integrated Design",
  },
  {
    icon: BachelorIcon,
    children: "Bachelor of Graphic Design",
  },
  {
    icon: VideoIcon,
    children: "Video & Multimedia Technology Degree",
  },
];

function getResume() {
  return window.open("https://drive.google.com/file/d/1AQKPrUFAzrfeqBFEPjgVb41rjMpFH5PJ/view?usp=sharing", "_blank");
}

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid lg:flex lg:items-center lg:justify:center w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Htwo >
            Education
          </Htwo>
          {/* @ts-ignore */}
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500" >
            Highly skilled and creative Graphic Designer with 5+ years of
            experience in crafting visually stunning and impactful designs.
          </Typography>
          {/* @ts-ignore */}
          <Button onClick={getResume} btn="primary">
            Open Resume
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-white"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
