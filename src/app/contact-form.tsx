"use client";

import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-16" id="contact">
      <div>
        {/* @ts-ignore */}
        <Card shadow={false} className="container mx-auto border border-gray/50" >
          {/* @ts-ignore */}
          <CardBody className="col-span-3 rounded-lg h-full py-8 p-5 md:p-16 text-center" >
            {/* @ts-ignore */}
            <Typography variant="h2" color="deep-purple" className="mb-2 pb-5 pt-10" >
              Do not hesitate, and contact me
            </Typography>
            <div className="flex gap-5 justify-center">
              <PhoneIcon className="h-6 w-6 text-blue-gray mt-1" />
              {/* @ts-ignore */}
              <Typography variant="h4" color="blue-gray" className="mb-2" >
                +1(49) 160 6013 255
              </Typography>
            </div>
            <div className="flex my-2 gap-5 justify-center">
              <EnvelopeIcon className="h-6 w-6 text-blue-gray mt-5" />
              {/* @ts-ignore */}
              <Typography variant="h4" color="blue-gray" className="mb-2" >
                karendejim@gmail.com
              </Typography>
            </div>
            <div className="flex mb-10 gap-5 justify-center">
              {/* @ts-ignore */}
              <Typography variant="h4" color="blue-gray" className="mb-2" >
                <a href="https://www.linkedin.com/in/karen-delgado-513852133">
                  <img src="/logos/linkedin.svg" alt="linkedin logo" width={100} />
                </a>
              </Typography>
            </div>            
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
