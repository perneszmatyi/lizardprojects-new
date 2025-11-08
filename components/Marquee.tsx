"use client";

const MarqueeItem = () => (
  <div className="flex shrink-0 items-center justify-center gap-[40px] md:gap-[60px]">
    <div className="relative h-[24px] w-[24px] md:h-[36px] md:w-[36.518px]">
      <svg
        className="block size-full max-w-none"
        viewBox="0 0 37 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M18.5 0L22.6795 13.8203L36.5 18L22.6795 22.1797L18.5 36L14.3205 22.1797L0.5 18L14.3205 13.8203L18.5 0Z"
          fill="#757a91"
        />
      </svg>
    </div>
    <p className="text-center text-[20px] leading-[24px] font-[var(--font-azeret-mono)] font-normal whitespace-nowrap text-[#757a91] md:text-[25px]">
      Build.Market.Grow.
    </p>
  </div>
);

export const Marquee = () => {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[40px] px-4 py-0 sm:px-6 md:gap-[60px] md:px-8 lg:gap-[80px] lg:px-[80px]">
      <div className="relative w-full bg-[rgba(242,244,250,0.05)]">
        <div className="flex items-center justify-center gap-[60px] px-[30px] py-[20px] md:py-[30px]">
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </div>
    </section>
  );
};
