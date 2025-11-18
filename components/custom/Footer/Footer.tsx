import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="relative w-full border-t border-white/10 bg-black/30 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-[32px] px-4 py-[48px] sm:px-6 md:gap-[40px] md:px-8 md:py-[56px] lg:px-[80px] lg:py-[64px]">
        <div className="flex w-full flex-col items-center justify-between gap-[32px] md:flex-row md:items-start md:gap-[48px] lg:gap-[64px]">
          <div className="flex flex-col items-center gap-[16px] md:items-start">
            <div className="relative h-[32px] w-[180px] md:h-[40px] md:w-[226px]">
              <Image
                alt="lizardprojects logo"
                className="h-full w-full"
                src="/images/lp-logo.svg"
                width={226}
                height={40}
              />
            </div>
            <p className="text-center text-[13px] text-white/60 md:text-left md:text-[14px]">
              Building digital experiences that last
            </p>
          </div>

          <nav className="flex flex-col items-center gap-[12px]">
            <div className="flex flex-wrap items-center justify-center gap-[20px] md:gap-[24px]">
              <a
                href="#what-we-do"
                className="text-[14px] font-medium text-white/90 transition-colors hover:text-[#03fbce]"
              >
                What we do
              </a>
              <a
                href="#services"
                className="text-[14px] font-medium text-white/90 transition-colors hover:text-[#03fbce]"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-[14px] font-medium text-white/90 transition-colors hover:text-[#03fbce]"
              >
                Our work
              </a>
              <a
                href="#contact"
                className="text-[14px] font-medium text-white/90 transition-colors hover:text-[#03fbce]"
              >
                Contact
              </a>
            </div>
          </nav>

          <div className="flex items-center gap-[12px]">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-[#0077b5]/50 hover:bg-[#0077b5]/10"
            >
              <svg
                className="h-[18px] w-[18px] text-white/80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-[#E4405F]/50 hover:bg-[#E4405F]/10"
            >
              <svg
                className="h-[18px] w-[18px] text-white/80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10"
            >
              <svg
                className="h-[18px] w-[18px] text-white/80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.upwork.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Upwork"
              className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all hover:border-[#6fda44]/50 hover:bg-[#6fda44]/10"
            >
              <svg
                className="h-[18px] w-[18px] text-white/80"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between gap-[16px] border-t border-white/10 pt-[24px] md:flex-row md:pt-[32px]">
          <p className="text-center text-[12px] text-white/60 md:text-left md:text-[13px]">
            © {new Date().getFullYear()} lizardprojects. All rights reserved.
          </p>
          <div className="flex items-center gap-[20px]">
            <a
              href="#"
              className="text-[12px] text-white/60 transition-colors hover:text-white/90 md:text-[13px]"
            >
              Privacy
            </a>
            <a
              href="#"
              className="text-[12px] text-white/60 transition-colors hover:text-white/90 md:text-[13px]"
            >
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
