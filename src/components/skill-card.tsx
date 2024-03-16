import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export function SkillCard({ icon: icon, title, children }: SkillCardProps) {
  return (
    <>
    {/* @ts-ignore */}
    <Card color="transparent" shadow={false} >
      {/* @ts-ignore */}
      <CardBody className="grid justify-center text-center" >
        <img src={icon} alt={title} className="w-14 h-14 mb-4 m-auto" />
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
