import Image from "next/image";

import { CustomButton } from "../Button/CustomButton";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[50px] px-4 pb-[24px] sm:px-6 md:gap-[70px] md:px-8 lg:px-[80px]">
      <div className="flex flex-col items-center gap-[40px] md:gap-[60px]">
        <div className="border-turquoise/30 bg-turquoise/10 inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
          <div className="blink-dot bg-turquoise h-2 w-2 rounded-full"></div>
          <span className="text-turquoise text-sm font-[var(--font-inter)] font-medium">
            Available for new projects
          </span>
        </div>

        <div className="flex flex-col items-center gap-[50px] md:gap-[60px]">
          <h1 className="flex flex-col justify-center text-center text-[48px] font-medium tracking-[-1.2px] text-white md:text-[64px] lg:text-[80px]">
            <span className="font-azeret-mono leading-[56px] md:leading-[72px] lg:leading-[88px]">
              Build. Market. Grow.
            </span>
          </h1>

          <div className="relative h-[140px] w-[182px] md:h-[200px] md:w-[260px] lg:h-[220px] lg:w-[286px]">
            <Image
              alt="Hero logo"
              className="block h-full w-full max-w-none"
              src="/images/hero-icon.svg"
              width={286}
              height={220}
              priority
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-[40px] md:gap-[50px]">
        <Link href="#contact">
          <CustomButton
            variant="Primary"
            className="!h-[56px] transform !px-[48px] !py-[20px] !text-[16px] !font-bold !tracking-wide shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.7)] md:!h-[64px] md:!px-[56px] md:!py-[24px] md:!text-[18px]"
          >
            GET YOUR FREE CONSULTATION
          </CustomButton>
        </Link>

        <Link
          href="#what-we-do"
          className="group flex flex-col items-center gap-2 transition-all duration-300 hover:gap-3"
        >
          <span className="text-medium-gray group-hover:text-turquoise text-xs font-medium tracking-wider uppercase transition-colors duration-300">
            what we do
          </span>
          <svg
            className="text-medium-gray group-hover:text-turquoise h-6 w-6 animate-bounce transition-colors duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};
