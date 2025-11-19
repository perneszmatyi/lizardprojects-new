import Image from "next/image";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Dot Square Lab",
      url: "https://www.dotsquarelab.com/",
      image: "/images/project-dotsquarelab.png",
      description: "AI Solutions Platform",
    },
    {
      id: 2,
      name: "Inform(Ed)",
      url: "https://edinformed.com/",
      image: "/images/project-informed.png",
      description: "Education Analytics",
    },
    {
      id: 3,
      name: "Hotel Palatinus",
      url: "https://palatinussopron.com/",
      image: "/images/project-palatinus.png",
      description: "Hotel Booking",
    },
    {
      id: 4,
      name: "E-Commerce Platform",
      url: "#",
      image: "/images/gallery-image-1.png",
      description: "Online Store",
    },
    {
      id: 5,
      name: "Portfolio Site",
      url: "#",
      image: "/images/gallery-image-2.png",
      description: "Personal Brand",
    },
  ];

  return (
    <section className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[32px] py-[40px] sm:gap-[40px] sm:py-[50px] lg:py-[60px]">
      <Image
        src="/images/resource-ellipse.svg"
        alt=""
        width={900}
        height={333}
        className="absolute top-0 left-0 translate-x-[50%] translate-y-[-20%] opacity-50"
      />

      <div className="relative z-10 flex w-full flex-col">
        <h2 className="text-light-gray text-center text-[24px] leading-[36px] font-medium sm:text-[28px] sm:leading-[40px] md:text-end md:text-[48px] md:leading-[44px]">
          It&apos;s hard to forget when it&apos;s made by{" "}
          <span className="font-azeret-mono text-[28px] font-bold sm:text-[32px] md:text-[36px]">
            Lizardprojects
          </span>
        </h2>
      </div>

      <div className="relative z-10 flex w-full flex-col gap-[12px] md:flex-row">
        <a
          href={projects[0].url}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-square w-full overflow-hidden rounded-[8px] border border-[#a0a0b8]/10 transition-all duration-300 hover:border-[#03fbce]/30 md:w-1/2"
        >
          <Image
            src={projects[0].image}
            alt={projects[0].name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          <div className="absolute right-[20px] bottom-[20px] left-[20px] translate-y-[10px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <h3 className="text-[17px] font-semibold text-white">
              {projects[0].name}
            </h3>
            <p className="text-[12px] text-white/70">
              {projects[0].description}
            </p>
          </div>
        </a>

        <div className="grid w-full grid-cols-2 gap-[12px] md:w-1/2">
          {projects.slice(1, 5).map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-[8px] border border-[#a0a0b8]/10 transition-all duration-300 hover:border-[#03fbce]/30"
            >
              <Image
                src={project.image}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute right-[12px] bottom-[12px] left-[12px] translate-y-[10px] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="text-[13px] font-semibold text-white">
                  {project.name}
                </h3>
                <p className="text-[10px] text-white/70">
                  {project.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
      <div className="mt-25 hidden w-full justify-end lg:flex">
        <Image
          src="/images/arrows.svg"
          alt=""
          width={327}
          height={82}
          className="scale-x-[-1]"
        />
      </div>
    </section>
  );
};
