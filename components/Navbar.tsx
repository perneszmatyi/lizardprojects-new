"use client";

import { useState } from "react";
import Image from "next/image";

import { Button } from "./Button";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 mx-auto flex w-full max-w-[1440px] items-center justify-between border-[0px_0px_0.5px] border-solid border-[rgba(255,255,255,0)] bg-[#0a0a0a]/80 bg-transparent px-4 py-[24px] backdrop-blur-[5px] backdrop-filter sm:px-6 md:px-8 lg:px-[80px]">
        <div className="relative h-[28px] w-[160px] md:h-[36px] md:w-[205.826px]">
          <Image
            alt="lizardprojects logo"
            className="h-full w-full"
            src="/images/lp-logo.svg"
            width={206}
            height={36}
          />
        </div>

        <div className="hidden items-center justify-center gap-[35px] md:flex">
          <a
            href="#pricing"
            className="flex items-center justify-center gap-[10px] p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa]"
          >
            Pricing
          </a>
          <a
            href="#features"
            className="flex items-center justify-center gap-[10px] p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa]"
          >
            Features
          </a>
          <a
            href="#download"
            className="flex items-center justify-center p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa]"
          >
            Download
            <div className="relative ml-1 h-[6px] w-[12px]">
              <Image
                alt="dropdown"
                className="h-full w-full"
                src="/images/dropdown-icon.svg"
                width={12}
                height={6}
              />
            </div>
          </a>
          <a
            href="#blog"
            className="flex items-center justify-center p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa]"
          >
            Blog
            <div className="relative ml-1 h-[6px] w-[12px]">
              <Image
                alt="dropdown"
                className="h-full w-full"
                src="/images/dropdown-icon.svg"
                width={12}
                height={6}
              />
            </div>
          </a>
        </div>

        <div className="hidden md:block">
          <Button variant="Secondary">Get in touch</Button>
        </div>

        <button
          onClick={toggleMobileMenu}
          className="flex flex-col items-center justify-center gap-1.5 p-2 md:hidden"
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
        className={`fixed top-[76px] right-0 left-0 z-40 bg-[#0a0a0a]/95 backdrop-blur-[5px] backdrop-filter transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "pointer-events-none invisible opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-6 sm:px-6 md:px-8 lg:px-[80px]">
          <a
            href="#pricing"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-[10px] p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa]"
          >
            Pricing
          </a>
          <a
            href="#features"
            onClick={closeMobileMenu}
            className="flex items-center justify-center gap-[10px] p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa]"
          >
            Features
          </a>
          <a
            href="#download"
            onClick={closeMobileMenu}
            className="flex items-center justify-center p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa]"
          >
            Download
            <div className="relative ml-1 h-[6px] w-[12px]">
              <Image
                alt="dropdown"
                className="h-full w-full"
                src="/images/dropdown-icon.svg"
                width={12}
                height={6}
              />
            </div>
          </a>
          <a
            href="#blog"
            onClick={closeMobileMenu}
            className="flex items-center justify-center p-[10px] text-[14px] font-[var(--font-inter)] font-medium text-[#f2f4fa]"
          >
            Blog
            <div className="relative ml-1 h-[6px] w-[12px]">
              <Image
                alt="dropdown"
                className="h-full w-full"
                src="/images/dropdown-icon.svg"
                width={12}
                height={6}
              />
            </div>
          </a>
          <div className="pt-2">
            <Button variant="Secondary">Get in touch</Button>
          </div>
        </div>
      </div>
    </>
  );
};
