"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { MSWComponent } from "./MSWComponent";

export default function Providers({ children }: { children: React.ReactNode }) {
  // QueryClientProvider 안에 있는 컴포넌트에서만 react-query를 쓸 수 있습니다.
  // context api -> AuthContext.Provider 안에서면 useAuth 이런 거 쓸 수 있었다
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000, // 1분
            // 필요에 따라 다른 옵션 설정
          },
        },
      }),
  );

  return (
    <MSWComponent>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </MSWComponent>
  );
}
