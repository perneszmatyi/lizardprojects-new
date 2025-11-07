import Image from "next/image";

import Button from "./Button";

// Resources section component
// Displays a header with title and subtitle, followed by a card containing blog posts
// Each blog post shows an image, reading time, title, description, and a "Read this" button
export default function Resources() {
  // Blog post data
  // In a real application, this would come from a CMS or API
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
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[40px] px-4 py-0 sm:px-6 md:gap-[60px] md:px-8 lg:gap-[80px] lg:px-[80px]">
      {/* Main container with header and card side by side on larger screens */}
      <div className="flex w-full flex-col items-center justify-center gap-[32px] md:flex-row md:gap-[52px]">
        {/* Header section with title and subtitle */}
        <div className="flex shrink-0 flex-col items-start gap-[32px]">
          {/* Title with icon */}
          <div className="flex items-center gap-[32px]">
            {/* Logo icon */}
            <div className="relative h-[32px] w-[58px] md:h-[49px] md:w-[88px]">
              <Image
                alt=""
                className="block size-full max-w-none"
                src="/images/blog-icon.svg"
                width={88}
                height={49}
              />
            </div>
            {/* Main heading */}
            <h2 className="mb-[-8px] flex flex-col justify-center text-[32px] leading-[0] font-[var(--font-azeret-mono)] font-medium tracking-[-0.96px] text-white md:text-[40px] lg:text-[48px]">
              <span className="leading-[44px] md:leading-[56px] lg:leading-[64px]">
                Resources
              </span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-[16px] leading-[24px] font-[var(--font-inter)] font-normal text-[#c1c3c9] md:text-[18px]">
            Stay up-to-date with news all around the globe.
          </p>
        </div>

        {/* Blog posts card */}
        <div className="relative box-border flex w-full shrink-0 flex-col items-center gap-[27px] rounded-[16px] border border-solid border-white bg-[#18062f] px-[20px] pt-[20px] pb-[30px] md:w-auto md:px-[30px]">
          {/* Card header */}
          <div className="flex w-full items-center gap-[27px]">
            <div className="flex items-center gap-[24px]">
              <div className="relative h-[20px] w-[20px] md:h-[24px] md:w-[25px]">
                <Image
                  alt=""
                  className="block size-full max-w-none"
                  src="/images/blog-icon.svg"
                  width={25}
                  height={24}
                />
              </div>
              <p className="text-[18px] leading-[24px] font-[var(--font-inter)] font-medium text-white md:text-[23px]">
                Discover
              </p>
            </div>
          </div>

          {/* Blog posts list */}
          <div className="flex w-full flex-col items-start gap-[22px]">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="flex w-full flex-col items-start gap-[37px]"
              >
                <div className="flex w-full flex-col items-center gap-[48px] md:flex-row">
                  {/* Blog post image */}
                  <div className="flex flex-row items-center self-stretch">
                    <div className="relative aspect-square h-[60px] w-[60px] shrink-0 rounded-[8px] shadow-[3.086px_3.086px_19.287px_0px_rgba(0,0,0,0.25)] md:h-[80px] md:w-[80px]">
                      <Image
                        alt={`${post.title} thumbnail`}
                        className="pointer-events-none absolute inset-0 size-full max-w-none rounded-[8px] object-cover"
                        src={post.image}
                        width={80}
                        height={80}
                      />
                    </div>
                  </div>

                  {/* Blog post content */}
                  <div className="flex w-full flex-col items-start gap-[15px] md:w-auto">
                    <div className="flex w-full flex-col items-start">
                      {/* Reading time */}
                      <p className="w-full text-[10px] leading-[24px] font-[var(--font-inter)] font-normal text-[#b9bfd6]">
                        {post.readingTime}
                      </p>

                      {/* Title and description */}
                      <div className="flex w-full flex-col items-start gap-[5px]">
                        <p className="w-full text-[14px] leading-[24px] font-[var(--font-inter)] font-medium text-[#f2f4fa] md:text-[16px]">
                          {post.title}
                        </p>
                        <p className="w-full text-[12px] leading-[18px] font-[var(--font-inter)] font-normal text-[#b9bfd6]">
                          {post.description}
                        </p>
                      </div>
                    </div>

                    {/* Read this button */}
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
}
