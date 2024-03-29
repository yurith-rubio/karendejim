import { Card, CardBody, Typography } from "@material-tailwind/react";
import Image from "next/image";

interface SkillCardProps {
  title: string;
  icon: string;
}

export function SkillCard({ icon: icon, title }: SkillCardProps) {
  return (
    <>
    {/* @ts-ignore */}
    <Card color="transparent" shadow={false} >
      {/* @ts-ignore */}
      <CardBody className="grid justify-center text-center" >
        <Image src={icon} alt={title} className="mb-4 m-auto" width={60} height={60}/>
        {/* @ts-ignore */}
        <Typography color="blue-gray" className="mb-2 mt-3 font-normal !text-gray-500" >
          {title}
        </Typography>
      </CardBody>
    </Card>
    </>
  );
}

export default SkillCard;
