import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  CommandLineIcon,
  XMarkIcon,
  Bars3Icon,
} from "@heroicons/react/24/solid";

const NAV_MENU = [
  {
    name: "Resume",
    icon: CommandLineIcon,
    href: "https://drive.google.com/file/d/19i_d8gHl8hO_nIoPkFo7eGVkIPFRe17i/view?pli=1"
  },
];

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a
        href={href || "#"}
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </a>
    </li>
  );
}

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
    <div className="border-0 sticky top-0 z-50" >
      <div className="container mx-auto flex items-center justify-between">
        <p color="blue-gray" className="text-lg font-bold" >
          Karen Delgado
        </p>
        
        <div className="hidden items-center gap-2 lg:flex">
          <ul className="ml-10 hidden items-center gap-8 lg:flex">
            {NAV_MENU.map(({ name, href }) => (
              <NavItem key={name} href={href}>
                <p color="deep-purple" className="font-bold pr-5">
                  {name}
                </p>
              </NavItem>
            ))}
          </ul>
          <a href="#contact">
            <button color="deep-purple" >Hire me</button>
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
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map(({ name, icon: Icon }) => (
              <NavItem key={name}>
                <Icon className="h-5 w-5" />
                {name}
              </NavItem>
            ))}
          </ul>
          <div className="mt-6 mb-4 flex items-center gap-2">
            {/* <button variant="text">Sign In</button> */}
            <a href="https://www.material-tailwind.com/blocks">
              {/* @ts-ignore */}
              <button color="deep-purple" >blocks</button>
            </a>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Navbar;
