import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";

const inter = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXT LEVEL",
  description: "DongHun, Kim의 블로그",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className={inter.className}>
      <body className="flex flex-col items-center">
        <Header />
        <main className="w-full max-w-screen-lg grow">{children}</main>
      </body>
    </html>
  );
}
