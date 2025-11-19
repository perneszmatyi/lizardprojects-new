"use client";

import Link from "next/link";

import Image from "next/image";
import { CustomButton } from "../Button/CustomButton";

export const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 left-0 z-99">
      <nav className="mx-auto flex w-full items-center justify-between px-4 py-[24px] backdrop-blur-lg sm:px-6 md:px-8 md:backdrop-blur-md lg:px-[80px]">
        <div className="hidden flex-1 lg:block"></div>

        <div className="relative h-[28px] w-[160px] md:h-[36px] md:w-[205.826px]">
          <Link href="/" className="transition-opacity hover:opacity-70">
            <Image
              alt="lizardprojects logo"
              className="h-full w-full"
              src="/images/lp-logo.svg"
              width={206}
              height={36}
            />
          </Link>
        </div>

        <div className="flex flex-1 justify-end">
          <a href="#contact">
            <CustomButton variant="Primary">Get in touch</CustomButton>
          </a>
        </div>
      </nav>
    </div>
  );
};
