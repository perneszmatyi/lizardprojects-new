import Image from "next/image";

import { CustomButton } from "../Button/CustomButton";
import { TeamCard } from "./TeamCard";

export const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Zoltán Aizenpreisz",
      role: "Astronaut",
      image: "/images/team-member-1.png",
    },
    {
      id: 2,
      name: "Zoltán Aizenpreisz",
      role: "Astronaut",
      image: "/images/team-member-1.png",
    },
    {
      id: 3,
      name: "Zoltán Aizenpreisz",
      role: "Astronaut",
      image: "/images/team-member-1.png",
    },
    {
      id: 4,
      name: "Zoltán Aizenpreisz",
      role: "Astronaut",
      image: "/images/team-member-1.png",
    },
    {
      id: 5,
      name: "Zoltán Aizenpreisz",
      role: "Astronaut",
      image: "/images/team-member-1.png",
    },
    {
      id: 6,
      name: "Zoltán Aizenpreisz",
      role: "Astronaut",
      image: "/images/team-member-1.png",
    },
  ];

  return (
    <section className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[40px] px-4 py-0 sm:px-6 md:gap-[60px] md:px-8 lg:gap-[80px] lg:px-[80px]">
      <div className="flex w-full flex-col items-center justify-center gap-[40px] md:flex-row md:gap-[53px] lg:gap-[160px]">
        <div className="flex w-full flex-col items-center md:flex-row md:items-start md:justify-center lg:gap-[53px]">
          <div className="flex w-full flex-col gap-[23px] md:w-[136px]">
            {teamMembers.slice(0, 2).map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                linkedInIcon="/images/linkedin.svg"
                websiteIcon="/images/website.svg"
              />
            ))}
          </div>

          <div className="hidden md:block md:w-[136px]">
            <div className="flex flex-col gap-[23px] pt-[42px]">
              {teamMembers.slice(2, 4).map((member) => (
                <TeamCard
                  key={member.id}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  linkedInIcon="/images/linkedin.svg"
                  websiteIcon="/images/website.svg"
                />
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-[23px] pt-[85px] md:w-[136px]">
            {teamMembers.slice(4, 6).map((member) => (
              <TeamCard
                key={member.id}
                name={member.name}
                role={member.role}
                image={member.image}
                linkedInIcon="/images/linkedin.svg"
                websiteIcon="/images/website.svg"
              />
            ))}
          </div>
        </div>

        <div className="flex w-full flex-col items-start justify-center gap-[20px]">
          <div className="flex w-full flex-col items-start gap-[32px] md:gap-[70px]">
            <div className="flex w-full flex-col items-start gap-[32px]">
              <h2 className="mb-[-8px] flex flex-col justify-center text-[32px] leading-[0] font-medium text-white md:text-[40px] lg:text-[48px]">
                <span className="font-azeret-mono leading-[44px] md:leading-[56px] lg:leading-[64px]">
                  Meet our team
                </span>
              </h2>

              <div className="relative h-[32px] w-[88px] md:h-[40px] md:w-[110px] lg:h-[51px] lg:w-[152px]">
                <div className="absolute inset-0 flex">
                  <div className="relative h-full">
                    <Image
                      alt=""
                      className="block size-full max-w-none"
                      src="/images/team-stars.svg"
                      width={152}
                      height={51}
                    />
                  </div>
                </div>
              </div>

              <p className="w-full text-[16px] leading-[24px] font-[var(--font-inter)] font-normal text-[#c1c3c9] md:text-[18px]">
                Stay up-to-date with news all around the globe with
                Perplexity&apos;s Discover feature!
              </p>
            </div>

            <CustomButton variant="Primary">More about us</CustomButton>
          </div>
        </div>
      </div>
    </section>
  );
};
