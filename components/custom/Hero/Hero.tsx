import { CustomButton } from "../Button/CustomButton";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="z-20 flex w-full max-w-[1440px] flex-col items-center gap-[50px] pb-[24px] md:items-start md:gap-[70px]">
      <div className="flex flex-col items-center gap-[40px] md:gap-[60px]">
        <h1 className="font-azeret-mono mt-10 flex flex-col justify-start text-center text-[48px] font-medium text-white md:text-start md:text-[64px] lg:mt-[100px]">
          We build digital products. <br /> You Grow.
        </h1>
      </div>

      <Link href="#contact">
        <CustomButton
          variant="Primary"
          className="px-[24px] py-[14px] text-base font-bold uppercase md:px-[35px] md:py-[20px] md:text-xl"
        >
          Book a free consultation
        </CustomButton>
      </Link>
    </section>
  );
};
