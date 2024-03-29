"use client";

import {
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import Htwo from "@/components/h2";

export function ContactForm() {
  return (
    <section className="px-8 py-16 h-screen flex justify-center items-center" id="contact">
      <div>
        {/* @ts-ignore */}
        <Card shadow={false} className="container mx-auto contact-wrapper" >
          {/* @ts-ignore */}
          <CardBody className="col-span-3 rounded-lg h-full py-8 p-5 md:p-16 text-center" >
            {/* @ts-ignore */}
            <Htwo>
              Contact me
            </Htwo>
            <div className="flex gap-5 justify-center">
              <PhoneIcon className="h-6 w-6 text-crema-500 mt-1" />
              {/* @ts-ignore */}
              <Typography color="blue-gray" className="mb-2 text-lg" >
                +(49) 160 6013 255
              </Typography>
            </div>
            <div className="flex my-2 gap-5 justify-center">
              <EnvelopeIcon className="h-6 w-6 text-crema-500 mt-1" />
              {/* @ts-ignore */}
              <Typography color="blue-gray" className="mb-2 text-lg" >
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
