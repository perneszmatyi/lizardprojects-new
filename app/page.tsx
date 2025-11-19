import Image from "next/image";
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
    <div className="relative max-w-[100vw] overflow-x-hidden bg-[url('/images/background.png')] bg-cover">
      <Image
        alt="Hero logo"
        className="absolute top-0 right-0 z-0 translate-x-[5%] translate-y-[10%] opacity-80"
        src="/images/hero-atom.svg"
        width={936}
        height={721}
        priority
      />
      <Navbar />
      <main className="relative z-20 mx-auto max-w-[1440px] px-8 pt-[40px] md:px-8 md:pt-[100px] lg:px-[80px]">
        <section className="py-[40px] md:pb-[80px] lg:pt-[40px] lg:pb-[120px]">
          <Hero />
        </section>
        <section
          id="what-we-do"
          className="flex flex-col items-center py-[20px] md:py-[80px] lg:py-[100px]"
        >
          <WhatWeDo />
        </section>
        <section
          id="services"
          className="z-20 flex flex-col items-center py-[20px] md:py-[80px] lg:py-[100px]"
        >
          <Services />
        </section>
        <section
          id="projects"
          className="flex flex-col items-center py-[20px] md:py-[80px] lg:pt-[100px] lg:pb-[60px]"
        >
          <Projects />
        </section>
        <section
          id="contact"
          className="z-20 flex flex-col py-[20px] md:py-[80px] lg:pt-[40px] lg:pb-[100px]"
        >
          <ContactForm />
        </section>
      </main>
      <Image
        src="/images/form-decor.svg"
        alt=""
        width={1032}
        height={1040}
        className="absolute right-0 bottom-0 z-0 w-[300px] opacity-80 md:w-[400px] lg:w-[500px] xl:w-[600px]"
      />
      <Footer />
    </div>
  );
}
