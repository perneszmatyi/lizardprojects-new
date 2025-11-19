import { CustomButton } from "../Button/CustomButton";

export const ContactForm = () => {
  return (
    <section className="flex flex-col gap-[40px] py-[40px] md:gap-[60px] md:py-[60px] lg:gap-[80px] lg:py-[80px]">
      <div className="flex flex-col items-center gap-[10px] md:items-start">
        <h2 className="font-azeret-mono text-center text-[32px] font-medium text-white md:text-[40px] lg:text-[48px]">
          Let&apos;s work together
        </h2>
        <p className="font-inter text-medium-gray text-[16px] leading-[24px] md:text-[18px]">
          Have a question or ready to transform your business?
        </p>
      </div>

      <div className="border-light-blue max-w-[598px] border-3 p-[40px]">
        <div className="flex flex-col gap-[44px] md:items-start">
          <div className="flex w-full flex-col gap-[24px]">
            <div className="flex h-[42px] w-full items-center bg-[rgba(167,178,224,0.3)] px-[35px] py-[15px]">
              <p className="font-inter text-light-gray text-[14px] font-medium">
                Full Name
              </p>
            </div>

            <div className="flex h-[42px] w-full items-center bg-[rgba(167,178,224,0.3)] px-[35px] py-[15px]">
              <p className="font-inter text-light-gray text-[14px] font-medium">
                Email
              </p>
            </div>

            <div className="flex h-[42px] w-full items-center bg-[rgba(167,178,224,0.3)] px-[35px] py-[15px]">
              <p className="font-inter text-light-gray text-[14px] font-medium">
                Phone
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-[20px] md:flex-row md:justify-between">
            <div className="flex items-center gap-[14px] md:items-start">
              <div className="bg-gray size-[16px] rounded-[2px]" />
              <p className="font-inter text-gray text-[10px] leading-[14px]">
                We value your privacy and are committed to protecting your data
                in accordance with GDPR regulations.
              </p>
            </div>
            <CustomButton variant="Primary">Get started</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};
