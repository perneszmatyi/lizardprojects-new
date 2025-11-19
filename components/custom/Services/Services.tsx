"use client";

import { useState } from "react";
import Image from "next/image";

export const Services = () => {
  const services: Array<{
    title: string;
    description: string;
  }> = [
    {
      title: "Development",
      description:
        "Tired of performance issues, template designs, and monthly fees? We develop custom-designed websites, performance-optimized to the max, and built to convert.",
    },
    {
      title: "UX/UI",
      description:
        "We turn confusing interfaces into seamless experiences. Better usability = happier users = more conversions.",
    },
    {
      title: "AI Integration",
      description:
        "AI is not only about chatbots and cute pets in superhero costumes. It can automate processes, speed up decisions, recognize patterns, and more! Let us show you how!",
    },
    {
      title: "Apps",
      description:
        "Web apps or native mobile (iOS/Android) that users actually stick with. Fast, intuitive, built to scale.",
    },
  ];

  const [selectedService, setSelectedService] = useState(0);

  return (
    <section className="relative mx-auto flex w-full flex-col items-start gap-[60px] py-[60px] sm:py-[80px] md:py-[100px] lg:gap-[120px] lg:py-[120px]">
      <div className="flex w-full items-center justify-center">
        <h2 className="font-azeret-mono text-light-gray text-center text-[28px] leading-[44px] font-medium sm:text-[32px] sm:leading-[60px] md:text-[35px] md:leading-[70px] lg:text-[65px]">
          Our Services
        </h2>
      </div>

      <div className="flex w-full flex-col justify-center gap-[40px] lg:flex-row lg:gap-[80px] xl:gap-[140px]">
        <div className="flex flex-shrink-0 flex-col justify-between gap-[24px]">
          {services.map((service, index) => {
            const isActive = selectedService === index;
            return (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`group flex cursor-pointer items-center gap-[12px] transition-all duration-300 sm:gap-[14px] ${
                  isActive ? "" : "opacity-70 hover:opacity-100"
                }`}
              >
                <div className="relative h-[20px] w-[28px] shrink-0 sm:h-[22px] sm:w-[30px] md:h-[24px] md:w-[34px]">
                  <Image
                    src="/images/comment-decor.svg"
                    alt=""
                    fill
                    className="object-contain"
                  />
                </div>
                <span
                  className={`font-azeret-mono text-left text-[18px] leading-[32px] font-medium tracking-[-0.36px] transition-colors duration-300 sm:text-[20px] sm:leading-[40px] sm:tracking-[-0.4px] md:text-[22px] md:leading-[50px] md:tracking-[-0.44px] lg:text-[24px] lg:leading-[58px] lg:tracking-[-0.48px] ${
                    isActive
                      ? "text-light-gray"
                      : "text-gray group-hover:text-light-gray"
                  }`}
                >
                  {service.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative">
          <div className="border-light-blue absolute top-0 right-0 h-full w-full max-w-[609px] translate-x-[5%] translate-y-[5%] border-3 lg:translate-x-[10%] lg:translate-y-[10%]"></div>
          <div className="border-light-blue relative z-90 flex max-w-[609px] flex-1 flex-col gap-[24px] border-3 bg-[#0E0B2F] p-16 lg:h-[360px] lg:justify-center lg:gap-[30px]">
            <div
              key={selectedService}
              className="animate-fadeInUp flex flex-col gap-[24px] lg:gap-[30px]"
            >
              <h3 className="font-azeret-mono text-light-gray text-[20px] leading-[30px] font-semibold sm:text-[22px] sm:leading-[32px] md:text-[24px] md:leading-[34px]">
                {services[selectedService].title}
              </h3>
              <p className="font-inter text-gray text-[15px] leading-[26px] font-medium sm:text-[16px] sm:leading-[28px] md:text-[17px] md:leading-[30px] lg:text-[18px] lg:leading-[32px]">
                {services[selectedService].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
