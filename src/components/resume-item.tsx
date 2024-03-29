import { Card, Typography } from "@material-tailwind/react";
import Image from "next/image";

interface ResumeItemProps {
  icon: { src: string };
  children: React.ReactNode;
}

export function ResumeItem({ icon: icon, children }: ResumeItemProps) {
  return (
    <div className="flex items-start gap-4">
      {/* @ts-ignore */}
      <Card
        className="shadow-none bg-white text-crema-500 shrink-0 items-center justify-center !rounded-lg" >
        {/* <Icon className="h-6 w-6" strokeWidth={2} /> */}
        <Image src={icon.src} width={30} height={30} alt={icon.src} />
      </Card>
      {/* @ts-ignore */}
      <Typography className="w-full font-normal !text-gray-500" >
        {children}
      </Typography>
    </div>
  );
}

export default ResumeItem;
