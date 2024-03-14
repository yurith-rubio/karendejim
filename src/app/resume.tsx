"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "../components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Bachelor of Graphic Design",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Master in Intgrated Design",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Technology Degree",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="deep-purple" placeholder={undefined} >
            Education
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500" placeholder={undefined} >
            Highly skilled and creative Web Developer with 5+ years of
            experience in crafting visually stunning and functionally robust
            websites and web applications.
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
            onClick={() => window.open("https://drive.google.com/file/d/19i_d8gHl8hO_nIoPkFo7eGVkIPFRe17i/view?pli=1", "_blank")}
            placeholder={undefined} 
          >
            Open Resume
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
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
