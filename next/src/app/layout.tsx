import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import { ReactNode } from "react";
import { Metadata } from "next";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Noto_Sans_KR({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NEXT LEVEL",
  description:
    "DongHun, Kim의 개인 블로그입니다. 주로 웹 프론트엔드 개발에 관련된 글을 작성합니다.",
  icons: "/favicon.ico",
  openGraph: {
    title: "NEXT LEVEL",
    description:
      "DongHun, Kim의 개인 블로그입니다. 주로 웹 프론트엔드 개발에 관련된 글을 작성합니다.",
    images: [
      {
        url: "/images/profile-image.png",
        width: 230,
        height: 230,
        alt: "Profile image",
      },
    ],
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_URL || ""),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="flex min-h-[100vh] min-w-[1024px] flex-col items-center overflow-x-auto">
        <Header />
        <main className="w-full max-w-screen-lg grow">{children}</main>
        <Footer />
        <div id="backdrop-portal"></div>
      </body>
    </html>
  );
}
