import Image from "next/image";

export const WhatWeDo = () => {
  return (
    <section className="relative flex w-full max-w-[1440px] flex-col items-start gap-[40px] py-[10px] lg:gap-20">
      <p className="font-azeret-mono w-full text-center text-[18px] leading-[28px] font-medium tracking-[-0.36px] text-[var(--color-light-gray)] sm:text-[22px] sm:leading-[36px] sm:tracking-[-0.44px] md:text-left md:text-[26px] md:leading-[48px] md:tracking-[-0.52px] lg:max-w-[865px] lg:text-[30px] lg:leading-[80px] lg:tracking-[-0.6px]">
        We&apos;re a creative studio building websites, enterprise-grade
        software, mobile apps, and AI solutions, backed by design and marketing
        that makes them succeed.
      </p>

      <Image
        src="/images/arrows.svg"
        alt=""
        width={327}
        height={82}
        className="hidden lg:block"
      />
    </section>
  );
};
