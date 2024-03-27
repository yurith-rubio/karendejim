import React from "react";
import {
  Collapse,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";
import { Button } from "./button";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
    {/* @ts-ignore */}
    <div className="block w-full max-w-screen rounded-xl py-4 px-8 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border-white/80 bg-white text-white border-0 sticky top-0 z-50" >
      <div className="container mx-auto flex items-center justify-between">
        {/* @ts-ignore */}
          
        <a href="#top" className="karen-nav text-xl text-deep-purple-500">
          Karen Delgado
        </a>
      
        <div className="hidden items-center gap-2 lg:flex">
          <a href="https://drive.google.com/file/d/1AQKPrUFAzrfeqBFEPjgVb41rjMpFH5PJ/view?usp=sharing" target="_blank">
            {/* @ts-ignore */}
            <Typography className="text-rosa-500 font-semibold pr-5">
              Resume
            </Typography>
          </a>
          <a href="#contact">
            {/* @ts-ignore */}
            <Button btn="primary" >Contact me</Button>
          </a>
        </div>
        {/* @ts-ignore */}
        <IconButton
          variant="text"
          color="gray"
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
          <a href="https://drive.google.com/file/d/1AQKPrUFAzrfeqBFEPjgVb41rjMpFH5PJ/view?usp=sharing">
            {/* @ts-ignore */}
            <Typography color="deep-purple" className="font-bold pr-5">
              Resume
            </Typography>
          </a>
          <div className="mt-6 mb-4 flex items-center gap-2">
            <a href="#contact">
              {/* @ts-ignore */}
              <Button btn="primary" >Contact me</Button>
            </a>
          </div>
        </div>
      </Collapse>
    </div>
    </>
  );
}

export default Navbar;
