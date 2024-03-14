import { useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Image from "next/image";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

const IMAGES: any = {
  "Surrealistic Collage Art": [
    "/project-images/Surrealistic-1.jpg",
    "/project-images/Surrealistic-2.jpg",
    "/project-images/Surrealistic-3.jpg",
    "/project-images/Surrealistic-4.jpg",
    "/project-images/Surrealistic-5.jpg",
    "/project-images/Surrealistic-6.jpg",
    "/project-images/Surrealistic-7.jpg",
    "/project-images/Surrealistic-8.jpg",
    "/project-images/Surrealistic-9.jpg",
    "/project-images/Surrealistic-10.jpg",
    "/project-images/Surrealistic-11.jpg",
    "/project-images/Surrealistic-12.jpg",
    "/project-images/Surrealistic-13.jpg",
    "/project-images/Surrealistic-14.jpg",
    "/project-images/Surrealistic-15.jpg",
    "/project-images/Surrealistic-16.jpg",
    "/project-images/Surrealistic-17.jpg",
    "/project-images/Surrealistic-18.jpg",
    "/project-images/Surrealistic-19.jpg",
    "/project-images/Surrealistic-20.jpg",
    "/project-images/Surrealistic-21.jpg",
    "/project-images/Surrealistic-22.jpg",
    "/project-images/Surrealistic-23.jpg",
    "/project-images/Surrealistic-24.jpg",
    "/project-images/Surrealistic-25.jpg",
    "/project-images/Surrealistic-26.jpg",
    "/project-images/Surrealistic-27.jpg",
    "/project-images/Surrealistic-28.jpg",
    "/project-images/Surrealistic-29.jpg",
    "/project-images/Surrealistic-30.jpg",
    "/project-images/Surrealistic-31.jpg",
    "/project-images/Surrealistic-32.jpg",
    "/project-images/Surrealistic-33.jpg",
    "/project-images/Surrealistic-34.jpg",
    "/project-images/Surrealistic-35.jpg",
    "/project-images/Surrealistic-36.jpg",
  ],
  "Insurance Trend Report": [
    "/project-images/Insurance-1.jpg",
    "/project-images/Insurance-2.jpg",
    "/project-images/Insurance-3.jpg",
    "/project-images/Insurance-4.jpg",
    "/project-images/Insurance-5.jpg",
    "/project-images/Insurance-6.jpg",
    "/project-images/Insurance-7.jpg",
    "/project-images/Insurance-8.jpg",
    "/project-images/Insurance-9.jpg",
    "/project-images/Insurance-10.jpg",
    "/project-images/Insurance-11.jpg",
    "/project-images/Insurance-12.jpg",
  ],
  "Sustainability Trend Report": [
    "/project-images/Sustainability-1.jpg",
    "/project-images/Sustainability-2.jpg",
    "/project-images/Sustainability-3.jpg",
    "/project-images/Sustainability-4.jpg",
    "/project-images/Sustainability-5.jpg",
    "/project-images/Sustainability-6.jpg",
    "/project-images/Sustainability-7.jpg",
    "/project-images/Sustainability-8.jpg",
    "/project-images/Sustainability-9.jpg",
    "/project-images/Sustainability-10.jpg",
    "/project-images/Sustainability-11.jpg",
  ],
  "Social Media": [
    "/project-images/Social-1.png",
    "/project-images/Social-2.png",
    "/project-images/Social-3.png",
    "/project-images/Social-4.png",
    "/project-images/Social-5.png",
    "/project-images/Social-6.png",
    "/project-images/Social-7.png",
    "/project-images/Social-8.jpg",
    "/project-images/Social-9.jpg",
    "/project-images/Social-10.jpg",
    "/project-images/Social-11.jpg",
    "/project-images/Social-12.png",
    "/project-images/Social-13.png",
    "/project-images/Social-14.png",
  ],
  "Design Posters": [
    "/project-images/Posters-1.jpg",
    "/project-images/Posters-2.jpg",
  ],
  "Set of Illustrations for ITONICS": [
    "/project-images/Illustrations-1.png",
    "/project-images/Illustrations-2.gif",
    "/project-images/Illustrations-3.png",
    "/project-images/Illustrations-4.png",
    "/project-images/Illustrations-5.png",
    "/project-images/Illustrations-6.png",
    "/project-images/Illustrations-7.png",
  ],
  "Presentation - Brochure Design": [
    "/project-images/Brochure-1.jpg",
    "/project-images/Brochure-2.jpg",
    "/project-images/Brochure-3.jpg",
    "/project-images/Brochure-4.jpg",
    "/project-images/Brochure-5.jpg",
    "/project-images/Brochure-6.jpg",
    "/project-images/Brochure-7.jpg",
    "/project-images/Brochure-8.jpg",
    "/project-images/Brochure-9.jpg",
    "/project-images/Brochure-10.jpg",
    "/project-images/Brochure-11.jpg",
    "/project-images/Brochure-12.jpg",
    "/project-images/Brochure-13.jpg",
    "/project-images/Brochure-14.jpg",
    "/project-images/Brochure-15.jpg",
    "/project-images/Brochure-16.jpg",
    "/project-images/Brochure-17.jpg",
    "/project-images/Brochure-18.jpg",
    "/project-images/Brochure-19.jpg",
    "/project-images/Brochure-20.jpg",
  ],
  "Catalogue Design": [
    "/project-images/Catalogue-1.jpg",
    "/project-images/Catalogue-2.jpg",
    "/project-images/Catalogue-3.jpg",
    "/project-images/Catalogue-4.jpg",
  ],
  "9° Design Price MARION HERNANDEZ": [
    "/project-images/Premio-1.png",
    "/project-images/Premio-2.jpg",
    "/project-images/Premio-3.jpg",
    "/project-images/Premio-4.jpg",
    "/project-images/Premio-5.jpg",
  ],
  "Traveling guide 'Viajes con estilo'": [
    "/project-images/Traveling-1.jpg",
    "/project-images/Traveling-2.jpg",
    "/project-images/Traveling-3.jpg",
    "/project-images/Traveling-4.jpg",
    "/project-images/Traveling-5.jpg",
    "/project-images/Traveling-6.jpg",
  ]
};

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <Card color="transparent" shadow={false} placeholder={undefined} >
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48" placeholder={undefined} >
        <img
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover pointer"
          onClick={handleOpen}
        />
      </CardHeader>
      <CardBody className="p-0" placeholder={undefined} >
        {/* <a
          href="#"
          className="deep-purple hover:purple-500"
        > */}
          <Typography variant="h5" className="mb-2" color="deep-purple" placeholder={undefined} >
            {title}
          </Typography>
        {/* </a> */}
        <Typography className="mb-6 font-normal !text-gray-500" placeholder={undefined} >
          {desc}
        </Typography>
        {/* <Button color="deep-purple" size="sm">
          see details
        </Button> */}
        <Button onClick={handleOpen} color="deep-purple" placeholder={undefined} >
          See poject
        </Button>
      </CardBody>
      
      <Dialog open={open} handler={handleOpen} placeholder={undefined} size="xxl">
        <DialogHeader placeholder={undefined} className="bg-gray-50 flex w-full fixed top-0 z-10">
          <Button color="deep-purple" className="mr-auto ml-auto" onClick={handleOpen} placeholder={undefined} >
                <span>Close</span>
          </Button>
        </DialogHeader>
        <DialogBody placeholder={undefined} className="bg-gray-50 grid gap-9 p-8">
          <Typography variant="h2" color="deep-purple" className="text-xl mb-4 max-w-3xl mr-auto ml-auto pt-16" placeholder={undefined} >
            The key to more success is to have a lot of pillows. Put it this way,
            it took me twenty five years to get these plants, twenty five years of
            blood sweat and tears, and I&apos;m never giving up, I&apos;m just
            getting started. I&apos;m up to something. Fan luv.
          </Typography>
          
          
          {IMAGES[title] ?
            IMAGES[title].map((url: string, key: number) => (
              <Image
                key={key}
                src={url}
                alt={title}
                width={768}
                height={768}
                className="object-cover rounded-xl mr-auto ml-auto"
              />
            ))
            : 
            <Image
                src={img}
                alt={title}
                width={768}
                height={768}
                className="object-cover rounded-xl mr-auto ml-auto"
            />
          }
          </DialogBody>
          <DialogFooter placeholder={undefined} className="bg-gray-50" >
            <Button color="deep-purple" className="mr-auto ml-auto" onClick={handleOpen} placeholder={undefined} >
              <span>Close</span>
            </Button>
          </DialogFooter>
        </Dialog>
    </Card>

  );
}

export default ProjectCard;
