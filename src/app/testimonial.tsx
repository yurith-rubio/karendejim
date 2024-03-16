"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(1);

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        {/* @ts-ignore */}
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row" >
          {/* @ts-ignore */}
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between " >
            <div className="w-full mb-10 lg:mb-0">
              {/* @ts-ignore */}
              <Typography
                variant="h3"
                color="deep-purple"
                className="mb-4 font-bold lg:max-w-xs"
              >
                What my clients and managers say
              </Typography>
              {active === 1 && 
                <>
                {/* @ts-ignore */}
                <Typography variant="h3" color="blue-gray" className="text-2xl mb-0.5" >
                    Markus Gattenlöhner
                    {/* @ts-ignore */}
                    <Typography variant="paragraph" className="font-normal mb-5 !text-gray-500"  >
                      Creative Director, ITONICS GmbH
                      <br />
                      +27 66 551 0997
                      <br />
                      markus.gattenloehner@itonics.de
                    </Typography>
                </Typography>
                </>
              }
              {active === 2 &&
                <>
                {/* @ts-ignore */}
                <Typography variant="h3" color="blue-gray" className="text-2xl mb-0.5" >
                  Marison Gómez
                  {/* @ts-ignore */}
                  <Typography variant="paragraph" className="font-normal mb-5 !text-gray-500" >
                    Image and style Consultant
                    <br />
                    +1 (786) 308-7845
                    <br />
                    info@styleandimagestudio.com
                  </Typography>
                </Typography>
                </>
              }
              {active === 3 &&
                <>
                {/* @ts-ignore */}
                <Typography variant="h3" color="blue-gray" className="text-2xl mb-0.5" >
                  Christoph Augustin
                  {/* @ts-ignore */}
                  <Typography variant="paragraph" className="font-normal mb-5 !text-gray-500" >
                    Tax consultant
                    <br />
                    +49 172 4361973
                    <br />
                    christoph_augustin@t-online.de
                  </Typography>
                </Typography>
                </>
              }
              <div className="flex items-center gap-4">
                {/* @ts-ignore */}
                <Avatar
                  variant="rounded"
                  src="/image/avatar1.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                {/* @ts-ignore */}
                <Avatar
                  variant="rounded"
                  src="/image/avatar2.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                {/* @ts-ignore */}
                <Avatar
                  variant="rounded"
                  src="/image/avatar3.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
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
