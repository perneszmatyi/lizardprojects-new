import Image from "next/image";

import { CustomButton } from "../Button/CustomButton";

export const ContactForm = () => {
  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-[40px] px-4 py-[40px] sm:px-6 md:gap-[60px] md:px-8 md:py-[60px] lg:gap-[80px] lg:px-[80px] lg:py-[80px]">
      <div className="flex w-full flex-shrink-0 flex-col justify-center gap-[40px] md:flex-row md:gap-[60px] lg:gap-[120px]">
        <div className="flex h-full w-fit flex-col items-center gap-[40px] md:items-start md:gap-[46px]">
          <div className="flex w-full flex-col items-center gap-[10px]">
            <h2 className="font-azeret-mono flex flex-col justify-center text-center text-[32px] font-medium text-white md:text-[40px] lg:text-[48px]">
              Let&apos;s work together
            </h2>
            <p className="font-inter text-medium-gray w-full text-[16px] leading-[24px] font-normal md:text-[18px]">
              Have a question or ready to transform your business?
            </p>
          </div>

          <div className="from-light-blue-alt w-full max-w-[598px] rounded-[20px] bg-gradient-to-b to-[#44518d] p-[40px]">
            <div className="flex w-full flex-col items-center gap-[44px] md:items-start">
              <div className="flex w-full flex-col items-center gap-[28px] md:items-start">
                <div className="bg-deep-blue/40 flex h-[42px] w-full items-center rounded-[50px] border-0 px-[35px] py-[15px]">
                  <p className="font-inter text-light-gray text-[14px] leading-normal font-medium">
                    Full Name
                  </p>
                </div>

                <div className="flex w-full gap-4">
                  <div className="bg-deep-blue/40 flex h-[42px] w-full items-center rounded-[50px] border-0 px-[35px] py-[15px]">
                    <p className="font-inter text-light-gray text-[14px] leading-normal font-medium">
                      Email
                    </p>
                  </div>

                  <div className="bg-deep-blue/40 flex h-[42px] w-full items-center rounded-[50px] border-0 px-[35px] py-[15px]">
                    <p className="font-inter text-light-gray text-[14px] leading-normal font-medium">
                      Phone
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex w-full flex-col items-center gap-[20px] md:flex-row md:items-start md:justify-between">
                <div className="flex w-full items-center gap-[14px] md:w-auto md:items-start">
                  <div className="flex items-center">
                    <div className="bg-gray size-[16px] shrink-0 rounded-[2px]" />
                  </div>
                  <p className="font-inter text-gray text-[10px] leading-[14px] font-normal">
                    We value your privacy and are committed to protecting your
                    data in accordance with GDPR regulations.
                  </p>
                </div>

                <CustomButton variant="Success">Get started</CustomButton>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-center md:items-start md:justify-start lg:flex">
          <Image alt="" src="/images/half-globe.svg" width={200} height={585} />
        </div>
      </div>
    </section>
  );
};
