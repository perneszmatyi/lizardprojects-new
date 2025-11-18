import {
  Hero,
  WhatWeDo,
  Projects,
  ContactForm,
  Footer,
  Services,
} from "@/components/custom";

import { Navbar } from "@/components/custom/Navbar/Navbar";

export default function Home() {
  return (
    <div className="w-[100vw] overflow-x-hidden bg-[url('/images/background-test.png')] bg-cover">
      <Navbar />
      <main className="pt-[40px] md:pt-[100px]">
        <section className="flex flex-col items-center px-[10px] pt-[60px] pb-[60px] sm:px-6 md:px-8 md:pb-[80px] lg:px-[80px] lg:pt-[40px] lg:pb-[100px]">
          <Hero />
        </section>
        <section
          id="what-we-do"
          className="flex flex-col items-center px-[10px] py-[60px] sm:px-6 md:px-8 md:py-[80px] lg:px-[80px] lg:py-[100px]"
        >
          <WhatWeDo />
        </section>
        <section
          id="services"
          className="flex flex-col items-center px-[10px] py-[60px] sm:px-6 md:px-8 md:py-[80px] lg:px-[80px] lg:py-[100px]"
        >
          <Services />
        </section>
        <section
          id="projects"
          className="flex flex-col items-center px-[10px] py-[60px] sm:px-6 md:px-8 md:py-[80px] lg:px-[80px] lg:py-[100px]"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="flex flex-col items-center px-[10px] py-[60px] sm:px-6 md:px-8 md:py-[80px] lg:px-[80px] lg:py-[100px]"
        >
          <ContactForm />
        </section>
      </main>
      <Footer />
    </div>
  );
}
