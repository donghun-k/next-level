import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { PropsWithChildren } from 'react';

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

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, 'max-md:min-w-[375px] min-w-[1280px]')}
      >
        <TanStackProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Header />
            {children}
            <Footer />
            <Toaster />
          </ThemeProvider>
        </TanStackProvider>
      </body>
    </html>
  );
};

export default RootLayout;
