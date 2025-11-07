import Navbar from "./components/Navabar";
import Hero from "./components/Hero";
import Approach from "./components/Approach";
import Marquee from "./components/Marquee";
import Resources from "./components/Resources";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main className="pt-[80px] md:pt-[100px]">
        <section className="py-[40px] md:py-[60px] lg:py-[80px]">
          <Hero />
        </section>
        <section className="py-[40px] md:py-[60px] lg:py-[80px]">
          <Approach />
        </section>
        <section className="py-[40px] md:py-[60px] lg:py-[80px]">
          <Marquee />
        </section>
        <section className="py-[40px] md:py-[60px] lg:py-[80px]">
          <Resources />
        </section>
      </main>
    </div>
  );
}
