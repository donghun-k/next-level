import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import TanStackProvider from '@/components/providers/TanstackProvider';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { Toaster } from '@/components/ui/sonner';
import { cn } from '@/utils/className';

import Footer from './_components/Footer';
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
      <body className={cn(inter.className, 'min-w-[1280px]')}>
        <TanStackProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <Toaster />
          </ThemeProvider>
        </TanStackProvider>
      </body>
    </html>
  );
}
