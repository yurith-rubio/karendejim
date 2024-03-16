import { Typography, Button } from "@material-tailwind/react";

const LINKS = ["Projects", "Tools"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          {/* @ts-ignore */}
          <Typography className="text-center font-normal !text-gray-700" variant="small" >
            &copy; {CURRENT_YEAR} Developed by{" "}
            <a href="https://www.yurith-rubio.github.io" className="font-normal text-gray-700 hover:text-gray-900 transition-colors">
              Yurith Rubio
            </a> {" "}
            with material Tailwind
          </Typography>
          <ul className="flex gap-8 items-center">
            {LINKS.map((link) => (
              <li key={link}>
                {/* @ts-ignore */}
                <Typography
                  as="a"
                  href={`#${link.toLowerCase()}`}
                  variant="small"
                  className="font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
