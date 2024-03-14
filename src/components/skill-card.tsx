import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: string;
  children: React.ReactNode;
}

export function SkillCard({ icon: icon, title, children }: SkillCardProps) {
  return (
    <Card color="transparent" shadow={false} placeholder={undefined} >
      <CardBody className="grid justify-center text-center" placeholder={undefined} >
        {/* <img src={icon} className="mx-auto h-12 w-12" alt={icon} /> */}
        {/* <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-deep-purple-500 p-2.5 text-white shadow">
          <Icon className="h-6 w-6" strokeWidth={2} />
        </div> */}
        <Typography variant="h5" color="blue-gray" className="mb-2" placeholder={undefined} >
          {title}
        </Typography>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
