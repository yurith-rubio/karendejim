"use client";

import PROJECTS from "@/lib/projects";
import Image from "next/image";
import Link from "next/link";

export function Modal({ params }: { params: { projectId: any } }){
    const slug = params.projectId;
    const selectedProject = PROJECTS.find((project) => project.slug === slug);

    if (selectedProject) {
      return (
          <>
            <div className="flex justify-center">
              <div className="bg-gray-50 flex lg:max-w-screen-xl m-auto w-full fixed top-0 z-10 self-center">
                <Link href="/#projects" className="ml-auto close"  >
                  <Image src="/icons/close.svg" className="w-8 h-8" alt="close icon" width={30} height={30} />
                </Link>
              </div>

              <div className="bg-gray-50 grid gap-9 p-8">
                {/* @ts-ignore */}
                <p className="text-xl mb-4 max-w-3xl mr-auto ml-auto pt-16" >
                      { selectedProject.description && selectedProject.description }
                  </p>  
                {
                  selectedProject.images.map((url: string, key: number) => (
                    <div key={key}>
                      <a href={url} >
                        <Image
                        src={url}
                        alt={url}
                        width={768}
                        height={768}
                        className="object-cover rounded-xl mr-auto ml-auto"
                        />
                      </a>
                    </div>
                  ))
                }
                </div>
            </div>
        </>
      );
    }
}

export default Modal;