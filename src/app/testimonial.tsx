"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(1);

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row" placeholder={undefined} >
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between " placeholder={undefined} >
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="deep-purple"
                className="mb-4 font-bold lg:max-w-xs"
                placeholder={undefined} 
              >
                What my clients and managers say
              </Typography>
              {active === 1 && 
                <Typography variant="h3" color="blue-gray" className="text-2xl mb-0.5" placeholder={undefined} >
                    Markus Gattenlöhner
                    <Typography variant="paragraph" className="font-normal mb-5 !text-gray-500" placeholder={undefined} >
                      Creative Director, ITONICS GmbH
                      <br />
                      +27 66 551 0997
                      <br />
                      markus.gattenloehner@itonics.de
                    </Typography>
                </Typography>
              }
              {active === 2 &&
                <Typography variant="h3" color="blue-gray" className="text-2xl mb-0.5" placeholder={undefined} >
                  Marison Gómez
                  <Typography variant="paragraph" className="font-normal mb-5 !text-gray-500" placeholder={undefined} >
                    Image and style Consultant
                    <br />
                    +1 (786) 308-7845
                    <br />
                    info@styleandimagestudio.com
                  </Typography>
                </Typography>
              }
              {active === 3 &&
                <Typography variant="h3" color="blue-gray" className="text-2xl mb-0.5" placeholder={undefined} >
                  Christoph Augustin
                  <Typography variant="paragraph" className="font-normal mb-5 !text-gray-500" placeholder={undefined} >
                    Tax consultant
                    <br />
                    +49 172 4361973
                    <br />
                    christoph_augustin@t-online.de
                  </Typography>
                </Typography>
              }
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src="/image/avatar1.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                  placeholder={undefined} 
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Avatar
                  variant="rounded"
                  src="/image/avatar2.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                  placeholder={undefined} 
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                <Avatar
                  variant="rounded"
                  src="/image/avatar3.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
                  placeholder={undefined} 
                />
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <img
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/avatar${active}.jpg`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
