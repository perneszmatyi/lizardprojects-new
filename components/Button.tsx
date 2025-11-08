import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "Primary" | "Secondary" | "Success" | "Filter";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
}

export const Button = ({
  variant = "Primary",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "flex items-center justify-center gap-[10px] rounded-[50px] font-medium leading-normal whitespace-pre font-[var(--font-inter)]";

  const variantStyles = {
    Primary:
      "bg-[#5674fb] text-[#f2f4fa] h-[42px] px-[35px] py-[15px] text-[14px]",
    Secondary:
      "border border-[#03fbce] border-solid text-[#03fbce] h-[42px] px-[35px] py-[15px] text-[14px]",
    Success:
      "bg-[#2ad6bf] text-[#283061] h-[42px] px-[35px] py-[15px] text-[14px]",
    Filter:
      "bg-[rgba(42,214,191,0.2)] text-[#03fbce] h-[32px] px-[25px] py-[15px] text-[12px]",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
