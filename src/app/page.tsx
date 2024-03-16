// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Clients from "./clients";
import Tools from "./tools";
import Projects from "./projects";
import Resume from "./resume";
import Testimonial from "./testimonial";
import ContactForm from "./contact-form";
import Carousel from "./motion";

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
