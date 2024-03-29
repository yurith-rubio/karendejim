import { useState, Suspense } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Button } from "./button";
import Image from "next/image";
import Loading from "../app/loading";

import Link from 'next/link'

interface ProjectCardProps {
  title: string;
  cover: string;
}


export function ProjectCard({ cover, title }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(!open);

  const title_link = title.replace(/\s+/g, '-').toLowerCase();
  return (
    <>
    {/* @ts-ignore */}
    <Card color="transparent" shadow={false} >
      {/* @ts-ignore */}
      <CardHeader floated={false} className="mx-0 mt-0 mb-6 h-48" >
        <Link href={`/projects/${title_link}`}>
          <Image
            src={cover}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover pointer"
          />
        </Link>
      </CardHeader>
      {/* @ts-ignore */}
      <CardBody className="p-0" >
        {/* @ts-ignore */}
          <Typography variant="h5" className="mb-2" color="deep-purple">
            {title}
        </Typography>
        {/* @ts-ignore */}
          <Link href={`/projects/${title_link}`}>
            <Button color="deep-purple" ripple="light" btn="secondary" >
              See project
            </Button>
          </Link>
        </CardBody>
      </Card>
    </>
  );
}

export default ProjectCard;
