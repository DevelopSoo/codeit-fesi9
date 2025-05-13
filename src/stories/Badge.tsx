// src/stories/Badge.tsx

export interface BadgeProps {
  /** 뱃지의 크기 */
  size: "xs" | "sm" | "md" | "lg";
  /** 뱃지의 색상 */
  colorPalette: "gray" | "red" | "blue";
  /** 뱃지의 내용 */
  children: React.ReactNode;
}

/** 뱃지 컴포넌트 */
export const Badge = ({
  size = "md",
  colorPalette = "gray",
  children,
}: BadgeProps) => {
  const sizeClass = {
    xs: "text-xs px-2 py-1",
    sm: "text-sm px-2.5 py-1.5",
    md: "text-base px-3 py-12",
    lg: "text-lg px-4 py-3",
  };

  const colorPaletteClass = {
    gray: "bg-gray-100 text-gray-800",
    red: "bg-red-100 text-red-800",
    blue: "bg-blue-100 text-blue-800",
  };

  const className = [
    "rounded-full",
    sizeClass[size],

    colorPaletteClass[colorPalette],
  ].join(" ");

  return <div className={className}>{children}</div>;
};
