"use client";

import {
  Typography,
  Card,
  CardBody,
  IconButton,
} from "@material-tailwind/react";
import { EnvelopeIcon, PhoneIcon, TicketIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  
  return (
    <section className="px-8 py-16" id="contact">
      <div>
        <Card shadow={false} className="container mx-auto border border-gray/50" placeholder={undefined} >
          <CardBody className="col-span-3 rounded-lg h-full py-8 p-5 md:p-16 text-center" placeholder={undefined} >
            <Typography variant="h3" color="deep-purple" className="mb-2 pb-5 pt-10" placeholder={undefined} >
              Do not hesitate, and contact me
            </Typography>
            <div className="flex gap-5 justify-center">
              <PhoneIcon className="h-6 w-6 text-blue-gray" />
              <Typography variant="h4" color="blue-gray" className="mb-2" placeholder={undefined} >
                +1(49) 160 6013 255
              </Typography>
            </div>
            <div className="flex my-2 gap-5 justify-center">
              <EnvelopeIcon className="h-6 w-6 text-blue-gray" />
              <Typography variant="h4" color="blue-gray" className="mb-2" placeholder={undefined} >
                karendejim@gmail.com
              </Typography>
            </div>
            <div className="flex mb-10 gap-5 justify-center">
              <TicketIcon className="h-6 w-6 text-blue-gray" />
              <Typography variant="h4" color="blue-gray" className="mb-2" placeholder={undefined} >
                <a href="https://www.linkedin.com/in/karen-delgado-513852133">
                  Linkedin
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
