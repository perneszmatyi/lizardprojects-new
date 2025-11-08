import Image from "next/image";

import { Button } from "./Button";

export const ContactForm = () => {
  const contactPerson = {
    name: "Valaki Valaki",
    role: "Sales Manager",
    avatar:
      "http://localhost:3845/assets/e861aa6416dd258f085d2b51054c16126e5703f7.svg",
  };

  const decorativeVector =
    "http://localhost:3845/assets/a8f9453864eab88a40f750c9d2bada18649df8a5.svg";
  const decorativeLayer =
    "http://localhost:3845/assets/8a0003a2f3b5811647bf88f9d8e45c46a72c1945.svg";

  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[40px] px-4 py-[40px] sm:px-6 md:gap-[60px] md:px-8 md:py-[60px] lg:gap-[80px] lg:px-[80px] lg:py-[80px]">
      <div className="flex w-full flex-col items-center justify-center gap-[40px] md:flex-row md:gap-[60px] lg:gap-[120px]">
        <div className="flex w-full flex-col items-start justify-center md:w-auto">
          <div className="flex w-full max-w-[598px] flex-col items-start gap-[40px] md:gap-[46px]">
            <div className="flex w-full flex-col items-center gap-[10px]">
              <h2 className="mb-[-8px] flex flex-col justify-center text-center text-[32px] leading-[0] font-[var(--font-azeret-mono)] font-medium tracking-[-1.2px] text-[#f2f4fa] md:text-[40px] lg:text-[48px]">
                <span className="leading-[44px] md:leading-[56px] lg:leading-[64px]">
                  Let&apos;s work together
                </span>
              </h2>
              <p className="w-full text-center text-[16px] leading-[24px] font-[var(--font-inter)] font-normal text-[#a0a0b8] md:text-[18px]">
                Have a question or ready to transform your business?
              </p>
            </div>

            <div className="flex w-full items-center gap-[30px]">
              <div className="relative size-[50px] shrink-0">
                <Image
                  alt=""
                  className="block size-full max-w-none"
                  src={contactPerson.avatar}
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col items-start gap-[4px]">
                <p className="w-full text-[18px] leading-[24px] font-[var(--font-inter)] font-medium text-[#f2f4fa] md:text-[20px]">
                  {contactPerson.name}
                </p>
                <p className="w-full text-[12px] leading-[24px] font-[var(--font-inter)] font-medium text-[#6c6c80] md:text-[14px]">
                  {contactPerson.role}
                </p>
              </div>
            </div>

            <div className="w-full max-w-[598px] rounded-[20px] border border-solid border-white bg-gradient-to-b from-[#758bf3] to-[#44518d] p-[40px]">
              <div className="flex w-full flex-col items-start gap-[44px]">
                <div className="flex w-full flex-col items-start gap-[28px]">
                  <div className="h-[42px] w-full rounded-[50px] border-0 bg-[rgba(40,48,97,0.4)] px-[35px] py-[15px]">
                    <p className="text-[14px] leading-normal font-[var(--font-inter)] font-medium text-[#e6e6f0]">
                      Full Name
                    </p>
                  </div>

                  <div className="h-[42px] w-full rounded-[50px] border-0 bg-[rgba(40,48,97,0.4)] px-[35px] py-[15px]">
                    <p className="text-[14px] leading-normal font-[var(--font-inter)] font-medium text-[#e6e6f0]">
                      Email
                    </p>
                  </div>

                  <div className="h-[42px] w-full rounded-[50px] border-0 bg-[rgba(40,48,97,0.4)] px-[35px] py-[15px]">
                    <p className="text-[14px] leading-normal font-[var(--font-inter)] font-medium text-[#e6e6f0]">
                      Phone
                    </p>
                  </div>
                </div>

                <div className="flex w-full flex-col items-start gap-[20px] md:flex-row md:items-center md:justify-between">
                  <div className="flex w-full items-start gap-[14px] md:w-auto">
                    <div className="flex items-center">
                      <div className="size-[16px] shrink-0 rounded-[2px] bg-[#b9bfd6]" />
                    </div>
                    <p className="text-[10px] leading-[14px] font-[var(--font-inter)] font-normal text-[#b9bfd6]">
                      We value your privacy and are committed to protecting your
                      data in accordance with GDPR regulations.
                    </p>
                  </div>

                  <Button variant="Success">Get started</Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden items-center justify-center md:flex">
          <div className="relative h-[400px] w-[150px] scale-y-[-1] rotate-180 md:h-[500px] md:w-[180px] lg:h-[585.61px] lg:w-[200.78px]">
            <div className="absolute top-[11.25%] left-[-50%] hidden items-center justify-center border-2 md:left-[-80%] lg:left-[-113.77%] xl:flex">
              <div className="relative h-[300px] w-[300px] scale-y-[-1] rotate-180 md:h-[350px] md:w-[350px] lg:h-[430px] lg:w-[430px]">
                <Image
                  alt=""
                  className="block size-full max-w-none object-contain"
                  src={decorativeLayer}
                  width={430}
                  height={430}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
