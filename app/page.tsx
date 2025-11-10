import {
  Navbar,
  Hero,
  Approach,
  Resources,
  Team,
  ContactForm,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen w-[100vw] bg-[#0a0a0a] bg-[url('/images/background-test.png')] bg-cover">
      <Navbar />
      <main className="pt-[80px] md:pt-[100px]">
        <section className="py-[40px] md:py-[60px] lg:py-[80px]">
          <Hero />
        </section>
        <section className="py-[40px] md:py-[60px] lg:py-[80px]">
          <Approach />
        </section>
        <section className="py-[40px] md:py-[60px] lg:py-[80px]">
          <Resources />
        </section>
        <section className="py-[40px] md:py-[60px] lg:py-[80px]">
          <Team />
        </section>
        <section className="py-[40px] md:py-[60px] lg:py-[80px]">
          <ContactForm />
        </section>
      </main>
      <footer className="py-[40px] md:py-[60px] lg:py-[80px]">
        <Footer />
      </footer>
    </div>
  );
}
