import Image from "next/image";

import Button from "./Button";

// Hero section
export default function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[30px] px-4 pb-[24px] md:gap-[50px] sm:px-6 md:px-8 lg:px-[80px]">
      <div className="flex flex-col items-center gap-[40px] md:gap-[74px]">
        <div className="flex flex-col items-center px-0 pt-0 pb-[8px]">
          <h1 className="mb-[-8px] flex max-w-[899px] flex-col justify-center text-center text-[36px] leading-[0] font-[var(--font-azeret-mono)] font-medium tracking-[-1.2px] text-[#f2f4fa] md:text-[48px] lg:text-[60px]">
            <span className="leading-[48px] md:leading-[64px] lg:leading-[80px]">
              Build. Market. Grow.
            </span>
          </h1>
        </div>

        <div className="relative h-[120px] w-[156px] md:h-[172.71px] md:w-[224.73px]">
          <Image
            alt="Hero logo"
            className="block h-full w-full max-w-none"
            src="/images/hero-icon.svg"
            width={225}
            height={173}
          />
        </div>

        <div className="flex max-w-[899px] flex-col items-start gap-[14px] leading-[24px]">
          <p className="relative w-full text-center text-[20px] font-[var(--font-inter)] font-semibold text-[#f2f4fa] md:text-[24px] lg:text-[27px]">
            Your marketing. Fully managed. Problem-free.
          </p>
          <p className="relative w-full text-center text-[16px] font-[var(--font-inter)] font-normal text-[#b9bfd6] md:text-[18px] lg:text-[20px]">
            lizardprojects is your international partner for end-to-end digital
            and marketing solutions.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-[50px]">
        <Button variant="Primary">Get started</Button>
        <Button variant="Secondary">Get started</Button>
      </div>
    </section>
  );
}
