import Image from "next/image";

interface TeamCardProps {
  name: string;
  role: string;
  image: string;
  linkedInIcon: string;
  websiteIcon: string;
}

export const TeamCard = ({
  name,
  role,
  image,
  linkedInIcon,
  websiteIcon,
}: TeamCardProps) => {
  return (
    <div className="flex w-full flex-col items-start gap-[10px]">
      <div className="relative aspect-square w-full overflow-hidden rounded-[8px] shadow-[3.086px_3.086px_19.287px_0px_rgba(0,0,0,0.25)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <Image
            alt=""
            className="absolute inset-0 size-full max-w-none rounded-[8px] object-cover object-center"
            src={image}
            width={136}
            height={136}
          />
          <div className="absolute inset-0 rounded-[8px] bg-gradient-to-b from-[rgba(117,139,243,0.4)] to-[rgba(68,81,141,0.4)]" />
        </div>
      </div>

      <div className="flex w-full flex-col items-start gap-0 pt-0 pb-[3px]">
        <p className="w-full text-[14px] leading-[24px] font-[var(--font-inter)] font-medium text-[#c1c3c9]">
          {name}
        </p>
        <p className="w-full text-[11px] leading-[24px] font-[var(--font-inter)] font-medium text-[#c1c3c9]">
          {role}
        </p>
      </div>

      <div className="flex w-full items-center gap-[15px]">
        <div className="flex items-center">
          <div className="relative size-[15px]">
            <Image
              alt=""
              className="block size-full max-w-none"
              src={linkedInIcon}
              width={15}
              height={15}
            />
          </div>
        </div>

        <div className="flex items-center">
          <div className="relative size-[10px]">
            <Image
              alt=""
              className="block size-full max-w-none"
              src={websiteIcon}
              width={10}
              height={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
