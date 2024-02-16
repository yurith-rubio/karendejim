"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";

const CLIENTS = [
  {
    img: "coinbase.svg",
    alt: "coinbase",
  },
  {
    img: "spotify.svg",
    alt: "spotify",
  },
  {
    img: "pinterest.svg",
    alt: "pinterest",
  },
  {
    img: "anhalt-hochschule.svg",
    alt: "https://www.hs-anhalt.de/startseite.html",
  },
  {
    img: "itonics.svg",
    alt: "https://www.itonics-innovation.de/",
  },
  {
    img: "netflix.svg",
    alt: "netflix",
  },
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <Typography variant="h6" color="blue-gray" className="mb-8" placeholder={undefined} >
          My awesome clients
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <a href={logo.alt} key={key}>
            <Image
              key={key}
              alt={logo.img.slice(0, -4)}
              width={768}
              height={768}
              className="w-40"
              src={`/logos/logo-${ logo.img }`}
            />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Clients;
