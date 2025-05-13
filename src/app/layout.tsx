// app/layout.tsx

import Providers from "@/providers/Providers";
import "./globals.css";
import { initMocks } from "@/mocks";

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
      </body>
    </html>
  );
}
