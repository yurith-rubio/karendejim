// components
import { Navbar, Footer } from "@/components";

// sections
import { Suspense } from "react";
import Hero from "./hero";
import Clients from "./clients";
import Tools from "./tools";
import Carousel from "./motion"
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import ContactForm from "./contact-form";


export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Tools />
      <Carousel />
      <Projects />
      <Resume />
      <Testimonial />
      <ContactForm />
      <Footer />
    </>
  );
}
