import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from './_components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NEXT LEVEL',
  description: 'Donghun Kim의 블로그',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
