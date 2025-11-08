import Image from "next/image";

export const Approach = () => {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[60px] px-4 py-[40px] sm:gap-[70px] sm:px-6 sm:py-[50px] md:gap-[60px] md:px-8 md:py-[60px] lg:gap-[80px] lg:px-[80px] lg:py-[80px]">
      <div className="flex flex-col items-center gap-[32px] sm:gap-[36px] md:gap-[24px]">
        <div className="flex flex-col items-center gap-[44px] sm:gap-[48px] md:gap-[38px]">
          <h2 className="mb-[-8px] flex max-w-[1020px] flex-col justify-center text-center text-[32px] leading-[0] font-[var(--font-azeret-mono)] font-medium tracking-[-0.96px] text-[var(--color-text-100)] sm:text-[36px] md:text-[40px] lg:text-[48px]">
            <span className="leading-[44px] sm:leading-[50px] md:leading-[56px] lg:leading-[64px]">
              Our approach
            </span>
          </h2>

          <p className="relative w-full max-w-[1020px] text-center text-[16px] leading-[24px] font-[var(--font-inter)] font-medium text-[var(--color-text-100)] sm:text-[17px] sm:leading-[26px] md:text-[18px] lg:text-[20px]">
            Multi-disciplinary, flexible, and laser-focused on your objectives.
            No fluff, just expertise.
          </p>
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-[32px] sm:gap-[36px] md:gap-[28px] lg:flex-row lg:justify-center lg:gap-[30px]">
        <div
          className="relative box-border flex min-h-[240px] w-full shrink-0 flex-col items-center gap-[32px] rounded-[16px] px-[32px] pt-[36px] pb-[44px] sm:min-h-[250px] sm:gap-[30px] sm:px-[34px] sm:pt-[38px] sm:pb-[46px] md:h-[220px] md:w-[320px] md:gap-[27px] md:px-[30px] md:pt-[30px] md:pb-[40px]"
          style={{
            background: `linear-gradient(to bottom, var(--color-brand-light-blue), var(--color-brand-dark-blue))`,
          }}
        >
          <div className="relative flex w-full shrink-0 items-center justify-between">
            <p className="relative shrink-0 text-[20px] leading-[24px] font-[var(--font-inter)] font-medium whitespace-pre text-[#e8e8e6] sm:text-[21px] sm:leading-[26px] md:text-[23px]">
              Insight
            </p>

            <div className="relative flex shrink-0 items-center justify-center">
              <div className="flex-none scale-y-[-100%] rotate-[180deg]">
                <div className="relative size-[24px] sm:size-[26px] md:size-[24px]">
                  <Image
                    alt=""
                    className="block size-full max-w-none"
                    src="/images/approach-ellipse-icon.svg"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>

            <div className="relative flex shrink-0 items-center justify-center">
              <div className="flex-none scale-y-[-100%] rotate-[180deg]">
                <div className="relative h-[40px] w-[41px] sm:h-[42px] sm:w-[43px] md:h-[40px] md:w-[41px]">
                  <Image
                    alt="Insight icon"
                    className="block size-full max-w-none"
                    src="/images/approach-card-icon.svg"
                    width={41}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="relative w-full shrink-0 text-[18px] leading-[24px] font-[var(--font-inter)] font-normal text-white sm:text-[19px] sm:leading-[26px] md:text-[20px]">
            Data-driven results, refined continuously.
          </p>
        </div>

        <div
          className="relative box-border flex min-h-[240px] w-full shrink-0 flex-col items-center gap-[32px] rounded-[16px] px-[32px] pt-[36px] pb-[44px] sm:min-h-[250px] sm:gap-[30px] sm:px-[34px] sm:pt-[38px] sm:pb-[46px] md:h-[220px] md:w-[320px] md:gap-[27px] md:px-[30px] md:pt-[30px] md:pb-[40px]"
          style={{
            background: `linear-gradient(to bottom, var(--color-brand-light-blue), var(--color-brand-dark-blue))`,
          }}
        >
          <div className="relative flex w-full shrink-0 items-center justify-between">
            <p className="relative shrink-0 text-[20px] leading-[24px] font-[var(--font-inter)] font-medium whitespace-pre text-[#e8e8e6] sm:text-[21px] sm:leading-[26px] md:text-[23px]">
              Build & Scale
            </p>

            <div className="relative flex shrink-0 items-center justify-center">
              <div className="flex-none scale-y-[-100%] rotate-[180deg]">
                <div className="relative size-[24px] sm:size-[26px] md:size-[24px]">
                  <Image
                    alt=""
                    className="block size-full max-w-none"
                    src="/images/approach-ellipse-icon.svg"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>

            <div className="relative flex shrink-0 items-center justify-center">
              <div className="flex-none scale-y-[-100%] rotate-[180deg]">
                <div className="relative h-[40px] w-[41px] sm:h-[42px] sm:w-[43px] md:h-[40px] md:w-[41px]">
                  <Image
                    alt="Build & Scale icon"
                    className="block size-full max-w-none"
                    src="/images/approach-card-icon.svg"
                    width={41}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="relative w-full shrink-0 text-[18px] leading-[24px] font-[var(--font-inter)] font-normal text-white sm:text-[19px] sm:leading-[26px] md:text-[20px]">
            Data-driven results, refined continuously.
          </p>
        </div>

        <div
          className="relative box-border flex min-h-[240px] w-full shrink-0 flex-col items-center gap-[32px] rounded-[16px] px-[32px] pt-[36px] pb-[44px] sm:min-h-[250px] sm:gap-[30px] sm:px-[34px] sm:pt-[38px] sm:pb-[46px] md:h-[220px] md:w-[320px] md:gap-[27px] md:px-[30px] md:pt-[30px] md:pb-[40px]"
          style={{
            background: `linear-gradient(to bottom, var(--color-brand-light-blue), var(--color-brand-dark-blue))`,
          }}
        >
          <div className="relative flex w-full shrink-0 items-center justify-between">
            <p className="relative shrink-0 text-[20px] leading-[24px] font-[var(--font-inter)] font-medium whitespace-pre text-[#e8e8e6] sm:text-[21px] sm:leading-[26px] md:text-[23px]">
              Measure <br aria-hidden="true" />& Optimize
            </p>

            <div className="relative flex shrink-0 items-center justify-center">
              <div className="flex-none scale-y-[-100%] rotate-[180deg]">
                <div className="relative size-[24px] sm:size-[26px] md:size-[24px]">
                  <Image
                    alt=""
                    className="block size-full max-w-none"
                    src="/images/approach-ellipse-icon.svg"
                    width={24}
                    height={24}
                  />
                </div>
              </div>
            </div>

            <div className="relative flex shrink-0 items-center justify-center">
              <div className="flex-none scale-y-[-100%] rotate-[180deg]">
                <div className="relative h-[40px] w-[41px] sm:h-[42px] sm:w-[43px] md:h-[40px] md:w-[41px]">
                  <Image
                    alt="Measure & Optimize icon"
                    className="block size-full max-w-none"
                    src="/images/approach-card-icon.svg"
                    width={41}
                    height={40}
                  />
                </div>
              </div>
            </div>
          </div>

          <p className="relative w-full shrink-0 text-[18px] leading-[24px] font-[var(--font-inter)] font-normal text-white sm:text-[19px] sm:leading-[26px] md:text-[20px]">
            Data-driven results, refined continuously.
          </p>
        </div>
      </div>

      <div className="relative hidden h-[79px] w-full max-w-[1020px] shrink-0 items-start justify-end gap-[40px] md:flex">
        <div className="relative flex shrink-0 items-center justify-center">
          <div className="flex-none scale-y-[-100%] rotate-[180deg]">
            <div className="relative flex items-center justify-end gap-[40px]">
              <div className="relative h-[82.43px] w-[82.422px] shrink-0">
                <Image
                  alt=""
                  className="block size-full max-w-none"
                  src="/images/approach-decorative-icon.svg"
                  width={82}
                  height={82}
                />
              </div>

              <div className="relative h-[82.43px] w-[82.422px] shrink-0">
                <Image
                  alt=""
                  className="block size-full max-w-none"
                  src="/images/approach-decorative-icon.svg"
                  width={82}
                  height={82}
                />
              </div>

              <div className="relative h-[82.43px] w-[82.422px] shrink-0">
                <Image
                  alt=""
                  className="block size-full max-w-none"
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
};
