"use client";

import { createContext, useContext, useEffect, useState } from "react";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface ThemeContextType {
  toggleDarkMode: (newTheme: "light" | "dark" | "system") => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme은 ThemeProvider 내부에서 사용해야 합니다.");
  }

  return context;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [isDark, setIsDark] = useState(() => {
    // 1. 로컬스토리지에 값이 존재하면 그걸로 초기값을 설정한다.
    if (typeof localStorage !== "undefined" && localStorage.getItem("theme")) {
      return localStorage.getItem("theme") === "dark";
    }

    // 2. 현재 OS 시스템이 다크모드라면
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return true;
    }

    // 3. 위 두 가지 경우가 아니라면 기본값은 false
    return false;
  });

  const toggleDarkMode = (newTheme: "light" | "dark" | "system") => {
    if (newTheme === "system") {
      localStorage.removeItem("theme");
      setIsDark(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? true
          : false,
      );
    } else {
      localStorage.setItem("theme", newTheme);
      setIsDark(newTheme === "dark");
    }
  };

  useEffect(() => {
    // <html> 태그에 dark 클래스를 추가하거나 제거한다.
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  // OS시스템 감지
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (!("theme" in localStorage)) {
        setIsDark(mediaQuery.matches);
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <ThemeContext.Provider value={{ toggleDarkMode }}>
      {/* 버튼 삭제 */}
      <div className={isDark ? "dark" : ""}>{children}</div>
    </ThemeContext.Provider>
  );
}
