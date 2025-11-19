"use client";

import { useState } from "react";
import Image from "next/image";
import { CustomButton } from "../Button/CustomButton";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div
      className={`fixed top-0 right-0 left-0 z-99 max-h-[108px] ${
        isMobileMenuOpen && "md:backdrop-blur-0 backdrop-blur-lg"
      }`}
    >
      <nav
        className={`mx-auto flex w-full items-center justify-between px-4 py-[24px] ${
          !isMobileMenuOpen && "backdrop-blur-lg"
        } sm:px-6 md:px-8 md:backdrop-blur-md lg:px-[80px]`}
      >
        <div className="relative h-[28px] w-[160px] md:h-[36px] md:w-[205.826px]">
          <Image
            alt="lizardprojects logo"
            className="h-full w-full"
            src="/images/lp-logo.svg"
            width={206}
            height={36}
          />
        </div>

        <div className="hidden items-center justify-center gap-[35px] lg:flex">
          <a
            href="#what-we-do"
            className="flex items-center justify-center gap-[10px] p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa] transition-colors hover:text-[#03fbce]"
          >
            What we do
          </a>
          <a
            href="#services"
            className="flex items-center justify-center gap-[10px] p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa] transition-colors hover:text-[#03fbce]"
          >
            Services
          </a>
          <a
            href="#projects"
            className="flex items-center justify-center p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa] transition-colors hover:text-[#03fbce]"
          >
            Our work
          </a>
        </div>

        <div className="hidden lg:block">
          <a href="#contact">
            <CustomButton variant="Primary">Get in touch</CustomButton>
          </a>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="flex flex-col items-center justify-center gap-1.5 p-2 lg:hidden"
          aria-label="Toggle mobile menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-[#f2f4fa] transition-all duration-300 ${
              isMobileMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#f2f4fa] transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#f2f4fa] transition-all duration-300 ${
              isMobileMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`min-h-[calc(100vh-76px)] transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 py-6 sm:px-6 md:px-8 lg:px-[80px]">
          <a
            href="#what-we-do"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-[10px] p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa]"
          >
            What we do
          </a>
          <a
            href="#services"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-[10px] p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa]"
          >
            Services
          </a>
          <a
            href="#projects"
            onClick={closeMobileMenu}
            className="flex items-center justify-center p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa]"
          >
            Our work
          </a>
          <div className="pt-2">
            <a href="#contact" onClick={closeMobileMenu}>
              <CustomButton variant="Secondary">Get in touch</CustomButton>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
