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
    "flex items-center justify-center gap-[10px] rounded-[50px] transition-all   duration-300 cursor-pointer font-medium leading-normal whitespace-pre font-[var(--font-inter)]";

  const variantStyles = {
    Primary:
      "bg-blue text-white hover:bg-light-blue-alt h-[42px] px-[35px] py-[15px] text-[14px]",
    Secondary:
      "border border-turquoise border-solid text-turquoise  hover:bg-turquoise/80 hover:border-transparent hover:text-white h-[42px] px-[35px] py-[15px] text-[14px]",
    Success:
      "bg-mint text-deep-blue hover:bg-mint/80 hover:text-deep-blue/80 h-[42px] px-[35px] py-[15px] text-[14px]",
    Filter:
      "bg-mint/20 text-turquoise hover:bg-mint/30 hover:text-turquoise/80 h-[32px] px-[25px] py-[15px] text-[12px]",
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
