"use client";

import Image from "next/image";

const CLIENTS = [
  {
    img: "MarroqueriaMarioHernandez.jpg",
    alt: "https://www.mariohernandez.com.co/",
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
    img: "StyleandImageStudio.svg",
    alt: "https://styleandimagestudio.com/",
  },
];

export function Clients() {
  return (
    <section className="px-8 py-28">
      <div className="container mx-auto text-center">
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTS.map((logo, key) => (
            <a href={logo.alt} key={key}>
            <Image
              key={key}
              alt={logo.img.slice(0, -4)}
              width={768}
              height={768}
              className="w-60 pl-5 pr-5"
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
