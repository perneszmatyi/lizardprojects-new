"use client";

import { useState } from "react";
import {
  Globe,
  Palette,
  Brain,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export const Services = () => {
  const services: Array<{
    title: string;
    shortTitle: string;
    description: string;
    icon: LucideIcon;
  }> = [
    {
      title: "Webdesign and development",
      shortTitle: "Web Development",
      description:
        "Tired of performance issues, template designs, and monthly fees? We develop custom-designed websites, performance-optimized to the max, and built to convert.",
      icon: Globe,
    },
    {
      title: "UX/UI design",
      shortTitle: "UX/UI Design",
      description:
        "We turn confusing interfaces into seamless experiences. Better usability = happier users = more conversions.",
      icon: Palette,
    },
    {
      title: "AI integration",
      shortTitle: "AI integration",
      description:
        "AI is not only about chatbots and cute pets in superhero costumes. It can automate processes, speed up decisions, recognise patterns, and more! Let us show you how! (click) (Don't worry,, it won't take your job.)",
      icon: Brain,
    },
    {
      title: "App development",
      shortTitle: "App Development",
      description:
        "Web apps or native mobile (iOS/Android) that users actually stick with. Fast, intuitive, built to scale.",
      icon: Smartphone,
    },
    // {
    //   title: "Complex enterprise software",
    //   shortTitle: "Enterprise Software",
    //   description:
    //     "Complex systems for complex problems. Multimodal AI solutions, seamless integration, smart automation.",
    //   icon: Building2,
    // },
    // {
    //   title: "Graphic design studio",
    //   shortTitle: "Graphic Design",
    //   description:
    //     "Brand identity, product design, print, and digital assets by a design team that consistently raises the bar. We don't do 'good enough.'",
    //   icon: Paintbrush,
    // },
    // {
    //   title: "Digital marketing",
    //   shortTitle: "Digital Marketing",
    //   description:
    //     "Paid ads, SEO, social media, end-to-end strategy planning and management.",
    //   icon: TrendingUp,
    // },
    // {
    //   title: "Media",
    //   shortTitle: "Media",
    //   description:
    //     "Animations (2d/3d), video production, photography, copywriting. All you need in one place.",
    //   icon: Video,
    // },
  ];

  const [selectedService, setSelectedService] = useState(0);

  return (
    <section className="relative container mx-auto flex w-full flex-col items-center gap-[28px] px-4 py-[28px] sm:gap-[32px] sm:px-6 sm:py-[32px] md:gap-[36px] md:px-8 md:py-[36px] lg:gap-[40px] lg:px-[80px] lg:py-[40px]">
      <div className="relative flex flex-col items-center gap-[10px]">
        <div className="border-blue/30 bg-blue/5 mb-[6px] flex items-center gap-[8px] rounded-[6px] border px-[12px] py-[6px]">
          <div className="bg-blue h-[6px] w-[6px] animate-pulse rounded-full" />
          <span className="font-azeret-mono text-blue text-[11px] font-medium tracking-[2px] uppercase sm:text-[12px]">
            What we do
          </span>
        </div>
        <h2 className="font-azeret-mono text-light-gray mb-[-8px] flex max-w-[1020px] flex-col justify-center text-center text-[32px] leading-[0] font-bold tracking-[1px] uppercase sm:text-[38px] sm:tracking-[2px] md:text-[44px] lg:text-[50px]">
          <span className="leading-[44px] sm:leading-[52px] md:leading-[58px] lg:leading-[64px]">
            Our Services
          </span>
        </h2>

        <div className="bg-blue absolute -top-4 left-1/2 h-[100px] w-[400px] -translate-x-1/2 opacity-10 blur-[80px]" />
      </div>

      <div className="flex w-full flex-col justify-center gap-[20px] lg:flex-row lg:items-stretch lg:gap-[32px]">
        <div className="grid grid-cols-2 gap-[8px] sm:grid-cols-3 sm:gap-[10px] md:grid-cols-4 lg:flex lg:max-w-[380px] lg:min-w-[340px] lg:flex-col">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = selectedService === index;
            return (
              <button
                key={index}
                onClick={() => setSelectedService(index)}
                className={`group relative z-50 flex cursor-pointer flex-col items-center gap-[8px] overflow-hidden rounded-[12px] border px-[12px] py-[12px] text-center transition-all duration-300 lg:flex-row lg:gap-[14px] lg:px-[16px] lg:py-[14px] lg:text-left ${
                  isActive
                    ? "border-blue/40 from-blue/15 to-blue/5 text-blue bg-gradient-to-r shadow-[0_4px_20px_rgba(86,116,251,0.15)] lg:scale-[1.02]"
                    : "border-medium-gray/10 bg-dark-gray/20 text-light-gray hover:border-blue/20 hover:bg-blue/5 hover:text-blue"
                }`}
              >
                <div className="from-blue/5 absolute inset-0 bg-gradient-to-r to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div
                  className={`relative flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-[10px] transition-all duration-300 sm:h-[40px] sm:w-[40px] lg:h-[40px] lg:w-[40px] ${
                    isActive
                      ? "bg-blue shadow-[0_0_24px_rgba(86,116,251,0.5)]"
                      : "bg-medium-gray/10 group-hover:bg-blue/20"
                  }`}
                >
                  <Icon
                    className={`h-[16px] w-[16px] transition-all duration-300 sm:h-[18px] sm:w-[18px] lg:h-[18px] lg:w-[18px] ${
                      isActive
                        ? "text-white"
                        : "text-medium-gray group-hover:text-blue"
                    }`}
                  />
                </div>
                <div className="relative flex flex-1 flex-col gap-[2px]">
                  <span className="font-azeret-mono text-[11px] leading-[16px] font-semibold tracking-[0.5px] uppercase sm:text-[12px] sm:leading-[18px] lg:text-[15px] lg:leading-[20px]">
                    {service.shortTitle}
                  </span>
                  {isActive && (
                    <span className="font-inter text-blue/70 hidden text-[10px] leading-[14px] font-medium lg:inline">
                      Explore this service →
                    </span>
                  )}
                </div>
                {isActive && (
                  <div className="bg-blue absolute top-0 right-0 hidden h-full w-[3px] lg:block" />
                )}
              </button>
            );
          })}
        </div>

        <div className="border-medium-gray/20 from-dark-gray/50 to-dark-gray/20 relative flex flex-1 flex-col overflow-hidden rounded-[20px] border bg-gradient-to-br p-[20px] shadow-[0_8px_40px_rgba(0,0,0,0.4)] backdrop-blur-sm sm:p-[24px] md:p-[28px] lg:max-w-[650px] lg:p-[32px]">
          <div className="bg-blue absolute -top-8 -right-8 h-[200px] w-[200px] rounded-full opacity-5 blur-[70px]" />
          <div className="bg-turquoise absolute -bottom-8 -left-8 h-[200px] w-[200px] rounded-full opacity-5 blur-[70px]" />

          <div className="relative flex flex-col">
            <div className="mb-[16px] flex flex-col items-start gap-[12px] sm:mb-[18px] sm:gap-[14px] md:mb-[20px] lg:mb-[22px]">
              {(() => {
                const Icon = services[selectedService].icon;
                return (
                  <div className="bg-blue flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[12px] shadow-[0_0_28px_rgba(86,116,251,0.5)] sm:h-[56px] sm:w-[56px] md:h-[60px] md:w-[60px] lg:h-[64px] lg:w-[64px] lg:rounded-[14px]">
                    <Icon className="h-[24px] w-[24px] text-white sm:h-[28px] sm:w-[28px] md:h-[30px] md:w-[30px] lg:h-[32px] lg:w-[32px]" />
                  </div>
                );
              })()}
              <div>
                <h3 className="font-azeret-mono text-light-gray mb-[6px] text-left text-[18px] leading-[26px] font-bold tracking-[0.5px] uppercase sm:text-[20px] sm:leading-[28px] md:text-[24px] md:leading-[32px] lg:text-[28px] lg:leading-[38px]">
                  {services[selectedService].title}
                </h3>
                <div className="bg-blue h-[3px] w-[50px] rounded-full sm:w-[60px]" />
              </div>
            </div>
            <p className="font-inter text-gray text-left text-[13px] leading-[22px] font-normal sm:text-[14px] sm:leading-[24px] md:text-[15px] md:leading-[26px] lg:text-[16px] lg:leading-[28px]">
              {services[selectedService].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
