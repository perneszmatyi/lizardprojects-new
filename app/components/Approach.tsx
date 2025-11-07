import Image from "next/image";

// Our Approach section component
// Displays three feature cards with gradient backgrounds and decorative icons
export default function Approach() {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[40px] px-4 py-0 md:gap-[60px] lg:gap-[80px] sm:px-6 md:px-8 lg:px-[80px]">
      {/* Header section with title and subtitle */}
      <div className="flex flex-col items-center gap-[24px]">
        <div className="flex flex-col items-center gap-[38px]">
          {/* Main heading */}
          <h2 className="mb-[-8px] flex max-w-[1020px] flex-col justify-center text-center text-[32px] leading-[0] font-[var(--font-azeret-mono)] font-medium tracking-[-0.96px] text-[var(--color-text-100)] md:text-[40px] lg:text-[48px]">
            <span className="leading-[44px] md:leading-[56px] lg:leading-[64px]">
              Our approach
            </span>
          </h2>
          
          {/* Subtitle */}
          <p className="relative w-full max-w-[1020px] text-center text-[16px] font-[var(--font-inter)] font-medium leading-[24px] text-[var(--color-text-100)] md:text-[18px] lg:text-[20px]">
            Multi-disciplinary, flexible, and laser-focused on your objectives. No fluff, just expertise.
          </p>
        </div>
      </div>

      {/* Three feature cards */}
      <div className="flex flex-col gap-[20px] items-center md:flex-row md:gap-[30px]">
        {/* Insight Card */}
        <div 
          className="box-border flex flex-col gap-[27px] h-[220px] items-center pb-[40px] pt-[30px] px-[30px] relative rounded-[16px] shrink-0 w-full md:w-[320px]"
          style={{
            background: `linear-gradient(to bottom, var(--color-brand-light-blue), var(--color-brand-dark-blue))`
          }}
        >
          <div className="flex items-center justify-between relative shrink-0 w-full">
            {/* Card title */}
            <p className="font-[var(--font-inter)] font-medium leading-[24px] relative shrink-0 text-[#e8e8e6] text-[20px] whitespace-pre md:text-[23px]">
              Insight
            </p>
            
            {/* Small circle icon */}
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="relative size-[24px]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src="/images/approach-ellipse-icon.svg"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
            
            {/* Main card icon */}
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="h-[40px] relative w-[41px]">
                  <Image
                    alt="Insight icon"
                    className="block max-w-none size-full"
                    src="/images/approach-card-icon.svg"
                    width={41}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Card description */}
          <p className="font-[var(--font-inter)] font-normal leading-[24px] relative shrink-0 text-[18px] text-white w-full md:text-[20px]">
            Data-driven results, refined continuously.
          </p>
        </div>

        {/* Build & Scale Card */}
        <div 
          className="box-border flex flex-col gap-[27px] h-[220px] items-center pb-[40px] pt-[30px] px-[30px] relative rounded-[16px] shrink-0 w-full md:w-[320px]"
          style={{
            background: `linear-gradient(to bottom, var(--color-brand-light-blue), var(--color-brand-dark-blue))`
          }}
        >
          <div className="flex items-center justify-between relative shrink-0 w-full">
            {/* Card title */}
            <p className="font-[var(--font-inter)] font-medium leading-[24px] relative shrink-0 text-[#e8e8e6] text-[20px] whitespace-pre md:text-[23px]">
              Build & Scale
            </p>
            
            {/* Small circle icon */}
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="relative size-[24px]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src="/images/approach-ellipse-icon.svg"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
            
            {/* Main card icon */}
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="h-[40px] relative w-[41px]">
                  <Image
                    alt="Build & Scale icon"
                    className="block max-w-none size-full"
                    src="/images/approach-card-icon.svg"
                    width={41}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Card description */}
          <p className="font-[var(--font-inter)] font-normal leading-[24px] relative shrink-0 text-[18px] text-white w-full md:text-[20px]">
            Data-driven results, refined continuously.
          </p>
        </div>

        {/* Measure & Optimize Card */}
        <div 
          className="box-border flex flex-col gap-[27px] h-[220px] items-center pb-[40px] pt-[30px] px-[30px] relative rounded-[16px] shrink-0 w-full md:w-[320px]"
          style={{
            background: `linear-gradient(to bottom, var(--color-brand-light-blue), var(--color-brand-dark-blue))`
          }}
        >
          <div className="flex items-center justify-between relative shrink-0 w-full">
            {/* Card title */}
            <p className="font-[var(--font-inter)] font-medium leading-[24px] relative shrink-0 text-[#e8e8e6] text-[20px] whitespace-pre md:text-[23px]">
              Measure <br aria-hidden="true" />& Optimize
            </p>
            
            {/* Small circle icon */}
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="relative size-[24px]">
                  <Image
                    alt=""
                    className="block max-w-none size-full"
                    src="/images/approach-ellipse-icon.svg"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>
            
            {/* Main card icon */}
            <div className="flex items-center justify-center relative shrink-0">
              <div className="flex-none rotate-[180deg] scale-y-[-100%]">
                <div className="h-[40px] relative w-[41px]">
                  <Image
                    alt="Measure & Optimize icon"
                    className="block max-w-none size-full"
                    src="/images/approach-card-icon.svg"
                    width={41}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>
          
          {/* Card description */}
          <p className="font-[var(--font-inter)] font-normal leading-[24px] relative shrink-0 text-[18px] text-white w-full md:text-[20px]">
            Data-driven results, refined continuously.
          </p>
        </div>
      </div>

      {/* Bottom decorative icons section */}
      <div className="hidden gap-[40px] h-[79px] items-start justify-end relative shrink-0 w-full max-w-[1020px] md:flex">
        <div className="flex items-center justify-center relative shrink-0">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="flex gap-[40px] items-center justify-end relative">
              {/* First decorative icon */}
              <div className="h-[82.43px] relative shrink-0 w-[82.422px]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/images/approach-decorative-icon.svg"
                  width={82}
                  height={82}
                />
              </div>
              
              {/* Second decorative icon */}
              <div className="h-[82.43px] relative shrink-0 w-[82.422px]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/images/approach-decorative-icon.svg"
                  width={82}
                  height={82}
                />
              </div>
              
              {/* Third decorative icon */}
              <div className="h-[82.43px] relative shrink-0 w-[82.422px]">
                <Image
                  alt=""
                  className="block max-w-none size-full"
                  src="/images/approach-decorative-icon.svg"
                  width={82}
                  height={82}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

