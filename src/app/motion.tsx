"use client";

import { Carousel } from "@material-tailwind/react";

export function Motion() {
    return <>
        {/* @ts-ignore */}
        <Carousel className="w-4/6 m-auto" id="Carousel">
            <div className="container-video">
                <iframe className="responsive-iframe" width="auto" height="500"
                src="https://www-ccv.adobe.io/v1/player/ccv/QwevyqvTxuy/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View">
                </iframe> 
            </div>
            <div className="container-video">
                <iframe className="responsive-iframe" width="auto" height="500"
                src="https://cdn.myportfolio.com/b57c2722-2985-4260-9e1c-785fd5d931c3/1eded75e-b6fd-43cc-80bf-da2b89e3a3f4_rw_1200.gif?h=70427dfa038ef5b0e4c1130a352b4ae4">
                </iframe> 
            </div>
            <div className="container-video">
                <iframe className="responsive-iframe" width="auto" height="500"
                src="https://www-ccv.adobe.io/v1/player/ccv/UztmyZbWX2T/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View">
                </iframe> 
            </div>
        </Carousel>
    </>
}

export default Motion;