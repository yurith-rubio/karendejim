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

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

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
          className="h-full w-full object-cover"
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
        <Button onClick={handleOpen} variant="gradient" color="purple" placeholder={undefined} >
          See poject
        </Button>
      </CardBody>
      
      <Dialog open={open} handler={handleOpen} placeholder={undefined} >
          <DialogHeader placeholder={undefined} >Its a simple dialog.</DialogHeader>
          <DialogBody placeholder={undefined} >
            The key to more success is to have a lot of pillows. Put it this way,
            it took me twenty five years to get these plants, twenty five years of
            blood sweat and tears, and I&apos;m never giving up, I&apos;m just
            getting started. I&apos;m up to something. Fan luv.
            <img
            src={img}
            alt={title}
            width={768}
            height={768}
            className="h-full w-full object-cover"
          />
          </DialogBody>
          <DialogFooter placeholder={undefined} >
            <Button variant="gradient" color="deep-purple" onClick={handleOpen} placeholder={undefined} >
              <span>Confirm</span>
            </Button>
          </DialogFooter>
        </Dialog>
    </Card>

  );
}

export default ProjectCard;
