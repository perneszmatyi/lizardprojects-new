import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[40px] px-4 py-[40px] sm:px-6 md:gap-[60px] md:px-8 md:py-[60px] lg:gap-[80px] lg:px-[80px] lg:py-[80px]">
      <div className="flex w-full flex-col items-center justify-between gap-[40px] md:flex-row md:gap-[60px] lg:gap-[80px]">
        <div className="relative h-[28px] w-[160px] md:h-[36px] md:w-[205.826px]">
          <Image
            alt="lizardprojects logo"
            className="h-full w-full"
            src="/images/lp-logo.svg"
            width={206}
            height={36}
          />
        </div>

        <nav className="flex flex-col items-center gap-[20px] md:flex-row md:gap-[35px]">
          <a
            href="#pricing"
            className="text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa] transition-colors hover:text-[#b9bfd6]"
          >
            Pricing
          </a>
          <a
            href="#features"
            className="text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa] transition-colors hover:text-[#b9bfd6]"
          >
            Features
          </a>
          <a
            href="#download"
            className="text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa] transition-colors hover:text-[#b9bfd6]"
          >
            Download
          </a>
          <a
            href="#blog"
            className="text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa] transition-colors hover:text-[#b9bfd6]"
          >
            Blog
          </a>
        </nav>

        <div className="flex items-center justify-center gap-[20px] md:gap-[24px]">
          <a
            href="#"
            aria-label="Social media link 1"
            className="transition-opacity hover:opacity-70"
          >
            <div className="relative h-[24px] w-[24px] md:h-[28px] md:w-[28px]">
              <Image
                alt=""
                className="h-full w-full"
                src="/images/social-icon-1.svg"
                width={28}
                height={28}
              />
            </div>
          </a>
          <a
            href="#"
            aria-label="Social media link 2"
            className="transition-opacity hover:opacity-70"
          >
            <div className="relative h-[24px] w-[24px] md:h-[28px] md:w-[28px]">
              <Image
                alt=""
                className="h-full w-full"
                src="/images/social-icon-2.svg"
                width={28}
                height={28}
              />
            </div>
          </a>
          <a
            href="#"
            aria-label="Social media link 3"
            className="transition-opacity hover:opacity-70"
          >
            <div className="relative h-[24px] w-[24px] md:h-[28px] md:w-[28px]">
              <Image
                alt=""
                className="h-full w-full"
                src="/images/social-icon-3.svg"
                width={28}
                height={28}
              />
            </div>
          </a>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center border-t border-solid border-[rgba(255,255,255,0.1)] pt-[40px] md:pt-[60px]">
        <p className="text-center text-[12px] leading-[18px] font-[var(--font-inter)] font-normal text-[#6c6c80] md:text-[14px]">
          © {new Date().getFullYear()} lizardprojects. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
