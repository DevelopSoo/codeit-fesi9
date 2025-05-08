"use client";
import { useEffect, useRef, useState } from "react";

export default function FadeInSection({
  children,
  threshold = 0.1,
}: {
  children: React.ReactNode;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 화면에 감지가 되면
          if (entry.isIntersecting) {
            setIsVisible(true);
            // 한 번만 애니메이션 적용하기 위해 관찰 중단
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold,
      },
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);
  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}`}
    >
      {children}
    </div>
  );
}
