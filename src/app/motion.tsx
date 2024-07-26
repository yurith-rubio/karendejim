"use client";

import { Carousel } from "@material-tailwind/react";
import Htwo from "@/components/h2";

export function Motion() {
    return <>
        <Htwo class="mt-20 text-center" >
          Video and motion animation
        </Htwo>
        {/* @ts-ignore */}
        <Carousel className="w-4/6 m-auto" id="Carousel">
            <div className="container-video">
                <iframe className="responsive-iframe" width="800" height="auto"
                src="https://www-ccv.adobe.io/v1/player/ccv/QwevyqvTxuy/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View">
                </iframe> 
            </div>
            <div className="container-video">
                <iframe className="responsive-iframe" width="800" height="auto"
                src="https://www-ccv.adobe.io/v1/player/ccv/4JNRCBVou5I/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View">
                </iframe> 
            </div>
            <div className="container-video">
                <iframe className="responsive-iframe" width="800" height="auto"
                src="https://www-ccv.adobe.io/v1/player/ccv/UztmyZbWX2T/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View">
                </iframe> 
            </div>
            <div className="container-video">
                <video className="responsive-iframe" width="800" height="auto" controls>
                    <source src="/videos/animation.mp4" type="video/mp4"></source>
                </video> 
            </div>
        </Carousel>
    </>
}

export default Motion;