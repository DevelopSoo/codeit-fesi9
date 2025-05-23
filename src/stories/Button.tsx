import React from "react";

import "./button.css";

export interface ButtonProps {
  /** 페이지의 주요한 호출 버튼인지 여부 */
  primary?: boolean;
  /** 배경색 */
  backgroundColor?: string;
  /** 버튼 크기 */
  size?: "small" | "medium" | "large";
  /** 버튼 레이블 */
  label: string;
  /** 클릭 이벤트 핸들러 */
  onClick?: () => void;
}

/** 사용자 상호작용을 위한 기본 UI 컴포넌트 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "bg-blue-500 text-white"
    : "storybook-button--secondary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " ",
      )}
      {...props}
    >
      {label}
      <style jsx>{`
        button {
          background-color: ${backgroundColor};
        }
      `}</style>
    </button>
  );
};
