import clsx from "clsx";
import { ReactNode } from "react";

export default function Card({
  children,
  variant = "default",
  padding = "md",
  radius = "md",
  className,
}: {
  children: ReactNode;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
}) {
  const cardClasses = clsx(
    "overflow-hidden transition-all",
    // 패딩 설정
    {
      "p-0": padding === "none",
      "p-3": padding === "sm",
      "p-5": padding === "md",
      "p-8": padding === "lg",
    },
    // radius 설정
    {
      "rounded-none": radius === "none",
      "rounded-sm": radius === "sm",
      "rounded-md": radius === "md",
      "rounded-lg": radius === "lg",
      "rounded-full": radius === "full",
    },
    // variant 설정
    {
      "bg-white border border-gray-300": variant === "default",
      "bg-white border border-gray-600 hover:border-gray-700":
        variant === "outlined",
      "bg-white shadow-md hover:shadow-lg": variant === "elevated",
    },
    className,
  );
  return <div className={cardClasses}>{children}</div>;
}
