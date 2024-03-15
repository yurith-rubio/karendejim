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
        {/* @ts-ignore */}
        <Typography variant="h5" color="blue-gray" className="mb-2" >
          {title}
        </Typography>
      </CardBody>
    </Card>
    </>
  );
}

export default SkillCard;
