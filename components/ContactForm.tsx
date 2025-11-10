import Image from "next/image";

import { Button } from "./Button";

export const ContactForm = () => {
  const contactPerson = {
    name: "Valaki Valaki",
    role: "Sales Manager",
    avatar:
      "http://localhost:3845/assets/e861aa6416dd258f085d2b51054c16126e5703f7.svg",
  };

  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col gap-[40px] px-4 py-[40px] sm:px-6 md:gap-[60px] md:px-8 md:py-[60px] lg:gap-[80px] lg:px-[80px] lg:py-[80px]">
      <div className="flex w-full flex-shrink-0 flex-col justify-center gap-[40px] md:flex-row md:gap-[60px] lg:gap-[120px]">
        <div className="flex h-full w-fit flex-col items-start gap-[40px] md:gap-[46px]">
          <div className="flex w-full flex-col items-center gap-[10px]">
            <h2 className="font-azeret-mono flex flex-col justify-center text-center text-[32px] font-medium text-white md:text-[40px] lg:text-[48px]">
              Let&apos;s work together
            </h2>
            <p className="font-inter text-medium-gray w-full text-[16px] leading-[24px] font-normal md:text-[18px]">
              Have a question or ready to transform your business?
            </p>
          </div>

          <div className="flex w-full items-center gap-[30px]">
            <div className="relative size-[50px] shrink-0">
              <Image
                alt=""
                className="block size-full max-w-none"
                src="/images/contact-avatar.svg"
                width={50}
                height={50}
              />
            </div>
            <div className="flex flex-col items-start gap-[4px]">
              <p className="font-inter w-full text-[18px] leading-[24px] font-medium text-white md:text-[20px]">
                {contactPerson.name}
              </p>
              <p className="font-inter text-dark-gray-text w-full text-[12px] leading-[24px] font-medium md:text-[14px]">
                {contactPerson.role}
              </p>
            </div>
          </div>

          <div className="from-light-blue-alt w-full max-w-[598px] rounded-[20px] bg-gradient-to-b to-[#44518d] p-[40px]">
            <div className="flex w-full flex-col items-start gap-[44px]">
              <div className="flex w-full flex-col items-start gap-[28px]">
                <div className="bg-deep-blue/40 flex h-[42px] w-full items-center rounded-[50px] border-0 px-[35px] py-[15px]">
                  <p className="font-inter text-light-gray text-[14px] leading-normal font-medium">
                    Full Name
                  </p>
                </div>

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

              <div className="flex w-full flex-col items-start gap-[20px] md:flex-row md:items-center md:justify-between">
                <div className="flex w-full items-start gap-[14px] md:w-auto">
                  <div className="flex items-center">
                    <div className="bg-gray size-[16px] shrink-0 rounded-[2px]" />
                  </div>
                  <p className="font-inter text-gray text-[10px] leading-[14px] font-normal">
                    We value your privacy and are committed to protecting your
                    data in accordance with GDPR regulations.
                  </p>
                </div>

                <Button variant="Success">Get started</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="items-start justify-start">
          <Image alt="" src="/images/half-globe.svg" width={200} height={585} />
        </div>
      </div>
    </section>
  );
};
