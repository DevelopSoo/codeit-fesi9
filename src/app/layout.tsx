// app/layout.tsx

import Providers from "@/providers/Providers";
import "./globals.css";
import { initMocks } from "@/mocks";
import { SpeedInsights } from "@vercel/speed-insights/next";

initMocks();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}
