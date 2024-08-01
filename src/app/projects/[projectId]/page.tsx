"use client";

import PROJECTS from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/button";

export default function Page({ params }: { params: { projectId: any } }){
    const slug = params.projectId;
    const selectedProject = PROJECTS.find((project) => project.slug === slug);

    if (selectedProject) {
      return (
        <>
          <div className="projects-container flex justify-center">
            <div className="bg-gray-50 flex lg:max-w-screen-xl m-auto w-full fixed top-0 z-10 self-center">
              <Link href="/#projects" className="ml-auto close">
                <Image
                  src="/icons/close.svg"
                  className="w-8 h-8"
                  alt="close icon"
                  width={30}
                  height={30}
                />
              </Link>
            </div>

            <div className="content bg-gray-50 grid gap-9 p-8">
              {/* @ts-ignore */}
              <p className="text-xl mb-4 max-w-3xl mr-auto ml-auto pt-16">
                {selectedProject.description && selectedProject.description}
              </p>
              {selectedProject.images.map((url: string, key: number) => {
                if (url.endsWith(".jpg") || url.endsWith(".png")) {
                  return (
                    <div key={key}>
                      <a href={url}>
                        <Image
                          src={url}
                          alt={url}
                          width={768}
                          height={768}
                          className={`image-project object-cover rounded-xl mr-auto ml-auto ${selectedProject.slug}`}
                        />
                      </a>
                    </div>
                  );
                } else {
                  return (
                    <div className="container-video-project">
                      <iframe
                        className="iframe-video"
                        width="560"
                        height="315"
                        src={url}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    </div>
                  );
                }
              })}
              {selectedProject.title === "Set of Illustrations for ITONICS" && (
                <div className="container-video">
                  <iframe
                    className="responsive-iframe"
                    width="800"
                    height="auto"
                    src="https://www-ccv.adobe.io/v1/player/ccv/4JNRCBVou5I/embed?bgcolor=%23191919&lazyLoading=true&api_key=BehancePro2View"
                  ></iframe>
                </div>
              )}
              {selectedProject.title ===
                "Mastering Sustainability in Printing" && (
                <div>
                  <a
                    href=" https://drive.google.com/file/d/1bOgcabmoHXlP07NPugR2RQd1waPv79iN/view?usp=drive_link"
                    target="_blank"
                    className="thesis_link"
                  >
                    Click here if you want to see the complete project
                  </a>
                </div>
              )}
            </div>
          </div>
        </>
      );
    }
}