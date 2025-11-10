import Image from "next/image";

import { Button } from "./Button";

export const Resources = () => {
  const blogPosts = [
    {
      id: 1,
      image: "/images/blog-thumbnail-1.png",
      readingTime: "8 mins reading",
      title: "Interesting Blogpost",
      description:
        "We prototype, test, and refine AI systems, ensuring they accurately extract, process, and optimize data for your business needs.",
    },
    {
      id: 2,
      image: "/images/blog-thumbnail-2.png",
      readingTime: "8 mins reading",
      title: "Interesting Blogpost",
      description:
        "We prototype, test, and refine AI systems, ensuring they accurately extract, process, and optimize data for your business needs.",
    },
    {
      id: 3,
      image: "/images/blog-thumbnail-3.png",
      readingTime: "8 mins reading",
      title: "Interesting Blogpost",
      description:
        "We prototype, test, and refine AI systems, ensuring they accurately extract, process, and optimize data for your business needs.",
    },
    {
      id: 4,
      image: "/images/blog-thumbnail-4.png",
      readingTime: "8 mins reading",
      title: "Interesting Blogpost",
      description:
        "We prototype, test, and refine AI systems, ensuring they accurately extract, process, and optimize data for your business needs.",
    },
  ];

  return (
    <section className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[60px] px-4 py-[40px] sm:gap-[70px] sm:px-6 sm:py-[50px] md:gap-[60px] md:px-8 md:py-[60px] lg:gap-[80px] lg:px-[80px] lg:py-[80px]">
      <Image
        src="/images/resource-ellipse.svg"
        alt=""
        width={657}
        height={657}
        className="absolute top-0 left-0 translate-x-[50%]"
      />
      <div className="flex w-full flex-col items-center justify-center gap-[48px] sm:gap-[56px] md:gap-[60px] lg:flex-row lg:gap-[52px]">
        <div className="flex w-full shrink-0 flex-col items-start gap-[40px] sm:gap-[44px] md:w-auto md:gap-[32px]">
          <div className="flex items-center gap-[24px] sm:gap-[28px] md:gap-[32px]">
            <div className="relative h-[32px] w-[58px] sm:h-[40px] sm:w-[72px] md:h-[49px] md:w-[88px]">
              <Image
                alt=""
                className="block size-full max-w-none"
                src="/images/resource-arrows.svg"
                width={88}
                height={49}
              />
            </div>
            <h2 className="mb-[-8px] flex flex-col justify-center text-[32px] leading-[0] font-[var(--font-azeret-mono)] font-medium tracking-[-0.96px] text-white sm:text-[36px] md:text-[40px] lg:text-[48px]">
              <span className="leading-[44px] sm:leading-[50px] md:leading-[56px] lg:leading-[64px]">
                Resources
              </span>
            </h2>
          </div>

          <p className="text-[16px] leading-[24px] font-[var(--font-inter)] font-normal text-[#c1c3c9] sm:text-[17px] sm:leading-[26px] md:text-[18px]">
            Stay up-to-date with news all around the globe.
          </p>
        </div>

        <div className="border-medium-gray relative box-border flex w-full max-w-[740px] shrink-0 flex-col items-center gap-[32px] rounded-[16px] border bg-[#18062f] px-[24px] pt-[28px] pb-[36px] sm:gap-[36px] sm:px-[28px] sm:pt-[32px] sm:pb-[40px] md:w-auto md:gap-[27px] md:px-[30px] md:pt-[20px] md:pb-[30px]">
          <div className="flex w-full items-center gap-[27px]">
            <div className="flex items-center gap-[24px]">
              <div className="relative h-[20px] w-[20px] sm:h-[22px] sm:w-[22px] md:h-[24px] md:w-[25px]">
                <Image
                  alt=""
                  className="block size-full max-w-none"
                  src="/images/blog-icon.svg"
                  width={25}
                  height={24}
                />
              </div>
              <p className="text-[18px] leading-[24px] font-[var(--font-inter)] font-medium text-white sm:text-[20px] md:text-[23px]">
                Discover
              </p>
            </div>
          </div>

          <div className="flex w-full flex-col items-start gap-[32px] sm:gap-[36px] md:gap-[22px]">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex w-full flex-col items-start gap-[24px] sm:gap-[28px] md:gap-[37px]"
              >
                <div className="relative flex w-full flex-col items-center gap-[24px] sm:gap-[28px] md:gap-[32px] lg:flex-row lg:gap-[48px]">
                  <div className="relative h-[136px] w-[136px] flex-shrink-0 rounded-[8px]">
                    <Image
                      alt={`${post.title} thumbnail`}
                      src="/images/blog-thumbnail-1.png"
                      fill
                      className="rounded-[8px] shadow-[3.086px_3.086px_19.287px_0px_rgba(0,0,0,0.25)]"
                    />
                  </div>

                  <div className="flex w-full flex-col items-start gap-[18px] sm:gap-[20px] md:w-auto md:gap-[15px]">
                    <div className="flex w-full flex-col items-start">
                      <p className="w-full text-[10px] leading-[24px] font-[var(--font-inter)] font-normal text-[#b9bfd6] sm:text-[11px]">
                        {post.readingTime}
                      </p>

                      <div className="flex w-full flex-col items-start gap-[8px] sm:gap-[6px] md:gap-[5px]">
                        <p className="w-full text-[14px] leading-[24px] font-[var(--font-inter)] font-medium text-[#f2f4fa] sm:text-[15px] sm:leading-[26px] md:text-[16px]">
                          {post.title}
                        </p>
                        <p className="w-full text-[12px] leading-[18px] font-[var(--font-inter)] font-normal text-[#b9bfd6] sm:text-[13px] sm:leading-[20px]">
                          {post.description}
                        </p>
                      </div>
                    </div>

                    <Button variant="Filter">Read this</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
