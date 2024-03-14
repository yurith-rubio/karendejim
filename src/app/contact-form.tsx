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
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" color="deep-purple" className="mb-4 text-4xl" placeholder={undefined} >
          Contact Karen
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
          placeholder={undefined} 
        >
          Ready to get started? Feel free to reach out through the contact form,
          and let&apos;s embark on a journey of innovation and success.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50" placeholder={undefined} >
          <CardBody className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 text-center" placeholder={undefined} >
            {/* <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900"> */}
              <Typography variant="h3" color="blue-gray" className="mb-2" placeholder={undefined} >
                Contact Information
              </Typography>
              {/* <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Fill up the form and our Team will get back to you within 24
                hours.
              </Typography> */}
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
                <Typography variant="h6" color="blue-gray" className="mb-2" placeholder={undefined} >
                  <a href="https://www.linkedin.com/in/karen-delgado-513852133">
                    Linkedin
                  </a>
                </Typography>
              </div>
              <div className="flex items-center gap-5">
                <IconButton variant="text" color="blue-gray" placeholder={undefined} >
                  <i className="fa-brands fa-facebook text-lg" />
                </IconButton>
                <IconButton variant="text" color="blue-gray" placeholder={undefined} >
                  <i className="fa-brands fa-instagram text-lg" />
                </IconButton>
                <IconButton variant="text" color="blue-gray" placeholder={undefined} >
                  <i className="fa-brands fa-github text-lg" />
                </IconButton>
              </div>
            {/* </div> */}
            
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
