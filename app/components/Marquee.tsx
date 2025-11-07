"use client";

// Marquee section component
// Displays a scrolling "Build.Market.Grow." text with icons
// Uses a semi-transparent background and infinite scroll animation
export default function Marquee() {
  // Marquee item component
  // Reusable component for each marquee item with icon and text
  const MarqueeItem = () => (
    <div className="flex items-center justify-center gap-[40px] md:gap-[60px] shrink-0">
      <div className="relative h-[24px] w-[24px] md:h-[36px] md:w-[36.518px]">
        <svg
          className="block max-w-none size-full"
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
      <p className="font-[var(--font-azeret-mono)] font-normal leading-[24px] text-[20px] text-[#757a91] text-center whitespace-nowrap md:text-[25px]">
        Build.Market.Grow.
      </p>
    </div>
  );

  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[40px] px-4 py-0 md:gap-[60px] lg:gap-[80px] sm:px-6 md:px-8 lg:px-[80px]">
      <div className="relative w-full overflow-hidden bg-[rgba(242,244,250,0.05)]">
        {/* Animated marquee container */}
        {/* The container uses flex with duplicate items for seamless infinite scroll */}
        <div className="flex items-center gap-[60px] px-[30px] py-[20px] md:py-[30px] animate-marquee">
          {/* First set of items - will scroll left */}
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
          {/* Duplicate set for seamless loop - when first set scrolls out, second set appears */}
          <MarqueeItem />
          <MarqueeItem />
          <MarqueeItem />
        </div>
      </div>
    </section>
  );
}

