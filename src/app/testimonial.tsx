"use client";

import React from "react";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";
import Htwo from "@/components/h2";

export function Testimonial() {
  const [active, setActive] = React.useState(1);

  const testimonials = [
    {
      text: "Karen was an invaluable asset as our Art Director, demonstrating exceptional leadership in project management across design, branding, and content production teams. Her creative prowess has been instrumental in shaping our brand's visual identity, particularly in social media and web design. Karen's innovative strategies and analytical skills have driven effective communication and brand positioning. Notably, her integration of AI tools into our design processes has greatly enhanced efficiency and innovation. Throughout her tenure, Karen has consistently delivered with professionalism, innovation, and a commitment to quality, making a significant impact on our team and company success.",
      name: "Markus Gattenlöhner",
      position: "Creative Director, ITONICS GmbH",
      phone: "+27 66 551 0997",
      email: "markus.gattenloehner@itonics.de",
    },
    {
      text: "During the more than 8 years that we collaborated with Karen, her designs have played a vital role in delivering our image consulting training for professionals, ensuring dynamic and professional presentations across our platforms. Remarkably, her designs remain fresh and relevant to this day. Karen is incredibly professional, flexible, and responsive, and her designs have been a great asset to our image coaching courses. Her contributions have been invaluable, and I wholeheartedly recommend her for any design project.",
      name: "Marisol Gómez",
      position: "Image and style Consultant",
      phone: "+1 (786) 308-7845",
      email: "info@styleandimagestudio.com",
    },
    {
      text: "The contribution of Karen to our marketing team was key in developing our brand design within the company. ITONICS has undergone a significant design evolution since Karen joined the team, and her design contributions continue to play a vital role in our marketing communications. Her flexibility and commitment make working with her a smooth and successful experience.",
      name: "Sophia Hübner",
      position: "Marketing Team Lead at ITONICS",
      phone: "+49 1578 4895805",
      email: "sophia.huebner@itonics.de",
    },
  ]
  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container lg:max-w-screen-lg mx-auto">
        {/* @ts-ignore */}
        <Card color="transparent" shadow={false} className="py-8 lg:flex-row" >
          {/* @ts-ignore */}
          <CardBody className="w-full lg:gap-10 h-full lg:!flex justify-between " >
            <div className="w-full mb-10 lg:mb-0">
              {/* @ts-ignore */}
              <Htwo class="lg:max-w-xs"
              >
                What my clients and managers say
              </Htwo>

              <div className="flex items-center gap-4 mb-10">
                {/* @ts-ignore */}
                <Avatar
                  variant="rounded"
                  src="/image/avatar1.jpg"
                  alt="Markus Gattenlöhner"
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
                  alt="Marisol Gómez"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                {/* @ts-ignore */}
                <Avatar
                  variant="rounded"
                  src="/image/avatar3.jpg"
                  alt="Sophia Hübner"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
                />
              </div>

              {
                testimonials.map((testimonial, key) => {
                  console.log(key + 1)
                  key = key + 1;
                  if (active === key) {
                    return <>
                    <div key={key} className="">
                      <p className="font-normal mb-5 !text-gray-500 text-xl">
                        {testimonial.text}
                      </p>
                      {/* @ts-ignore */}
                      <Typography variant="h3" color="blue-gray" className="text-2xl mb-0.5" >
                        {testimonial.name}
                      </Typography>
                      {/* @ts-ignore */}
                      <Typography variant="paragraph" className="font-normal mb-5 !text-gray-500"  >
                        {testimonial.position}
                        <br />
                        {testimonial.phone}
                        <br />
                        {testimonial.email}
                      </Typography>
                    </div>
                    </>
                  }
                })
              }

              
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0 m-auto">
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
